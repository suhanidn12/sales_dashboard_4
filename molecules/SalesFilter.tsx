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

  return (
    <div className="w-full max-w-xs">
      <Input
        type="number"
        label="Sales Threshold"
        placeholder="Enter minimum sales amount"
        value={inputValue}
        onChange={handleChange}
        className="font-bold bg-blue-50 text-gray-900"
      />
    </div>
  );
};

