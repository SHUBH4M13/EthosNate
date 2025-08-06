import React, { useState } from 'react'
import ShineButton from './ShineButton'
import { useNavigate } from 'react-router'
import { PayToCampaign } from "./utils/blockchain.jsx"

export default function CharityCards({
    _id,
    EventTitle,
    EventDesc,
    ContractAddress,
    Goal,
    Raised,
    isCompleted,
    Deadline,
    createdAt,
    updatedAt
}) {
    //   const navigate = useNavigate();

    const [isDonating, setisDonating] = useState(false);
    const [donationAmount, setDonationAmount] = useState('0');
    console.log("CharityCard : " , ContractAddress )
    const progressPercentage = Goal && Raised ? (parseFloat(Raised) / parseFloat(Goal)) * 100 : 0;

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'ETH',
            minimumFractionDigits: 4
        }).format(amount);
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const isExpired = new Date(Deadline) < new Date();

    return (
        <div className='flex flex-col justify-between shadow-md h-[400px] w-[400px] rounded-2xl hover:shadow-[#2e7d32] duration-300 p-6 bg-white'>

            <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
                        {EventTitle}
                    </h3>
                    {isCompleted && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Completed
                        </span>
                    )}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {EventDesc}
                </p>

                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-700">
                            Raised: {formatCurrency(Raised)} ETH
                        </span>
                        <span className="text-sm text-gray-500">
                            Goal: {formatCurrency(Goal)} ETH
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-[#2e7d32] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                        ></div>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">
                            {progressPercentage.toFixed(1)}% funded
                        </span>
                        <span className={`text-xs ${isExpired ? 'text-red-500' : 'text-gray-500'}`}>
                            {isExpired ? 'Expired' : `Ends: ${formatDate(Deadline)}`}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                {
                    isDonating ? (
                        <div className="flex flex-col gap-3 p-4 bg-white rounded-lg border">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="donationAmount" className="text-sm font-medium text-gray-700">
                                    Enter Donation Amount
                                </label>
                                <input
                                    id="donationAmount"
                                    type="text"
                                    value={donationAmount}
                                    onChange={(e) => setDonationAmount(e.target.value)}
                                    placeholder="Enter amount"
                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div className="flex gap-2 justify-end">
                                <button
                                    onClick={() => setisDonating(false)}
                                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={() => {
                                        PayToCampaign({ value: donationAmount, campaignAddress: ContractAddress })
                                    }}
                                    disabled={!donationAmount.trim()}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                                >
                                    Proceed
                                </button>
                            </div>
                        </div>
                    ) : (
                        <ShineButton
                            onClick={() => { setisDonating(prev => !prev) }}
                            Text={isCompleted ? "View Campaign" : "Donate to this Cause"}
                            disabled={isExpired && !isCompleted}
                        />
                    )
                }


                {createdAt && (
                    <p className="text-xs text-gray-400 mt-2 text-center">
                        Created on {formatDate(createdAt)}
                    </p>
                )}
            </div>
        </div>
    )
}