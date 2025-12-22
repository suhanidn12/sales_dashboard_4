'use client';

import React from 'react';
import { BarChart } from './BarChart';
import { LineChart } from './LineChart';
import { PieChart } from './PieChart';
import { ChartType } from '../molecules/ChartTypeSwitcher';
import { SalesData } from '@/lib/salesData';

interface SalesChartProps {
  data: SalesData[];
  chartType: ChartType;
  threshold?: number;
}

export const SalesChart: React.FC<SalesChartProps> = ({
  data,
  chartType,
  threshold = 0,
}) => {
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <BarChart data={data} threshold={threshold} />;
      case 'line':
        return <LineChart data={data} threshold={threshold} />;
      case 'pie':
        return <PieChart data={data} threshold={threshold} />;
      default:
        return <BarChart data={data} threshold={threshold} />;
    }
  };

  return <div className="w-full">{renderChart()}</div>;
};

