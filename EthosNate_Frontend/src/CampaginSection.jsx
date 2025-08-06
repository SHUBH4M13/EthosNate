import React, { useEffect, useState } from 'react'
import axios from "axios"
import CharityCards from './CharityCards';

export default function CampaginSection() {

    const [Data,setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8007");
            console.log(response.data);
          } catch (error) {
            console.log("error", error);
          }
        };
      
        fetchData();
      }, []);
      

    const campaigns = [
        {
            _id: "1",
            EventTitle: "Rebuild Homes After Floods",
            EventDesc: "Help families rebuild their homes after the recent floods in Assam. Every donation counts.",
            ContractAddress: "0xA1B2C3D4E5F6...",
            Goal: 10000,
            Raised: 7200,
            isCompleted: false,
            Deadline: "2025-08-20T00:00:00.000Z",
            createdAt: "2025-07-25T10:30:00.000Z",
            updatedAt: "2025-08-03T16:00:00.000Z"
        },
        {
            _id: "2",
            EventTitle: "Medical Aid for Earthquake Survivors",
            EventDesc: "Supporting emergency medical camps for earthquake survivors in Nepal. Donate to save lives.",
            ContractAddress: "0xF7E6D5C4B3A2...",
            Goal: 15000,
            Raised: 15000,
            isCompleted: true,
            Deadline: "2025-08-01T00:00:00.000Z",
            createdAt: "2025-06-15T09:00:00.000Z",
            updatedAt: "2025-07-30T18:20:00.000Z"
        },
        {
            _id: "3",
            EventTitle: "Clean Drinking Water for Rural Areas",
            EventDesc: "Install water purifiers and borewells in remote villages of Maharashtra. Join the clean water mission.",
            ContractAddress: "0x1F2E3D4C5B6A...",
            Goal: 8000,
            Raised: 2000,
            isCompleted: false,
            Deadline: "2025-08-08T00:00:00.000Z",
            createdAt: "2025-07-10T12:45:00.000Z",
            updatedAt: "2025-08-02T10:00:00.000Z"
        },
        {
            _id: "4",
            EventTitle: "Emergency Food Supplies for Drought-Hit Families",
            EventDesc: "Provide daily meals and ration kits to families affected by the drought in Rajasthan.",
            ContractAddress: "0x9A8B7C6D5E4F...",
            Goal: 12000,
            Raised: 11900,
            isCompleted: false,
            Deadline: "2025-08-05T00:00:00.000Z", // assume today is 6th Aug, so it's expired
            createdAt: "2025-07-01T08:15:00.000Z",
            updatedAt: "2025-08-04T17:30:00.000Z"
        }
    ];


    return (
        <div  className=' mt-10 grid grid-cols-3 gap-5 px-15 '>
            {campaigns.map((campaign, idx) => (
                    <CharityCards
                        key={campaign._id || idx}
                        _id={campaign._id}
                        EventTitle={campaign.title}
                        EventDesc={campaign.Desc}
                        Goal={campaign.Goal}
                        Raised={campaign.Raised}
                        isCompleted={campaign.isCompleted}
                        Deadline={campaign.Deadline}
                    />
            ))}
        </div>
    )
}
