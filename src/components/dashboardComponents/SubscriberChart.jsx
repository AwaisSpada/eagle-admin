import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const SubscriberChart = () => {
  const [timeFrame, setTimeFrame] = useState("week");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sample data for different timeframes
  const chartData = {
    week: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
      values: [
        [0, 1, 0, 1, 0], // Basic
        [0, 1, 0, 1, 0], // Premium
        [0, 0, 0, 2, 0], // Ultimate
        [0, 0, 0, 0, 0], // Elite
      ],
    },
    month: {
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
      values: [
        [1, 50, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // Basic
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // Premium
        [10, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0], // Ultimate
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Elite
      ],
    },
    year: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      values: [
        [5, 8, 12, 15, 10], // Basic
        [4, 6, 10, 12, 8], // Premium
        [3, 5, 8, 10, 6], // Ultimate
        [1, 2, 3, 4, 2], // Elite
      ],
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: timeFrame === "year" ? 40 : 2.5,
        ticks: {
          stepSize: timeFrame === "year" ? 5 : 0.5,
          color: "#6b7280",
        },
        grid: {
          color: "#2a2d2f",
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#2a2d2f",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        cornerRadius: 4,
      },
    },
  };

  const data = {
    labels: chartData[timeFrame].labels,
    datasets: [
      {
        label: "Basic",
        data: chartData[timeFrame].values[0],
        backgroundColor: "#1A98FF",
        borderRadius: 4,
      },
      {
        label: "Premium Plan",
        data: chartData[timeFrame].values[1],
        backgroundColor: "#61abe7",
        borderRadius: 4,
      },
      {
        label: "Ultimate Plan",
        data: chartData[timeFrame].values[2],
        backgroundColor: "lightblue",
        borderRadius: 4,
      },
      {
        label: "Elite Plan",
        data: chartData[timeFrame].values[3],
        backgroundColor: "#05233b",
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="w-full bg-card-background  p-4 rounded-lg">
      <div className="flex justify-between items-center ">
        <h2 className="text-black text-lg font-semibold">New Subscribers</h2>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#2a2d2f] text-white px-3 py-1 rounded flex items-center gap-2"
          >
            {timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)} ▾
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-32 bg-[#2a2d2f] rounded-lg shadow-lg overflow-hidden z-10">
              <button
                onClick={() => {
                  setTimeFrame("week");
                  setIsDropdownOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-white hover:bg-[#3a3d3f]"
              >
                Week
              </button>
              <button
                onClick={() => {
                  setTimeFrame("month");
                  setIsDropdownOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-white hover:bg-[#3a3d3f]"
              >
                Month
              </button>
              <button
                onClick={() => {
                  setTimeFrame("year");
                  setIsDropdownOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-white hover:bg-[#3a3d3f]"
              >
                Year
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="h-[300px]">
        <Bar options={options} data={data} />
      </div>

      <div className="flex gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#ef4444] rounded"></div>
          <span className="text-gray-400 text-sm">Basic</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#dc2626] rounded"></div>
          <span className="text-gray-400 text-sm">Premium Plan</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#b91c1c] rounded"></div>
          <span className="text-gray-400 text-sm">Ultimate Plan</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#991b1b] rounded"></div>
          <span className="text-gray-400 text-sm">Elite Plan</span>
        </div>
      </div>
    </div>
  );
};

export default SubscriberChart;
