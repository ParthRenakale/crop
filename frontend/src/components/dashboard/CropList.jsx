import React from "react";
import CropItem from "./CropItem";


const CropList = ({crops}) => {
  return (
    <div className="p-6 bg-gray-100 ">
      {/* <h1 className="text-2xl font-bold text-center text-green-700 mb-4">Crop Management System</h1> */}
      <div>
        {crops.map((crop) => (
          <CropItem 
            key={crop.id} 
            name={crop.name} 
            soilType={crop.soilType} 
            season={crop.season} 
            expectedYield={crop.expectedYield} 
            plantingDate={crop.plantingDate} 
            harvestDate={crop.harvestDate} 
            status={crop.status}
            area={crop.area}
          />
        ))}
      </div>
    </div>
  );
};

export default CropList;
