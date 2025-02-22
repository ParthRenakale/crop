// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import axios from 'axios';
// import 'react-circular-progressbar/dist/styles.css';

// ChartJS.register(CategoryScale, LinearScale, BarElement);

// const Dashboard = () => {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const response = await axios.get('/api/dashboard');
//         setDashboardData(response.data);
//       } catch (err) {
//         setError('Failed to fetch dashboard data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (loading) return <div className="p-4 text-center">Loading...</div>;
//   if (error) return <div className="p-4 text-red-500 text-center">{error}</div>;

//   const productionData = dashboardData.productionDetails.map(item => ({
//     month: item.month,
//     value: item.value
//   }));

//   const chartData = {
//     labels: productionData.map(item => item.month),
//     datasets: [{
//       data: productionData.map(item => item.value),
//       backgroundColor: '#22C55E',
//       borderRadius: 4,
//       barThickness: 12 // Reduced bar thickness
//     }]
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md w-full">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold text-gray-800">{dashboardData.cropName}</h1>
//       </div>

//       {/* Crop Details */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm mb-6">
//         <div className="p-4 bg-gray-100 rounded-lg">
//           <p className="font-bold">Crop name</p>
//           <p>{dashboardData.cropType}</p>
//         </div>
//         <div className="p-4 bg-gray-100 rounded-lg">
//           <p className="font-bold">Area</p>
//           <p>{dashboardData.area} Acre</p>
//         </div>
//       </div>

//       {/* Environmental Data */}
//       <div className="grid grid-cols-3 gap-4 my-4 mb-8">
//         <div className="p-4 bg-gray-100 rounded-lg">
//           <p className="text-gray-600">Air Temperature</p>
//           <p className="text-lg font-bold">{dashboardData.temperature}°C 
//             <span className="text-red-500"> (High)</span>
//           </p>
//         </div>
//         <div className="p-4 bg-gray-100 rounded-lg">
//           <p className="text-gray-600">Water Content</p>
//           <p className="text-lg font-bold">{dashboardData.moisture}% 
//             <span className="text-green-500"> (Good)</span>
//           </p>
//         </div>
//         <div className="p-4 bg-gray-100 rounded-lg">
//           <p className="text-gray-600">pH Value</p>
//           <p className="text-lg font-bold">{dashboardData.ph} 
//             <span className="text-yellow-500"> (Base)</span>
//           </p>
//         </div>
//       </div>

//       {/* Financial Statistics */}
//       <div className="grid grid-cols-2 items-center gap-4 mb-8">
//         <div className="w-24 mx-auto">
//           <CircularProgressbar 
//             value={dashboardData.achievedPercentage} 
//             text={`${dashboardData.achievedPercentage}%`} 
//             styles={{
//               path: { stroke: '#22C55E' },
//               text: { fill: '#000', fontSize: '24px' },
//               trail: { stroke: '#E5E7EB' }
//             }}
//           />
//         </div>
//         <div>
//           <p className="text-gray-700 font-bold">
//             Current Profit: <span className="text-green-500">{dashboardData.currentProfit} Lakh</span>
//           </p>
//           <p className="text-gray-700 font-bold">
//             Expected Profit: <span className="text-green-500">{dashboardData.expectedProfit} Lakh</span>
//           </p>
//         </div>
//       </div>

//       {/* Production Chart - Smaller Version */}
//       <div className="mt-6">
//         <h2 className="text-lg font-semibold text-gray-800 mb-2">Production Details (kg)</h2>
//         <div className="h-40"> {/* Smaller container */}
//           <Bar
//             data={chartData}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false,
//               scales: {
//                 x: { display: false },
//                 y: { display: false }
//               },
//               plugins: { legend: { display: false } }
//             }}
//           />
//         </div>
//         <div className="flex justify-between text-sm text-gray-600 mt-2 px-2">
//           {productionData.map((data, index) => (
//             <div key={index} className="text-center w-10">
//               {data.month}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import axios from 'axios';
// import 'react-circular-progressbar/dist/styles.css';

