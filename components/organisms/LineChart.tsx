'use client';

import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SalesData } from '@/lib/salesData';

interface LineChartProps {
  data: SalesData[];
  threshold?: number;
}

export const LineChart: React.FC<LineChartProps> = ({ data, threshold = 0 }) => {
  const filteredData = data.filter(item => item.sales >= threshold);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsLineChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} name="Sales ($)" />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

