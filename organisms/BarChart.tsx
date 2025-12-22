'use client';

import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SalesData } from '@/lib/salesData';

interface BarChartProps {
  data: SalesData[];
  threshold?: number;
}

export const BarChart: React.FC<BarChartProps> = ({ data, threshold = 0 }) => {
  const filteredData = data.filter(item => item.sales >= threshold);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsBarChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#3b82f6" name="Sales ($)" />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

