'use client';

import React from 'react';
import { Input } from '../atoms/Input';

interface SalesFilterProps {
  threshold: number;
  onThresholdChange: (threshold: number) => void;
}

export const SalesFilter: React.FC<SalesFilterProps> = ({
  threshold,
  onThresholdChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    onThresholdChange(value);
  };

  return (
    <div className="w-full max-w-xs">
      <Input
        type="number"
        label="Sales Threshold"
        placeholder="Enter minimum sales amount"
        value={threshold}
        onChange={handleChange}
      />
    </div>
  );
};

