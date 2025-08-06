import React, { useState } from "react";
import axios from "axios"

import {
    getProviderAndSigner,
    createCampaignOnBlockchain,
    GetAllCampaigns
  } from "./utils/blockchain";


export default function AddNewCampaign() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        goal: "",
        ContractAddress: "",
        duration: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const createNewCampaign = async (data) => {
        try {
            const contract_address = await createCampaignOnBlockchain(data);
            const payload = {
                ...formData ,
                ContractAddress: contract_address
            };
        
            const res = await axios.post("http://localhost:8007/add/event", payload);
            alert("New campaign added! Refresh the page.");

            if( res.status === 201 ){
                console.log("Successfully added")
            }
        } catch (error) {
            console.error("Failed to create campaign:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createNewCampaign(formData);
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create New Campaign</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium">Campaign Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        name="description"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Goal Amount (ETH)</label>
                    <input
                        type="number"
                        name="goal"
                        min="0"
                        step="0.01"
                        value={formData.goal}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Duration (Days)</label>
                    <input
                        type="number"
                        name="duration"
                        min="1"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                    Launch Campaign
                </button>
            </form>
        </div>
    );
}
