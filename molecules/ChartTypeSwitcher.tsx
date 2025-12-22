'use client';

import React from 'react';
import { Button } from '../atoms/Button';

export type ChartType = 'bar' | 'line' | 'pie';

interface ChartTypeSwitcherProps {
  currentType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

export const ChartTypeSwitcher: React.FC<ChartTypeSwitcherProps> = ({
  currentType,
  onTypeChange,
}) => {
  const chartTypes: { type: ChartType; label: string }[] = [
    { type: 'bar', label: 'Bar Chart' },
    { type: 'line', label: 'Line Chart' },
    { type: 'pie', label: 'Pie Chart' },
  ];

  return (
    <div className="flex gap-2">
      {chartTypes.map(({ type, label }) => (
        <Button
          key={type}
          variant={currentType === type ? 'primary' : 'outline'}
          isActive={currentType === type}
          onClick={() => onTypeChange(type)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

