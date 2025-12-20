'use client';

import React, { useState, useMemo } from 'react';
import { Card } from '@/components/atoms/Card';
import { ChartTypeSwitcher, ChartType } from '@/components/molecules/ChartTypeSwitcher';
import { SalesFilter } from '@/components/molecules/SalesFilter';
import { SalesChart } from '@/components/organisms/SalesChart';
import { YearSelector } from '@/components/organisms/YearSelector';
import { allSalesData, YearlySales } from '@/lib/salesData';

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [threshold, setThreshold] = useState<number>(0);

  const selectedYearData = useMemo(() => {
    return allSalesData.find((data: YearlySales) => data.year === selectedYear) || allSalesData[2];
  }, [selectedYear]);

  const availableYears = useMemo(() => {
    return allSalesData.map((data: YearlySales) => data.year);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Sales Dashboard
          </h1>
          <p className="text-gray-600">
            Analyze sales performance across different years
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Card className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Sales Overview - {selectedYear}
              </h2>
              <div className="mb-4">
                <p className="text-lg text-gray-700 mb-2">
                  Total Sales: <span className="font-bold text-blue-600">${selectedYearData.total.toLocaleString()}</span>
                </p>
              </div>
            </div>
            <SalesChart
              data={selectedYearData.data}
              chartType={chartType}
              threshold={threshold}
            />
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Controls
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Select Year
                </h3>
                <YearSelector
                  years={availableYears}
                  selectedYear={selectedYear}
                  onYearChange={setSelectedYear}
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Chart Type
                </h3>
                <ChartTypeSwitcher
                  currentType={chartType}
                  onTypeChange={setChartType}
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Filter
                </h3>
                <SalesFilter
                  threshold={threshold}
                  onThresholdChange={setThreshold}
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allSalesData.map((yearData: YearlySales) => (
            <Card key={yearData.year}>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {yearData.year} Summary
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">
                ${yearData.total.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">
                Average: ${Math.round(yearData.total / 12).toLocaleString()}/month
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

