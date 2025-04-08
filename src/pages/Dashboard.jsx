import React from "react";
import { useNavigate } from "react-router-dom";
import {
  IoPersonOutline,
  IoWalletOutline,
  IoTimerOutline,
  IoStarOutline,
  IoCloudOutline,
  IoCashOutline,
} from "react-icons/io5";
import DashboardCard from "../components/ui/DashboardCard";
import RevenueChart from "../components/dashboardComponents/RevenueChart";
import SubscriberChart from "../components/dashboardComponents/SubscriberChart";
import ReviewsTable from "../components/dashboardComponents/ReviewsTable";
import TopRatedChart from "../components/dashboardComponents/TopRatedChart";

const Dashboard = () => {
  const navigate = useNavigate();

  const dashboardMetrics = [
    {
      icon: <IoPersonOutline size={24} />,
      value: "32",
      label: "Total Users",
      path: "/users",
      trend: "+12% from last month",
    },
    {
      icon: <IoWalletOutline size={24} />,
      value: "9",
      label: "Total Subscribers",
      path: "/subscriptions",
      trend: "+3% from last month",
    },
    {
      icon: <IoTimerOutline size={24} />,
      value: "10",
      label: "Soon To Expire",
      path: "/soon-to-expire",
      trend: "2 this week",
    },
    {
      icon: <IoStarOutline size={24} />,
      value: "200",
      label: "Total Reviews",
      path: "/reviews",
      trend: "+15 new reviews",
    },
    {
      icon: <IoCloudOutline size={24} />,
      value: "50 GB",
      label: "Total Storage",
      trend: "60% utilized",
    },
    {
      icon: <IoCashOutline size={24} />,
      value: "$315",
      label: "Total Revenue",
      path: "/subscriptions",
      trend: "+8% from last month",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dashboardMetrics.map((metric, index) => (
          <DashboardCard
            key={index}
            navigateTo={metric.path}
            className="h-40 bg-card-background rounded-md cursor-pointer shadow-md transition-transform hover:scale-110"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-2">
              <div className="p-2 bg-blue-50 rounded-full text-blue-600">
                {metric.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {metric.value}
              </h3>
              <p className="font-medium text-gray-600">{metric.label}</p>
              <span className="text-sm text-gray-500">{metric.trend}</span>
            </div>
          </DashboardCard>
        ))}
      </section>

      {/* Charts and Tables Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* First Row - Equal Height Charts */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
            <div className="flex-1 min-h-0">
              <RevenueChart />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4">Subscriber Growth</h2>
            <div className="flex-1 min-h-0">
              <SubscriberChart />
            </div>
          </div>
        </div>

        {/* Second Row - Equal Height Components */}
        <div className="bg-white rounded-xl shadow-sm p-6 ">
          <div className="flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4">Subscription Trends</h2>
            <div className="flex-1 min-h-0">
              <SubscriberChart />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 ">
          <div className="flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4">Recent Reviews</h2>
            <div className="flex-1 min-h-0 overflow-auto">
              <ReviewsTable />
            </div>
          </div>
        </div>

        {/* Third Row - Different Column Spans but Equal Heights */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4">Top Rated Content</h2>
            <div className="flex-1 min-h-0">
              <TopRatedChart total={26} percentage={30} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4">Review Analytics</h2>
            <div className="flex-1 min-h-0 overflow-auto">
              <ReviewsTable />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