// ChartJS.register(CategoryScale, LinearScale, BarElement);

// const Dashboard = () => {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(`http://localhost:4000/dashboard?token=${token}`);
//         setDashboardData(response.data.data);
//       } catch (err) {
//         setError('Failed to fetch dashboard data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (loading) return <div className="p-4 text-center">Loading...</div>;
//   if (error) return <div className="p-4 text-red-500 text-center">{error}</div>;
//   if (!dashboardData) return <div className="p-4 text-center">No data available</div>;

//   // Production data (static for now - update with real data when available)
//   const productionData = [
//     { month: 'Jan', value: 2603 },
//     { month: 'Feb', value: 1500 },
//     { month: 'Apr', value: 2000 },
//     { month: 'May', value: 1709 },
//     { month: 'Jul', value: 2620 },
//     { month: 'Aug', value: 2100 },
//     { month: 'Oct', value: 1200 }
//   ];

//   const chartData = {
//     labels: productionData.map(item => item.month),
//     datasets: [{
//       data: productionData.map(item => item.value),
//       backgroundColor: '#22C55E',
//       borderRadius: 4,
//       barThickness: 12
//     }]
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md w-full">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold text-gray-800">{dashboardData.crop.name}</h1>
//       </div>

//       {/* Crop Details */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm mb-6">
//         <div className="p-4 bg-gray-100 rounded-lg">
//           <p className="font-bold">Crop name</p>
//           <p>{dashboardData.crop.name}</p>
//         </div>
//         <div className="p-4 bg-gray-100 rounded-lg">
//           <p className="font-bold">Area</p>
//           <p>{dashboardData.crop.area} Acre</p>
//         </div>
//       </div>

//       {/* Environmental Data */}
//       <div className="grid grid-cols-3 gap-4 my-4 mb-8">
//         <div className="p-4 bg-gray-100 rounded-lg">
//           <p className="text-gray-600">Air Temperature</p>
//           <p className="text-lg font-bold">
//             {dashboardData.crop.environment.temperature}°C
//             <span className="text-red-500"> (High)</span>
//           </p>
//         </div>
//         <div className="p-4 bg-gray-100 rounded-lg">
//           <p className="text-gray-600">Water Content</p>
//           <p className="text-lg font-bold">
//             {dashboardData.crop.environment.moisture}%
//             <span className="text-green-500"> (Good)</span>
//           </p>
//         </div>
//         <div className="p-4 bg-gray-100 rounded-lg">
//           <p className="text-gray-600">pH Value</p>
//           <p className="text-lg font-bold">
//             {dashboardData.crop.environment.ph}
//             <span className="text-yellow-500"> (Base)</span>
//           </p>
//         </div>
//       </div>

//       {/* Financial Statistics */}
//       <div className="grid grid-cols-2 items-center gap-4 mb-8">
//         <div className="w-24 mx-auto">
//           <CircularProgressbar 
//             value={dashboardData.financials.achievedPercentage} 
//             text={`${dashboardData.financials.achievedPercentage.toFixed(0)}%`} 
//             styles={{
//               path: { stroke: '#22C55E' },
//               text: { fill: '#000', fontSize: '24px' },
//               trail: { stroke: '#E5E7EB' }
//             }}
//           />
//         </div>
//         <div>
//           <p className="text-gray-700 font-bold">
//             Current Profit: {' '}
//             <span className="text-green-500">
//               ₹{(dashboardData.financials.currentProfit / 100000).toFixed(1)} Lakh
//             </span>
//           </p>
//           <p className="text-gray-700 font-bold">
//             Expected Profit: {' '}
//             <span className="text-green-500">
//               ₹{(dashboardData.financials.expectedProfit / 100000).toFixed(1)} Lakh
//             </span>
//           </p>
//         </div>
//       </div>

