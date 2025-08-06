import React, { useEffect, useState } from 'react'
import axios from "axios"
import CharityCards from './CharityCards';
import { getProviderAndSigner , createCampaignOnBlockchain , GetAllCampaigns} from "./utils/blockchain.jsx"

export default function CampaginSection() {

    const [Data,setData] = useState([])
    GetAllCampaigns();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8007");
            setData(response.data)
          } catch (error) {
            console.log("error", error);
          }
        };
      
        fetchData();
      }, []);

    return (
        <div  className=' mt-10 grid grid-cols-3 gap-5 px-15 '>
            {Data.map((campaign, idx) => (
                    <CharityCards
                        key={campaign._id || idx}
                        _id={campaign._id}
                        EventTitle={campaign.title}
                        EventDesc={campaign.Desc}
                        ContractAddress = {campaign.ContractAddress}
                        Goal={campaign.Goal}
                        Raised={campaign.Raised}
                        isCompleted={campaign.isCompleted}
                        Deadline={campaign.Deadline}
                    />
            ))}
        </div>
    )
}
