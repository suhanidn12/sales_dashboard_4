import { YearlySales } from './salesData';

const getApiUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
};

export async function fetchSalesData(year?: number): Promise<YearlySales[]> {
  try {
    const baseUrl = getApiUrl();
    const url = year 
      ? `${baseUrl}/api/sales?year=${year}`
      : `${baseUrl}/api/sales`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch sales data: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (year) {
      return [data];
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching sales data from API:', error);
    throw error;
  }
}

export async function fetchYearlySalesData(year: number): Promise<YearlySales> {
  const data = await fetchSalesData(year);
  if (data.length === 0) {
    throw new Error(`No data found for year ${year}`);
  }
  return data[0];
}

