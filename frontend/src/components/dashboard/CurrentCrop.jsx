// import React from 'react'

// function CurrentCrop() {
//   return (
//     <>
//       <div>
//         CurrentCrop
//       </div>
//     </>
//   )
// }

// export default CurrentCrop

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CropDashboard = () => {
  const productionData = [
    { month: "January", value: 2603 },
    { month: "February", value: 1500 },
    { month: "April", value: 2090 },
    { month: "May", value: 1709 },
    { month: "July", value: 2620 },
    { month: "August", value: 2110 },
    { month: "October", value: 1200 },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Greenvalley Cardamom</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
          + Add Crop
        </button>
      </div>

      {/* Crop Details */}
      <div className="grid grid-cols-3 gap-4 text-gray-700 text-sm">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-bold">Crop name</p>
          <p>Cardamom</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-bold">Area</p>
          <p>53 Acre</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-bold">Last Production</p>
          <p>1200 kg</p>
        </div>
      </div>

      {/* Environmental Data */}
      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-600">Air Temperature</p>
          <p className="text-lg font-bold">38°C <span className="text-red-500">(High)</span></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-600">Water Content</p>
          <p className="text-lg font-bold">32% <span className="text-green-500">(Good)</span></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-600">pH Value</p>
          <p className="text-lg font-bold">8 <span className="text-yellow-500">(Base)</span></p>
        </div>
      </div>

      {/* Financial Statistics */}
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="w-24 mx-auto">
          <CircularProgressbar 
            value={78} 
            text={`78%`} 
            styles={buildStyles({
              pathColor: "#22C55E",
              textColor: "#000",
              trailColor: "#E5E7EB",
            })}
          />
        </div>
        <div>
          <p className="text-gray-700 font-bold">Current Profit: <span className="text-green-500">64 Lakh</span></p>
          <p className="text-gray-700 font-bold">Expected Profit: <span className="text-green-500">82 Lakh</span></p>
        </div>
      </div>

      {/* Production Details */}
      <h2 className="text-lg font-semibold text-gray-800 mt-6">Production Details</h2>
      <div className="grid grid-cols-7 gap-2 mt-2">
        {productionData.map((data, index) => (
          <div key={index} className="text-center">
            <div 
              className="bg-green-400 rounded-md" 
              style={{ height: `${(data.value / 3000) * 100}px`, width: "30px" }}
            ></div>
            <p className="text-sm text-gray-600">{data.value} kg</p>
            <p className="text-sm font-semibold">{data.month}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropDashboard;
