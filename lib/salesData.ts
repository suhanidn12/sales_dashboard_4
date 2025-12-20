export interface SalesData {
  month: string;
  sales: number;
}

export interface YearlySales {
  year: number;
  data: SalesData[];
  total: number;
}

export const salesData2022: YearlySales = {
  year: 2022,
  total: 1245000,
  data: [
    { month: "Jan", sales: 85000 },
    { month: "Feb", sales: 92000 },
    { month: "Mar", sales: 101000 },
    { month: "Apr", sales: 95000 },
    { month: "May", sales: 108000 },
    { month: "Jun", sales: 112000 },
    { month: "Jul", sales: 105000 },
    { month: "Aug", sales: 118000 },
    { month: "Sep", sales: 125000 },
    { month: "Oct", sales: 132000 },
    { month: "Nov", sales: 145000 },
    { month: "Dec", sales: 158000 },
  ],
};

export const salesData2023: YearlySales = {
  year: 2023,
  total: 1458000,
  data: [
    { month: "Jan", sales: 102000 },
    { month: "Feb", sales: 115000 },
    { month: "Mar", sales: 128000 },
    { month: "Apr", sales: 120000 },
    { month: "May", sales: 135000 },
    { month: "Jun", sales: 142000 },
    { month: "Jul", sales: 138000 },
    { month: "Aug", sales: 150000 },
    { month: "Sep", sales: 162000 },
    { month: "Oct", sales: 175000 },
    { month: "Nov", sales: 188000 },
    { month: "Dec", sales: 203000 },
  ],
};

export const salesData2024: YearlySales = {
  year: 2024,
  total: 1682000,
  data: [
    { month: "Jan", sales: 125000 },
    { month: "Feb", sales: 138000 },
    { month: "Mar", sales: 152000 },
    { month: "Apr", sales: 145000 },
    { month: "May", sales: 162000 },
    { month: "Jun", sales: 175000 },
    { month: "Jul", sales: 168000 },
    { month: "Aug", sales: 182000 },
    { month: "Sep", sales: 195000 },
    { month: "Oct", sales: 208000 },
    { month: "Nov", sales: 220000 },
    { month: "Dec", sales: 232000 },
  ],
};

export const allSalesData: YearlySales[] = [
  salesData2022,
  salesData2023,
  salesData2024,
];

