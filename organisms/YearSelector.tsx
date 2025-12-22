'use client';

import React from 'react';
import { Button } from '../atoms/Button';

interface YearSelectorProps {
  years: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export const YearSelector: React.FC<YearSelectorProps> = ({
  years,
  selectedYear,
  onYearChange,
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {years.map((year) => (
        <Button
          key={year}
          variant={selectedYear === year ? 'primary' : 'outline'}
          isActive={selectedYear === year}
          onClick={() => onYearChange(year)}
        >
          {year}
        </Button>
      ))}
    </div>
  );
};

