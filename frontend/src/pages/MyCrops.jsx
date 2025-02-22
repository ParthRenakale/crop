import React, { useState, useEffect } from "react";
import { dummyCropData } from "./Dashboard2";
function MyCrops() {
  const [crops, setCrops] = useState([]);

  // Load crops from localStorage when component mounts
  useEffect(() => {
    const storedCrops = JSON.parse(localStorage.getItem("selectedCrops")) || [];
    setCrops(storedCrops);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedCrops = crops.filter((_, index) => index !== indexToDelete);
    setCrops(updatedCrops);
    localStorage.setItem("selectedCrops", JSON.stringify(updatedCrops));
  };

  return (
    <div className="max-w-screen-xl h-fit mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Crops</h1>
      {crops.length === 0 ? (
        <p className="text-gray-500 h-screen">No crops added.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {crops.map((crop, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg relative">
              {/* Optional: Display image if available */}
              {crop.cropName && (
                <img
                  src={dummyCropData[crop.cropName]?.image || "./image.png"}
                  alt={crop.cropName}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              <div className="space-y-2">
                <div>
                  <span className="font-semibold text-gray-600">Crop Name: </span>
                  <span className="text-gray-800">{crop.cropName}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Planting Date: </span>
                  <span className="text-gray-800">{crop.plantingDate}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Harvest Date: </span>
                  <span className="text-gray-800">{crop.harvestDate}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Season: </span>
                  <span className="text-gray-800">{crop.season}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Status: </span>
                  <span className="text-gray-800">{crop.status}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Area (Hectares): </span>
                  <span className="text-gray-800">{crop.area}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Expected Yield (kg): </span>
                  <span className="text-gray-800">{crop.expectedYield}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">Soil Type: </span>
                  <span className="text-gray-800">{crop.soilType}</span>
                </div>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCrops;
