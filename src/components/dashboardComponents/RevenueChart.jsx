import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
);

const RevenueChart = () => {
  // Sample data for different years
  const revenueData = {
    2022: [5, 10, 15, 20, 25, 30, 50, 10, 5, 0, 0, 0],
    2023: [2, 5, 7, 10, 20, 25, 310, 0, 0, 0, 0, 0],
    2024: [15, 20, 10, 5, 2, 30, 100, 50, 20, 5, 3, 0],
  };

  const [selectedYear, setSelectedYear] = useState(2023);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Revenue",
        data: revenueData[selectedYear], // Dynamically change data based on year
        borderColor: "#1A98FF",
        backgroundColor: "rgba(132, 120, 235, 0.2)",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#000",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            ` Total Revenue: $${tooltipItem.raw.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, grid: { color: "rgba(0, 0, 0, 1)" } },
    },
  };

  return (
    <div className="h-[370px] w-full bg-card-background p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Total Revenue</h2>
        {/* Year Selector Dropdown */}
        <select
          className="bg-gray-700 text-white px-3 py-1 rounded"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {Object.keys(revenueData).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default RevenueChart;
