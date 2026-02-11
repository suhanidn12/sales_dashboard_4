'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '../atoms/Input';

interface SalesFilterProps {
  threshold: number;
  onThresholdChange: (threshold: number) => void;
}

export const SalesFilter: React.FC<SalesFilterProps> = ({
  threshold,
  onThresholdChange,
}) => {
  const [inputValue, setInputValue] = useState<string>(threshold === 0 ? '' : threshold.toString());

  useEffect(() => {
    setInputValue(threshold === 0 ? '' : threshold.toString());
  }, [threshold]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value === '') {
      onThresholdChange(0);
    } else {
      const numValue = parseInt(value, 10);
      if (!isNaN(numValue) && numValue >= 0) {
        onThresholdChange(numValue);
      }
    }
  };

  const handleReset = () => {
    onThresholdChange(0);
    setInputValue('');
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-end">
        <div className="flex-1 w-full">
          <Input
            type="number"
            label="Sales Threshold"
            placeholder="Enter minimum sales amount"
            value={inputValue}
            onChange={handleChange}
            className="font-bold bg-blue-50 text-gray-900 border-2 border-blue-200 focus:border-blue-500 w-full"
          />
        </div>
        <button
          onClick={handleReset}
          className="
            inline-flex items-center justify-center
            px-5 py-2.5
            bg-teal-600 
            hover:bg-teal-700 
            active:bg-teal-800
            text-white 
            font-semibold 
            text-sm 
            rounded-lg
            shadow-md 
            hover:shadow-lg
            transition-all 
            duration-200 
            ease-in-out
            border 
            border-transparent
            hover:border-teal-400
            focus:outline-none 
            focus:ring-2 
            focus:ring-teal-500 
            focus:ring-offset-2
            min-w-[100px]
            h-11
          "
        >
          <span className="mr-2 text-lg">↺</span>
          Reset
        </button>
      </div>
      
      {threshold > 0 && (
        <div className="mt-3 p-2 bg-teal-50 border border-teal-300 rounded-lg">
          <p className="text-xs sm:text-sm text-teal-800 font-medium flex items-center gap-1">
            <span className="text-lg">🔍</span> 
            Filter active: Showing only months with sales ≥ 
            <span className="font-bold bg-teal-200 px-2 py-0.5 rounded text-teal-900">
              ${threshold.toLocaleString()}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};
