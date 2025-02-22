import React from "react";

const CropItem = ({ name, soilType, season, expectedYield, plantingDate, harvestDate }) => {
  return (
    <div className="p-4 m-2 bg-lime-100 border-l-4 border-r-4 border-green-500 text-center rounded shadow-md flex items-center justify-center">
      <div className="text-xl font-semibold text-green-800"><h3>{name}</h3></div><br/>
      {/* <p><strong>Soil Type:</strong> {soilType}</p>
      <p><strong>Season:</strong> {season}</p>
      <p><strong>Expected Yield:</strong> {expectedYield}</p>
      <p><strong>Planting Date:</strong> {plantingDate}</p>
      <p><strong>Harvest Date:</strong> {harvestDate}</p> */}
    </div>
  );
};

export default CropItem;
