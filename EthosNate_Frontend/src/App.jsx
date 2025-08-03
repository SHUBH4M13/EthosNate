import { useEffect } from "react";
import ShineButton from "./ShineButton";
import QuotesCarousel from "./QuotesCarousel";
import {
  getProviderAndSigner,
  createCampaignOnBlockchain,
  GetAllCampaigns
} from "./utils/blockchain";

function App() {
  useEffect(() => {
    const fetchCampaigns = async () => {
      const data = await GetAllCampaigns();
      console.log("All Campaigns:", data);
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Decentralized Campaigns</h1>
      <QuotesCarousel />
    </div>
  );
}

export default App;
