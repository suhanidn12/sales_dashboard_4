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
  total: 1847500,
  data: [
    { month: "Jan", sales: 125000 },
    { month: "Feb", sales: 118000 },
    { month: "Mar", sales: 142000 },
    { month: "Apr", sales: 138000 },
    { month: "May", sales: 156000 },
    { month: "Jun", sales: 168000 },
    { month: "Jul", sales: 175000 },
    { month: "Aug", sales: 172000 },
    { month: "Sep", sales: 185000 },
    { month: "Oct", sales: 198000 },
    { month: "Nov", sales: 215000 },
    { month: "Dec", sales: 238000 },
  ],
};

export const salesData2023: YearlySales = {
  year: 2023,
  total: 2146800,
  data: [
    { month: "Jan", sales: 148000 },
    { month: "Feb", sales: 142000 },
    { month: "Mar", sales: 168000 },
    { month: "Apr", sales: 165000 },
    { month: "May", sales: 182000 },
    { month: "Jun", sales: 195000 },
    { month: "Jul", sales: 208000 },
    { month: "Aug", sales: 205000 },
    { month: "Sep", sales: 218000 },
    { month: "Oct", sales: 232000 },
    { month: "Nov", sales: 252000 },
    { month: "Dec", sales: 277000 },
  ],
};

export const salesData2024: YearlySales = {
  year: 2024,
  total: 2489200,
  data: [
    { month: "Jan", sales: 172000 },
    { month: "Feb", sales: 168000 },
    { month: "Mar", sales: 195000 },
    { month: "Apr", sales: 192000 },
    { month: "May", sales: 212000 },
    { month: "Jun", sales: 228000 },
    { month: "Jul", sales: 242000 },
    { month: "Aug", sales: 238000 },
    { month: "Sep", sales: 252000 },
    { month: "Oct", sales: 268000 },
    { month: "Nov", sales: 292000 },
    { month: "Dec", sales: 322000 },
  ],
};

export const allSalesData: YearlySales[] = [
  salesData2022,
  salesData2023,
  salesData2024,
];

