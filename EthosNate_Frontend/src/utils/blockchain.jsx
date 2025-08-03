import { ethers } from "ethers";
import factoryABI from "../ABIS/factoryABI.json";

const FACTORY_CONTRACT_ADDRESS = import.meta.env.VITE_APP_FACTORY_KEY;

export async function getProviderAndSigner() {
  if (!window.ethereum) console.log("MetaMask Not found");
  await window.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return { provider, signer };
}

export async function createCampaignOnBlockchain({ title, goal, duration }) {
  const { signer } = await getProviderAndSigner();
  const factoryContract = new ethers.Contract(FACTORY_CONTRACT_ADDRESS, factoryABI, signer);

  const parseGoalEth = ethers.parseEther(goal.toString());

  const tx = await factoryContract.createCampaign(title, parseGoalEth, duration);
  await tx.wait();

  console.log("Campaign created on blockchain");
}

export async function GetAllCampaigns() {
  const { provider } = await getProviderAndSigner();
  const factoryContract = new ethers.Contract(FACTORY_CONTRACT_ADDRESS, factoryABI, provider);

  const Data = await factoryContract.getAllCampaigns();

  return Data;
}
