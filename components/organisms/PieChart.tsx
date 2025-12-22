'use client';

import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SalesData } from '@/lib/salesData';

interface PieChartProps {
  data: SalesData[];
  threshold?: number;
}

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a', '#172554', '#0f172a', '#0284c7', '#0369a1'];

export const PieChart: React.FC<PieChartProps> = ({ data, threshold = 0 }) => {
  const filteredData = data.filter(item => item.sales >= threshold);
  const chartData = filteredData.map(item => ({ ...item }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsPieChart>
        {/* @ts-expect-error - Recharts Pie component type definition issue */}
        <Pie
          data={chartData as any}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ month, percent }: any) => `${month}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="sales"
          nameKey="month"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

