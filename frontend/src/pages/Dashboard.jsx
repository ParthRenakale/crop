
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { CircularProgressbar } from "react-circular-progressbar";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";
import axios from "axios";
import "react-circular-progressbar/dist/styles.css";
import WeatherWidget from "../components/weather";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { cropId } = useParams();
  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   const fetchDashboardData = async () => {
  //     try {
  //       // Note: cropId is obtained from the route parameters
  //       const response = await axios.get(
  //         `http://localhost:4000/dashboard/${cropId}?token=${token}`
  //       );
  //       // Our backend returns an ApiResponse containing the dashboardData in the "data" key.
  //       setDashboardData(response.data.data);
  //     } catch (err) {
  //       console.error(err);
  //       setError("Failed to fetch dashboard data");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (token && cropId) {
  //     fetchDashboardData();
  //   }
  // }, [cropId, token]);
  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true); // Reset loading state
      setError(""); // Clear previous errors
      try {
        const response = await axios.get(
          `http://localhost:4000/dashboard/${cropId}?token=${token}`
        );
        setDashboardData(response.data.data.data);
      } catch (err) {
        setError("Failed to fetch dashboard data");
      } finally {
        setLoading(false);
      }
    };
  
    if (token && cropId) fetchDashboardData();
  }, [token, cropId]); // Re-fetch when cropId changes

  useEffect(() => {
    if (dashboardData?.financials?.currentProfit !== undefined) {
      localStorage.setItem("amount", dashboardData.financials.currentProfit);
    }
  }, [dashboardData?.financials?.currentProfit]);



  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-red-500 text-center">{error}</div>;
  if (!dashboardData) return <div className="p-4 text-center">No data available</div>;

  // For production data, using optional chaining. Adjust as needed.
  const productionData = [
    { month: "Jan", value: dashboardData?.productionDetails?.[0]?.value || 0 },
    { month: "Feb", value: dashboardData?.productionDetails?.[1]?.value || 0 },
    // Add other months similarly...
  ];

  const chartData = {
    labels: productionData.map((item) => item.month),
    datasets: [
      {
        data: productionData.map((item) => item.value),
        backgroundColor: "#22C55E",
        borderRadius: 4,
        barThickness: 12,
      },
    ],
  };

  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-md w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800 m-auto pt-5 pb-5">
          {dashboardData?.crop?.name || "No crop name available"}
        </h1>
      </div>
      <WeatherWidget/>
      {/* Crop Details */}
      <div className="grid grid-cols-2  gap-4 text-gray-700 text-lg mb-6" >
        <div className="p-4 bg-gray-100 rounded-lg text-center text-2xl" style={{ boxShadow: "0 4px 6px -1px rgba(59,130,246,0.5)" }}>
          <p className="font-bold onhover:bg-green-400 ">Crop Name</p>
          <p>{dashboardData?.crop?.name || "N/A"}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg text-center text-2xl" style={{ boxShadow: "0 4px 6px -1px rgba(59,130,246,0.5)" }}>
          <p className="font-bold ">Area</p>
          <p>{dashboardData?.crop?.area || 0} Acre</p>
        </div>
      </div>

      {/* Environmental Data */}
      <div className="grid grid-cols-3 gap-4 my-4 mb-8">
        {/* <div className="p-4 bg-gray-100 rounded-lg text-center hover:bg-green-400 text-2xl v"> */}
        <div
  className="p-4 bg-white rounded-lg text-center text-2xl"
  style={{ boxShadow: "0 4px 6px -1px rgba(59,130,246,0.5)" }}
>
          <p className="text-gray-600">Air Temperature</p>
          <p className="text-lg font-bold">
            {dashboardData?.crop?.environment?.temperature || "N/A"}°C
            <span className="text-red-500"> (High)</span>
          </p>
        </div>
        <div
  className="p-4 bg-white rounded-lg text-center text-2xl"
  style={{ boxShadow: "0 4px 6px -1px rgba(59,130,246,0.5)" }}
>
          <p className="text-gray-600">Water Content</p>
          <p className="text-lg font-bold">
            {dashboardData?.crop?.environment?.moisture || "N/A"}%
            <span className="text-green-500"> (Good)</span>
          </p>
        </div>
        <div
  className="p-4 bg-white rounded-lg text-center text-2xl"
  style={{ boxShadow: "0 4px 6px -1px rgba(59,130,246,0.5)" }}
>
          <p className="text-gray-600">pH Value</p>
          <p className="text-lg font-bold">
            {dashboardData?.crop?.environment?.ph || "N/A"}
            <span className="text-yellow-500"> (Base)</span>
          </p>
        </div>
      </div>

      {/* Financial Statistics */}
      {/* <div className="grid grid-cols-2 items-center gap-4 mb-8">
        <div className="w-24 mx-auto">
          <CircularProgressbar
            value={dashboardData?.financials?.achievedPercentage || 0}
            text={`${Math.round(dashboardData?.financials?.achievedPercentage || 0)}%`}
            styles={{
              path: { stroke: "#22C55E" },
              text: { fill: "#000", fontSize: "24px" },
              trail: { stroke: "#E5E7EB" },
            }}
          />
        </div>
        <div>
          <p className="text-gray-700 font-bold">
            Current Profit:{" "}
            <span className="text-green-500">
              ₹{((dashboardData?.financials?.currentProfit || 0) / 100000).toFixed(1)} Lakh
            </span>
          </p>
          <p className="text-gray-700 font-bold">
            Expected Profit:{" "}
            <span className="text-green-500">
              ₹{((dashboardData?.financials?.expectedProfit || 0) / 100000).toFixed(1)} Lakh
            </span>
          </p>
        </div>
      </div> */}
      {/* Financial Statistics */}
<div className="flex flex-row justify-center items-center  mb-8">
  <div className="w-62 mx-auto p-6">
    
    <CircularProgressbar
      value={dashboardData?.financials?.achievedPercentage || 0}
      text={`${Math.round(dashboardData?.financials?.achievedPercentage || 0)}%`}
      styles={{/* ... */}}
    />
  </div>
  <div className="p-6 text-2xl pr-100">
    <p className="text-gray-700 font-bold">
      Current Profit:{" "}
      <span className="text-green-500">
        ₹{(dashboardData?.financials?.currentProfit || 0).toLocaleString()}
      </span>
      
    </p>
    <p className="text-gray-700 font-bold">
      Expected Profit:{" "}
      <span className="text-green-500">
        ₹{(dashboardData?.financials?.expectedProfit || 0).toLocaleString()}
      </span>
    </p>
    {!dashboardData?.financials?.currentProfit && (
      <p className="text-sm text-yellow-600 mt-2">
        No transactions recorded for this crop
      </p>
    )}
  </div>
</div>

      {/* Production Chart */}
      {/* <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Production Details (kg)
        </h2>
        <div className="h-40">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: { x: { display: false }, y: { display: false } },
              plugins: { legend: { display: false } },
            }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2 px-2">
          {productionData.map((data, index) => (
            <div key={index} className="text-center w-10">
              {data.month}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
