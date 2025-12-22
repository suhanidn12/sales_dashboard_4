import { NextResponse } from 'next/server';
import { allSalesData, YearlySales } from '@/lib/salesData';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year');

    if (year) {
      const yearNum = parseInt(year);
      const yearData = allSalesData.find((data: YearlySales) => data.year === yearNum);
      
      if (!yearData) {
        return NextResponse.json(
          { error: `Sales data for year ${year} not found` },
          { status: 404 }
        );
      }

      return NextResponse.json(yearData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return NextResponse.json(allSalesData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching sales data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

