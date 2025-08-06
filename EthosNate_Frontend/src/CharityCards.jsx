import React from 'react'
import ShineButton from './ShineButton'
import { useNavigate } from 'react-router'

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
  const navigate = useNavigate();
  
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
        
        <ShineButton
          onClick={() => { 
            if (_id) {
              navigate(`/campaign/${_id}`)
            }
          }}
          Text={isCompleted ? "View Campaign" : "Donate to this Cause"} 
          disabled={isExpired && !isCompleted}
        />
        
        {createdAt && (
          <p className="text-xs text-gray-400 mt-2 text-center">
            Created on {formatDate(createdAt)}
          </p>
        )}
      </div>
    </div>
  )
}