//       {/* Production Chart */}
//       <div className="mt-6">
//         <h2 className="text-lg font-semibold text-gray-800 mb-2">Production Details (kg)</h2>
//         <div className="h-40">
//           <Bar
//             data={chartData}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false,
//               scales: {
//                 x: { display: false },
//                 y: { display: false }
//               },
//               plugins: { legend: { display: false } }
//             }}
//           />
//         </div>
//         <div className="flex justify-between text-sm text-gray-600 mt-2 px-2">
//           {productionData.map((data, index) => (
//             <div key={index} className="text-center w-10">
//               {data.month}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import axios from 'axios';
import 'react-circular-progressbar/dist/styles.css';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:4000/dashboard?token=${token}`);
        // Update this line to access the nested data
        setDashboardData(response.data.data.data); // Changed from response.data.data
      } catch (err) {
        setError('Failed to fetch dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-red-500 text-center">{error}</div>;
  if (!dashboardData) return <div className="p-4 text-center">No data available</div>;

  // Add optional chaining for production data
  const productionData = [
    { month: 'Jan', value: dashboardData?.productionDetails?.[0]?.value || 0 },
    { month: 'Feb', value: dashboardData?.productionDetails?.[1]?.value || 0 },
    // Add other months similarly...
  ];

  const chartData = {
    labels: productionData.map(item => item.month),
    datasets: [{
      data: productionData.map(item => item.value),
      backgroundColor: '#22C55E',
      borderRadius: 4,
      barThickness: 12
    }]
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      {/* Header Section with optional chaining */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">
          {dashboardData?.crop?.name || 'No crop name available'}
        </h1>
      </div>

      {/* Crop Details with optional chaining */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-bold">Crop name</p>
          <p>{dashboardData?.crop?.name || 'N/A'}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-bold">Area</p>
          <p>{dashboardData?.crop?.area || 0} Acre</p>
        </div>
      </div>

      {/* Environmental Data with optional chaining */}
      <div className="grid grid-cols-3 gap-4 my-4 mb-8">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-600">Air Temperature</p>
          <p className="text-lg font-bold">
            {dashboardData?.crop?.environment?.temperature || 'N/A'}°C
            <span className="text-red-500"> (High)</span>
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-600">Water Content</p>
          <p className="text-lg font-bold">
            {dashboardData?.crop?.environment?.moisture || 'N/A'}%
            <span className="text-green-500"> (Good)</span>
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-600">pH Value</p>
          <p className="text-lg font-bold">
            {dashboardData?.crop?.environment?.ph || 'N/A'}
            <span className="text-yellow-500"> (Base)</span>
          </p>
        </div>
      </div>

      {/* Financial Statistics with optional chaining */}
      <div className="grid grid-cols-2 items-center gap-4 mb-8">
        <div className="w-24 mx-auto">
          <CircularProgressbar 
            value={dashboardData?.financials?.achievedPercentage || 0} 
            text={`${Math.round(dashboardData?.financials?.achievedPercentage || 0)}%`} 
            styles={{
              path: { stroke: '#22C55E' },
              text: { fill: '#000', fontSize: '24px' },
              trail: { stroke: '#E5E7EB' }
            }}
          />
        </div>
        <div>
          <p className="text-gray-700 font-bold">
            Current Profit: {' '}
            <span className="text-green-500">
              ₹{((dashboardData?.financials?.currentProfit || 0) / 100000).toFixed(1)} Lakh
            </span>
          </p>
          <p className="text-gray-700 font-bold">
            Expected Profit: {' '}
            <span className="text-green-500">
              ₹{((dashboardData?.financials?.expectedProfit || 0) / 100000).toFixed(1)} Lakh
            </span>
          </p>
        </div>
      </div>

      {/* Production Chart */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Production Details (kg)</h2>
        <div className="h-40">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: { display: false },
                y: { display: false }
              },
              plugins: { legend: { display: false } }
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
      </div>
    </div>
  );
};

export default Dashboard;