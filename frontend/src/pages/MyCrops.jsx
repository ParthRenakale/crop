// // import React, { useState, useEffect } from "react";
// // import { dummyCropData } from "./Dashboard2";
// // function MyCrops() {
// //   const [crops, setCrops] = useState([]);

// //   // Load crops from localStorage when component mounts
// //   useEffect(() => {
// //     const storedCrops = JSON.parse(localStorage.getItem("selectedCrops")) || [];
// //     setCrops(storedCrops);
// //   }, []);

// //   const handleDelete = (indexToDelete) => {
// //     const updatedCrops = crops.filter((_, index) => index !== indexToDelete);
// //     setCrops(updatedCrops);
// //     localStorage.setItem("selectedCrops", JSON.stringify(updatedCrops));
// //   };

// //   return (
// //     <div className="max-w-screen-xl h-fit mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-6">My Crops</h1>
// //       {crops.length === 0 ? (
// //         <p className="text-gray-500 h-screen">No crops added.</p>
// //       ) : (
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {crops.map((crop, index) => (
// //             <div key={index} className="p-6 bg-white rounded-lg shadow-lg relative">
// //               {/* Optional: Display image if available */}
// //               {crop.cropName && (
// //                 <img
// //                   src={dummyCropData[crop.cropName]?.image || "./image.png"}
// //                   alt={crop.cropName}
// //                   className="w-full h-40 object-cover rounded-md mb-4"
// //                 />
// //               )}
// //               <div className="space-y-2">
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Crop Name: </span>
// //                   <span className="text-gray-800">{crop.cropName}</span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Planting Date: </span>
// //                   <span className="text-gray-800">{crop.plantingDate}</span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Harvest Date: </span>
// //                   <span className="text-gray-800">{crop.harvestDate}</span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Season: </span>
// //                   <span className="text-gray-800">{crop.season}</span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Status: </span>
// //                   <span className="text-gray-800">{crop.status}</span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Area (Hectares): </span>
// //                   <span className="text-gray-800">{crop.area}</span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Expected Yield (kg): </span>
// //                   <span className="text-gray-800">{crop.expectedYield}</span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Soil Type: </span>
// //                   <span className="text-gray-800">{crop.soilType}</span>
// //                 </div>
// //               </div>
// //               <button
// //                 onClick={() => handleDelete(index)}
// //                 className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default MyCrops;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { dummyCropData } from "./Dashboard2";

// // function MyCrops() {
// //   const [crop, setCrop] = useState(null);
// //   const token = localStorage.getItem("token");

// //   // Fetch crop details from backend using the getCropById controller
// //   useEffect(() => {
// //     const fetchCrop = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://localhost:4000/getCropById?token=${token}`
// //         );
// //         // Assume response.data.data contains the crop details
// //         setCrop(response.data.data);
// //       } catch (error) {
// //         console.error("Error fetching crop:", error);
// //       }
// //     };

// //     if (token) fetchCrop();
// //   }, [token]);

// //   // Delete crop using backend delete controller
// //   // const handleDelete = async () => {
// //   //   try {
// //   //     if (!crop) return;
// //   //     await axios.delete(`http://localhost:4000/getCropById/${crop._id}`);
// //   //     setCrop(null);
// //   //   } catch (error) {
// //   //     console.error("Error deleting crop:", error);
// //   //   }
// //   // };

// //   return (
// //     <div className="max-w-screen-xl h-fit mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-6">My Crops</h1>
// //       {!crop ? (
// //         <p className="text-gray-500 h-screen">No crop found.</p>
// //       ) : (
// //         <div className="p-6 bg-white rounded-lg shadow-lg relative">
// //           {/* Display image if available */}
// //           {crop.name && (
// //             <img
// //               src={dummyCropData[crop.name]?.image || "./image.png"}
// //               alt={crop.name}
// //               className="w-full h-40 object-cover rounded-md mb-4"
// //             />
// //           )}
// //           <div className="space-y-2">
// //             <div>
// //               <span className="font-semibold text-gray-600">Crop Name: </span>
// //               <span className="text-gray-800">{crop.name}</span>
// //             </div>
// //             <div>
// //               <span className="font-semibold text-gray-600">Planting Date: </span>
// //               <span className="text-gray-800">{crop.plantingDate}</span>
// //             </div>
// //             <div>
// //               <span className="font-semibold text-gray-600">Harvest Date: </span>
// //               <span className="text-gray-800">{crop.harvestDate}</span>
// //             </div>
// //             <div>
// //               <span className="font-semibold text-gray-600">Season: </span>
// //               <span className="text-gray-800">{crop.season}</span>
// //             </div>
// //             <div>
// //               <span className="font-semibold text-gray-600">Status: </span>
// //               <span className="text-gray-800">{crop.status}</span>
// //             </div>
// //             <div>
// //               <span className="font-semibold text-gray-600">Area (Hectares): </span>
// //               <span className="text-gray-800">{crop.area}</span>
// //             </div>
// //             <div>
// //               <span className="font-semibold text-gray-600">Expected Yield (kg): </span>
// //               <span className="text-gray-800">{crop.expectedYield}</span>
// //             </div>
// //             <div>
// //               <span className="font-semibold text-gray-600">Soil Type: </span>
// //               <span className="text-gray-800">{crop.soilType}</span>
// //             </div>
// //           </div>
// //           <button
// //             // onClick={handleDelete}
// //             className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
// //           >
// //             Delete
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default MyCrops;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { dummyCropData } from "./Dashboard2";

// // function MyCrops() {
// //   const [crops, setCrops] = useState([]);
// //   const token = localStorage.getItem("token");

// //   // Fetch crop details from backend using the getCropById controller
// //   useEffect(() => {
// //     const fetchCrops = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://localhost:4000/getCropById?token=${token}`
// //         );
// //         // Extract the crops array from the response:
// //         // response.data.data is an object with key "data" which is an array of crops.
// //         setCrops(response.data.data.data);
// //       } catch (error) {
// //         console.error("Error fetching crop:", error);
// //       }
// //     };

// //     if (token) fetchCrops();
// //   }, [token]);

// //   //Delete crop using backend delete controller
// //   const handleDelete = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:4000/deleteCrop/${id}`);
// //       // Remove the deleted crop from state
// //       setCrops((prevCrops) => prevCrops.filter((crop) => crop._id !== id));
// //     } catch (error) {
// //       console.error("Error deleting crop:", error);
// //     }
// //   };

// //   return (
// //     <div className="max-w-screen-xl h-fit mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-6">My Crops</h1>
// //       {crops.length === 0 ? (
// //         <p className="text-gray-500 h-screen">No crops found.</p>
// //       ) : (
// //         <div className="w-[430px] flex flex-row flex-wrap gap-6">
// //           {crops.map((crop) => (
// //             <div key={crop._id} className="p-6 bg-white rounded-lg shadow-lg relative">
// //               {/* Display image if available using dummyCropData as fallback */}
// //               {crop.name && (
// //                 <img
// //                   src={dummyCropData[crop.name]?.image || "./image.png"}
// //                   alt={crop.name}
// //                   className="w-full h-40 object-cover rounded-md mb-4"
// //                 />
// //               )}
// //               <div className="space-y-2 flex flex-row flex-wrap gap-2">
// //                 <div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Crop Name: </span>
// //                   <span className="text-gray-800">{crop.name}</span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Planting Date: </span>
// //                   <span className="text-gray-800">
// //                     {new Date(crop.plantingDate).toLocaleDateString()}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Harvest Date: </span>
// //                   <span className="text-gray-800">
// //                     {new Date(crop.harvestDate).toLocaleDateString()}
// //                   </span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Season: </span>
// //                   <span className="text-gray-800">{crop.season}</span>
// //                 </div>
// //                 </div><div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Status: </span>
// //                   <span className="text-gray-800">{crop.status}</span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Area (Hectares): </span>
// //                   <span className="text-gray-800">{crop.area}</span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Expected Yield (kg): </span>
// //                   <span className="text-gray-800">{crop.expectedYield}</span>
// //                 </div>
// //                 <div>
// //                   <span className="font-semibold text-gray-600">Soil Type: </span>
// //                   <span className="text-gray-800">{crop.soilType}</span>
// //                 </div>
// //                 </div>
// //               </div>
// //               <button
// //                 onClick={() => handleDelete(crop._id)}
// //                 className="absolute bottom-1 right-4 bg-red-500 mt-3 text-white px-3 py-1 rounded hover:bg-red-600 transition"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default MyCrops;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { dummyCropData } from "./Dashboard2";
// import { useNavigate } from "react-router-dom";


// function MyCrops() {
//   const [crops, setCrops] = useState([]);
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();
//   const handleClick = () => {
//     // Navigate to the crop progress page for the specified cropId
//     navigate(`/crops/${cropId}/progress/`);
//   };
//   // Fetch crop details from backend using the getCropById controller
//   useEffect(() => {
//     const fetchCrops = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:4000/getCropById?token=${token}`
//         );
//         // Extract the crops array from the response:
//         // response.data.data is an object with key "data" which is an array of crops.
//         setCrops(response.data.data.data);
//       } catch (error) {
//         console.error("Error fetching crop:", error);
//       }
//     };

//     if (token) fetchCrops();
//   }, [token]);

//   // Delete crop using backend delete controller
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/deleteCrop/${id}`);
//       // Remove the deleted crop from state
//       setCrops((prevCrops) => prevCrops.filter((crop) => crop._id !== id));
//     } catch (error) {
//       console.error("Error deleting crop:", error);
//     }
//   };

//   return (
//     <div className="w-full h-fit p-6">
//       <h1 className="text-3xl font-bold mb-6">My Crops</h1>
//       {crops.length === 0 ? (
//         <p className="text-gray-500 h-screen">No crops found.</p>
//       ) : (
//         <div className="flex flex-row flex-wrap gap-6 m-auto ml-[50px]">
//           {crops.map((crop) => (
//             <div
//               key={crop._id}
//               className="w-[430px] p-6 bg-white rounded-lg shadow-lg relative"
//             >
//               {/* Display image if available using dummyCropData as fallback */}
//               {crop.name && (
//                 <img
//                   src={dummyCropData[crop.name]?.image || "./image.png"}
//                   alt={crop.name}
//                   className="w-full h-40 object-cover rounded-md mb-4"
//                 />
//               )}
//               <div className="space-y-2">
//                 <div>
//                   <span className="font-semibold text-gray-600">
//                     Crop Name:{" "}
//                   </span>
//                   <span className="text-gray-800">{crop.name}</span>
//                 </div>
//                 <div>
//                   <span className="font-semibold text-gray-600">
//                     Planting Date:{" "}
//                   </span>
//                   <span className="text-gray-800">
//                     {new Date(crop.plantingDate).toLocaleDateString()}
//                   </span>
//                 </div>
//                 <div>
//                   <span className="font-semibold text-gray-600">
//                     Harvest Date:{" "}
//                   </span>
//                   <span className="text-gray-800">
//                     {new Date(crop.harvestDate).toLocaleDateString()}
//                   </span>
//                 </div>
//                 <div>
//                   <span className="font-semibold text-gray-600">
//                     Season:{" "}
//                   </span>
//                   <span className="text-gray-800">{crop.season}</span>
//                 </div>
//                 <div>
//                   <span className="font-semibold text-gray-600">
//                     Status:{" "}
//                   </span>
//                   <span className="text-gray-800">{crop.status}</span>
//                 </div>
//                 <div>
//                   <span className="font-semibold text-gray-600">
//                     Area (Hectares):{" "}
//                   </span>
//                   <span className="text-gray-800">{crop.area}</span>
//                 </div>
//                 <div>
//                   <span className="font-semibold text-gray-600">
//                     Expected Yield (kg):{" "}
//                   </span>
//                   <span className="text-gray-800">{crop.expectedYield}</span>
//                 </div>
//                 <div>
//                   <span className="font-semibold text-gray-600">
//                     Soil Type:{" "}
//                   </span>
//                   <span className="text-gray-800">{crop.soilType}</span>
//                 </div>
//               </div>

            
//               <button
                
//                 className="absolute bottom-[15px] right-27 bg-green-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//               >
//                 Progress
//               </button>
//               <button
//                 onClick={handleClick}
//                 className="absolute bottom-[15px] right-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//               >
//                 Delete
//               </button>
              
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyCrops;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { dummyCropData } from "./Dashboard2";
import { useNavigate } from "react-router-dom";

function MyCrops() {
  const [crops, setCrops] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // Fetch crop details from backend using the getCropById controller
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/getCropById?token=${token}`
        );
        // Extract the crops array from the response
        setCrops(response.data.data.data);
      } catch (error) {
        console.error("Error fetching crop:", error);
      }
    };

    if (token) fetchCrops();
  }, [token]);

  // Delete crop using backend delete controller
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/deleteCrop/${id}`);
      // Remove the deleted crop from state
      setCrops((prevCrops) => prevCrops.filter((crop) => crop._id !== id));
    } catch (error) {
      console.error("Error deleting crop:", error);
    }
  };

  return (
    <div className="max-w-screen-xl h-fit mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Crops</h1>
      {crops.length === 0 ? (
        <p className="text-gray-500 h-screen">No crops found.</p>
      ) : (
        <div className="flex flex-row flex-wrap gap-14 m-auto ml-[150px]">
          {crops.map((crop) => (
            <div
              key={crop._id}
              className="w-[430px] p-6 bg-white rounded-lg shadow-lg relative"
            >
              {/* Display image if available using dummyCropData as fallback */}
              {crop.name && (
                <img
                  src={dummyCropData[crop.name]?.image || "./image.png"}
                  alt={crop.name}
                  onClick={() => navigate(`/dashboard/${crop._id}`)}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              <div className="space-y-2">
                <div>
                  <span className="font-semibold text-gray-600">
                    Crop Name:{" "}
                  </span>
                  <span className="text-gray-800">{crop.name}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">
                    Planting Date:{" "}
                  </span>
                  <span className="text-gray-800">
                    {new Date(crop.plantingDate).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">
                    Harvest Date:{" "}
                  </span>
                  <span className="text-gray-800">
                    {new Date(crop.harvestDate).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">
                    Season:{" "}
                  </span>
                  <span className="text-gray-800">{crop.season}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">
                    Status:{" "}
                  </span>
                  <span className="text-gray-800">{crop.status}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">
                    Area (Hectares):{" "}
                  </span>
                  <span className="text-gray-800">{crop.area}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">
                    Expected Yield (kg):{" "}
                  </span>
                  <span className="text-gray-800">{crop.expectedYield}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">
                    Soil Type:{" "}
                  </span>
                  <span className="text-gray-800">{crop.soilType}</span>
                </div>
              </div>
              {/* Progress Button: Navigate using the crop's _id */}
              <button
                onClick={() => navigate(`/crops/${crop._id}/progress`)}
                className="absolute right-4 bottom-15 bg-green-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Progress
              </button>
              <button
                onClick={() => handleDelete(crop._id)}
                className="absolute bottom-[15px] right-4 bg-red-500 text-white px-5 py-1 rounded hover:bg-red-600 transition"
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


