import { useEffect } from "react";
import ShineButton from "./ShineButton";
import QuotesCarousel from "./QuotesCarousel";
import {
  getProviderAndSigner,
  createCampaignOnBlockchain,
  GetAllCampaigns
} from "./utils/blockchain";
import AddNewCampaign from "./AddNewCampaign";

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
      <AddNewCampaign/>
    </div>
  );
}

export default App;
