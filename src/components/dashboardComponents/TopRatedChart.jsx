import React, { useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const TopRatedChart = () => {
  const [activeChart, setActiveChart] = useState(null);

  // Sample data
  const moviesCount = 16;
  const tvShowsCount = 10;
  const totalCount = moviesCount + tvShowsCount;

  ChartJS.defaults.elements.arc.borderWidth = 0;
  ChartJS.defaults.datasets.doughnut.spacing = 0;

  const baseOptions = {
    cutout: "80%",
    rotation: -60, // Starts from about 1 o'clock position
    circumference: 270, // Makes a 3/4 circle
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 0,
        borderRadius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  const getData = (type) => {
    const maxValue = 100;
    const percentage = 35; // Adjust this to control the red segment size

    return {
      datasets: [
        {
          data: [percentage, maxValue - percentage],
          backgroundColor: ["#1b99e2", "#309097"],
          borderWidth: 0,
        },
      ],
    };
  };

  return (
    <div className="bg-card-background w-full   rounded-lg p-6">
      <div className="text-lg font-medium text-black mb-8">Top Rated</div>
      <div className="relative h-[370px]">
        {/* Base background doughnut */}
        <div className="absolute inset-0">
          <Doughnut
            data={{
              datasets: [
                {
                  data: [100],
                  backgroundColor: ["#ffffff"],
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              ...baseOptions,
              rotation: 0,
              circumference: 360,
            }}
          />
        </div>

        {/* Main chart with red segment */}
        <div className="absolute inset-0">
          <Doughnut data={getData()} options={baseOptions} />
        </div>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-black text-sm font-normal">Total</div>
          <div className="text-black text-2xl font-medium mt-1">
            {activeChart === "movies"
              ? moviesCount
              : activeChart === "tvShows"
                ? tvShowsCount
                : totalCount}
          </div>
        </div>

        {/* Hover areas */}
        <div
          className="absolute inset-0 cursor-pointer"
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
          }}
          onMouseEnter={() => setActiveChart("movies")}
          onMouseLeave={() => setActiveChart(null)}
        />
        <div
          className="absolute inset-0 cursor-pointer"
          style={{
            clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
          }}
          onMouseEnter={() => setActiveChart("tvShows")}
          onMouseLeave={() => setActiveChart(null)}
        />
      </div>
    </div>
  );
};

export default TopRatedChart;
