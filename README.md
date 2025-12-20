# Sales Dashboard

A modern sales dashboard application built with Next.js 15, TypeScript, and Tailwind CSS. This application displays sales data for 2022, 2023, and 2024 with interactive charts and filtering capabilities.

## Features

- **Multiple Chart Types**: Switch between Bar, Line, and Pie charts using Recharts
- **Year Selection**: View sales data for 2022, 2023, and 2024
- **Custom Filter**: Set a sales threshold to filter data points
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Atomic Design**: Component structure following atomic design principles

## Project Structure

This project follows the atomic design methodology:

```
components/
  atoms/          # Basic building blocks (Button, Input, Card)
  molecules/      # Simple component groups (ChartTypeSwitcher, SalesFilter)
  organisms/      # Complex components (BarChart, LineChart, PieChart, SalesChart, YearSelector)
  templates/      # Page-level templates (reserved for future use)
app/
  dashboard/      # Dashboard page
  page.tsx       # Home page
lib/
  salesData.ts   # Mock sales data for 2022, 2023, 2024
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Charting library for React

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sales-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Details

### What Was Built

1. **Atomic Design Structure**: Organized components into atoms, molecules, and organisms for better maintainability and reusability

2. **Mock Sales Data**: Created realistic sales data for three years (2022, 2023, 2024) with monthly breakdowns

3. **Chart Components**: 
   - Bar Chart: Displays sales data as vertical bars
   - Line Chart: Shows sales trends over time
   - Pie Chart: Visualizes sales distribution by month

4. **Interactive Features**:
   - Year selector to switch between different years
   - Chart type switcher to change visualization
   - Sales threshold filter to filter data points

5. **Dashboard Page**: Main dashboard with all components integrated, showing sales overview and controls

### Component Hierarchy

- **Atoms**: Button, Input, Card
- **Molecules**: ChartTypeSwitcher, SalesFilter
- **Organisms**: BarChart, LineChart, PieChart, SalesChart, YearSelector

## Future Enhancements

- **API Integration**: Replace mock data with real API calls
- **Additional Chart Types**: Add more visualization options
- **Data Export**: Export charts and data to various formats
- **Real-time Updates**: Implement real-time data updates
- **Advanced Filtering**: Add more filtering options (date range, categories, etc.)

## License

This project is open source and available under the MIT License.
