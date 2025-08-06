import { ethers } from "ethers";
import factoryABI from "../ABIS/factoryABI.json";
import ContractABI from "../ABIS/ContractABI.json"

const FACTORY_CONTRACT_ADDRESS = import.meta.env.VITE_APP_FACTORY_KEY;
const ALCHEMY_API_KEY = import.meta.env.VITE_APP_ALCHEMY_API_KEY;


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
  const receipt = await tx.wait();


  console.log("receipt: ", receipt);

  const event = receipt.logs
    .map(log => {
      try {
        return factoryContract.interface.parseLog(log);
      } catch {
        return null;
      }
    })
    .find(log => log && log.name === "CampaignCreated");

  if (!event) {
    throw new Error("CampaignCreated event not found in transaction logs");
  }

  const campaignAddress = event.args.campaignAddress;

  console.log("Campaign created at address:", campaignAddress);
  return campaignAddress;
}

export async function GetAllCampaigns() {
  const provider = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`);
  const factoryContract = new ethers.Contract(FACTORY_CONTRACT_ADDRESS, factoryABI, provider);

  const Data = await factoryContract.getAllCampaigns();
  console.log(Data);
  return Data;
}

export async function PayToCampaign({ value, campaignAddress }) {
  console.log(campaignAddress);
  const { signer } = await getProviderAndSigner();
  const campaignContract = new ethers.Contract(campaignAddress,ContractABI,signer);

  const tx = await campaignContract.donate({
    value: ethers.parseEther(value)
  });

  await tx.wait();
  return tx;
}
