// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// // Dummy data for each crop including image and revenue data for past three years
// const dummyCropData = {
//   Wheat: {
//     description: "Wheat is a staple crop known for its versatility.",
//     optimalSoil: "Loamy",
//     season: "Rabi",
//     image: "./image.png",
//     revenue: [100000, 120000, 90000],
//   },
//   Alfalfa: {
//     description: "Alfalfa is a high-protein forage crop.",
//     optimalSoil: "Sandy",
//     season: "Summer",
//     image: "./image.png",
//     revenue: [80000, 95000, 110000],
//   },
//   Soybean: {
//     description: "Soybean is used for oil and protein.",
//     optimalSoil: "Loamy",
//     season: "Summer",
//     image: "./image.png",
//     revenue: [130000, 125000, 140000],
//   },
//   Blueberry: {
//     description: "Blueberry is a popular fruit crop.",
//     optimalSoil: "Acidic",
//     season: "Spring",
//     image: "./image.png",
//     revenue: [70000, 85000, 80000],
//   },
//   Rapeseed: {
//     description: "Rapeseed is used for producing canola oil.",
//     optimalSoil: "Clayey",
//     season: "Winter",
//     image: "./image.png",
//     revenue: [90000, 95000, 92000],
//   },
//   Corn: {
//     description: "Corn is a versatile crop used for many purposes.",
//     optimalSoil: "Loamy",
//     season: "Summer",
//     image: "./image.png",
//     revenue: [150000, 155000, 160000],
//   },
//   Rice: {
//     description: "Rice is a staple food in many parts of the world.",
//     optimalSoil: "Clayey",
//     season: "Monsoon",
//     image: "./image.png",
//     revenue: [110000, 115000, 108000],
//   },
//   Potato: {
//     description: "Potato is a versatile root vegetable.",
//     optimalSoil: "Sandy",
//     season: "Autumn",
//     image: "./image.png",
//     revenue: [95000, 97000, 93000],
//   },
//   Beetroot: {
//     description: "Beetroot is rich in nutrients and versatile in cuisine.",
//     optimalSoil: "Loamy",
//     season: "Autumn",
//     image: "./image.png",
//     revenue: [60000, 65000, 63000],
//   },
// };

// function Dashboard2() {
//   const [formData, setFormData] = useState({
//     cropName: "",
//     plantingDate: "",
//     harvestDate: "",
//     season: "",
//     status: "",
//     area: "",
//     expectedYield: "",
//     soilType: "",
//   });

//   // This state holds what is displayed on the right panel.
//   // It can be either dummy crop data (when a crop is selected) or the full form data (after form submission).
//   const [rightPanelData, setRightPanelData] = useState(null);

//   // Handle changes for all form fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     // If the cropName changes, update the right panel with corresponding dummy data.
//     if (name === "cropName") {
//       setRightPanelData(dummyCropData[value] || null);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     // On submit, update the right panel to display all form details.
//     setRightPanelData(formData);
//   };

//   // Prepare Chart.js data if dummy data is available (i.e. it contains a "description" property)
//   const chartData =
//     rightPanelData && rightPanelData.description
//       ? {
//           labels: ["2022", "2023", "2024"],
//           datasets: [
//             {
//               label: "Revenue",
//               data: rightPanelData.revenue,
//               fill: false,
//               backgroundColor: "rgba(34,197,94,0.6)",
//               borderColor: "rgba(34,197,94,1)",
//             },
//           ],
//         }
//       : null;

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Past 3 Years Revenue",
//       },
//     },
//   };

//   return (
//     <div className="flex max-w-screen-xl mx-auto gap-6 justify-around p-6">
//       {/* Left Side: Form */}
//       <div className="w-1/2 p-6 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Add Crop Details</h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* Crop Name */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Crop Name
//             </label>
//             <select
//               name="cropName"
//               value={formData.cropName}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select Crop</option>
//               {[
//                 "Wheat",
//                 "Alfalfa",
//                 "Soybean",
//                 "Blueberry",
//                 "Rapeseed",
//                 "Corn",
//                 "Rice",
//                 "Potato",
//                 "Beetroot",
//               ].map((crop) => (
//                 <option key={crop} value={crop}>
//                   {crop}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Planting Date */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Planting Date
//             </label>
//             <input
//               type="date"
//               name="plantingDate"
//               value={formData.plantingDate}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>

//           {/* Harvest Date */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Harvest Date
//             </label>
//             <input
//               type="date"
//               name="harvestDate"
//               value={formData.harvestDate}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           {/* Season */}
//           <div>
//             <label className="block text-gray-700 font-medium">Season</label>
//             <select
//               name="season"
//               value={formData.season}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select Season</option>
//               {["Spring", "Summer", "Autumn", "Winter"].map((season) => (
//                 <option key={season} value={season}>
//                   {season}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Status */}
//           <div>
//             <label className="block text-gray-700 font-medium">Status</label>
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               {["planned", "growing", "harvested", "failed"].map((status) => (
//                 <option key={status} value={status}>
//                   {status}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Area */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Area (Hectares)
//             </label>
//             <input
//               type="number"
//               name="area"
//               min="0.1"
//               value={formData.area}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>

//           {/* Expected Yield */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Expected Yield (kg)
//             </label>
//             <input
//               type="number"
//               name="expectedYield"
//               min="0"
//               value={formData.expectedYield}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           {/* Soil Type */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Soil Type
//             </label>
//             <select
//               name="soilType"
//               value={formData.soilType}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select Soil Type</option>
//               {["clay", "sandy", "loamy", "peat", "chalky"].map((soil) => (
//                 <option key={soil} value={soil}>
//                   {soil}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* Right Side: Display Selected/Submitted Data */}
//       <div className="w-1/2 bg-gray-100 shadow-md rounded-lg p-6">
//         {rightPanelData ? (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Crop Details</h2>
//             {/* If dummy data (has "description"), display styled dummy info */}
//             {"description" in rightPanelData ? (
//               <div className="space-y-4">
//                 <img
//                   src={rightPanelData.image}
//                   alt={formData.cropName}
//                   className="w-full h-48 object-cover rounded-lg shadow-md"
//                 />
//                 <p>
//                   <strong>Description:</strong>{" "}
//                   {rightPanelData.description}
//                 </p>
//                 <p>
//                   <strong>Optimal Soil:</strong>{" "}
//                   {rightPanelData.optimalSoil}
//                 </p>
//                 <p>
//                   <strong>Season:</strong> {rightPanelData.season}
//                 </p>
//                 {chartData && (
//                   <div className="mt-4">
//                     <Line data={chartData} options={chartOptions} />
//                   </div>
//                 )}
//               </div>
//             ) : (
             
//               <div className="p-6 bg-white rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-4">Crop Details</h2>
//                 <div className="grid grid-cols-2 gap-4">
//                   <img
//                     src={rightPanelData.image}
//                     alt={formData.cropName}
//                     className="w-full h-48 object-cover rounded-lg shadow-md block m-auto"
//                   />
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Crop Name</span>
//                     <span className="text-gray-800">{rightPanelData.cropName}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Planting Date</span>
//                     <span className="text-gray-800">{rightPanelData.plantingDate}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Harvest Date</span>
//                     <span className="text-gray-800">{rightPanelData.harvestDate}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Season</span>
//                     <span className="text-gray-800">{rightPanelData.season}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Status</span>
//                     <span className="text-gray-800">{rightPanelData.status}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Area (Hectares)</span>
//                     <span className="text-gray-800">{rightPanelData.area}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Expected Yield (kg)</span>
//                     <span className="text-gray-800">{rightPanelData.expectedYield}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Soil Type</span>
//                     <span className="text-gray-800">{rightPanelData.soilType}</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <p className="text-gray-500">No crop selected.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard2;
// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// // Dummy data for each crop including image and revenue data for past three years
// export const dummyCropData = {
//   Wheat: {
//     description: "Wheat is a staple crop known for its versatility.",
//     optimalSoil: "Loamy",
//     season: "Rabi",
//     image: "./image.png",
//     revenue: [100000, 120000, 90000],
//   },
//   Alfalfa: {
//     description: "Alfalfa is a high-protein forage crop.",
//     optimalSoil: "Sandy",
//     season: "Summer",
//     image: "./image.png",
//     revenue: [80000, 95000, 110000],
//   },
//   Soybean: {
//     description: "Soybean is used for oil and protein.",
//     optimalSoil: "Loamy",
//     season: "Summer",
//     image: "./image.png",
//     revenue: [130000, 125000, 140000],
//   },
//   Blueberry: {
//     description: "Blueberry is a popular fruit crop.",
//     optimalSoil: "Acidic",
//     season: "Spring",
//     image: "./image.png",
//     revenue: [70000, 85000, 80000],
//   },
//   Rapeseed: {
//     description: "Rapeseed is used for producing canola oil.",
//     optimalSoil: "Clayey",
//     season: "Winter",
//     image: "./image.png",
//     revenue: [90000, 95000, 92000],
//   },
//   Corn: {
//     description: "Corn is a versatile crop used for many purposes.",
//     optimalSoil: "Loamy",
//     season: "Summer",
//     image: "./image.png",
//     revenue: [150000, 155000, 160000],
//   },
//   Rice: {
//     description: "Rice is a staple food in many parts of the world.",
//     optimalSoil: "Clayey",
//     season: "Monsoon",
//     image: "./image.png",
//     revenue: [110000, 115000, 108000],
//   },
//   Potato: {
//     description: "Potato is a versatile root vegetable.",
//     optimalSoil: "Sandy",
//     season: "Autumn",
//     image: "./image.png",
//     revenue: [95000, 97000, 93000],
//   },
//   Beetroot: {
//     description: "Beetroot is rich in nutrients and versatile in cuisine.",
//     optimalSoil: "Loamy",
//     season: "Autumn",
//     image: "./image.png",
//     revenue: [60000, 65000, 63000],
//   },
// };

// function Dashboard2() {
//   const [formData, setFormData] = useState({
//     cropName: "",
//     plantingDate: "",
//     harvestDate: "",
//     season: "",
//     status: "",
//     area: "",
//     expectedYield: "",
//     soilType: "",
//   });
//   const [rightPanelData, setRightPanelData] = useState(null);
//   const [selectedCrops, setSelectedCrops] = useState(
//     // Initialize from localStorage if available
//     JSON.parse(localStorage.getItem("selectedCrops")) || []
//   );

//   // Handle changes for all form fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     // If the cropName changes, update the right panel with corresponding dummy data.
//     if (name === "cropName") {
//       setRightPanelData(dummyCropData[value] || null);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     // Add the submitted crop to selected crops
//     const newCrop = { ...formData };
//     const newSelectedCrops = [...selectedCrops, newCrop];
//     setSelectedCrops(newSelectedCrops);
//     localStorage.setItem("selectedCrops", JSON.stringify(newSelectedCrops));

//     // Update the right panel to display the submitted crop details
//     setRightPanelData(newCrop);

//     // Reset form fields
//     setFormData({
//       cropName: "",
//       plantingDate: "",
//       harvestDate: "",
//       season: "",
//       status: "",
//       area: "",
//       expectedYield: "",
//       soilType: "",
//     });
//   };

//   // Prepare Chart.js data if dummy data is available (i.e. it contains a "description" property)
//   const chartData =
//     rightPanelData && rightPanelData.description
//       ? {
//           labels: ["2022", "2023", "2024"],
//           datasets: [
//             {
//               label: "Revenue",
//               data: rightPanelData.revenue,
//               fill: false,
//               backgroundColor: "rgba(34,197,94,0.6)",
//               borderColor: "rgba(34,197,94,1)",
//             },
//           ],
//         }
//       : null;

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Past 3 Years Revenue",
//       },
//     },
//   };

//   return (
//     <div className="flex max-w-screen-xl mx-auto gap-6 justify-around p-6">
//       {/* Left Side: Form */}
//       <div className="w-1/2 p-6 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-semibold mb-4">Add Crop Details</h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* Crop Name */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Crop Name
//             </label>
//             <select
//               name="cropName"
//               value={formData.cropName}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select Crop</option>
//               {[
//                 "Wheat",
//                 "Alfalfa",
//                 "Soybean",
//                 "Blueberry",
//                 "Rapeseed",
//                 "Corn",
//                 "Rice",
//                 "Potato",
//                 "Beetroot",
//               ].map((crop) => (
//                 <option key={crop} value={crop}>
//                   {crop}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Planting Date */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Planting Date
//             </label>
//             <input
//               type="date"
//               name="plantingDate"
//               value={formData.plantingDate}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>

//           {/* Harvest Date */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Harvest Date
//             </label>
//             <input
//               type="date"
//               name="harvestDate"
//               value={formData.harvestDate}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           {/* Season */}
//           <div>
//             <label className="block text-gray-700 font-medium">Season</label>
//             <select
//               name="season"
//               value={formData.season}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select Season</option>
//               {["Spring", "Summer", "Autumn", "Winter"].map((season) => (
//                 <option key={season} value={season}>
//                   {season}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Status */}
//           <div>
//             <label className="block text-gray-700 font-medium">Status</label>
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               {["planned", "growing", "harvested", "failed"].map((status) => (
//                 <option key={status} value={status}>
//                   {status}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Area */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Area (Hectares)
//             </label>
//             <input
//               type="number"
//               name="area"
//               min="0.1"
//               value={formData.area}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>

//           {/* Expected Yield */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Expected Yield (kg)
//             </label>
//             <input
//               type="number"
//               name="expectedYield"
//               min="0"
//               value={formData.expectedYield}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           {/* Soil Type */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Soil Type
//             </label>
//             <select
//               name="soilType"
//               value={formData.soilType}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select Soil Type</option>
//               {["clay", "sandy", "loamy", "peat", "chalky"].map((soil) => (
//                 <option key={soil} value={soil}>
//                   {soil}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* Right Side: Display Selected/Submitted Data */}
//       <div className="w-1/2 bg-gray-100 shadow-md rounded-lg p-6">
//         {rightPanelData ? (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Crop Details</h2>
//             {/* If dummy data exists (contains description), display styled dummy info */}
//             {"description" in rightPanelData ? (
//               <div className="space-y-4">
//                 <img
//                   src={rightPanelData.image}
//                   alt={formData.cropName}
//                   className="w-full h-48 object-cover rounded-lg shadow-md"
//                 />
//                 <p>
//                   <strong>Description:</strong> {rightPanelData.description}
//                 </p>
//                 <p>
//                   <strong>Optimal Soil:</strong> {rightPanelData.optimalSoil}
//                 </p>
//                 <p>
//                   <strong>Season:</strong> {rightPanelData.season}
//                 </p>
//                 {chartData && (
//                   <div className="mt-4">
//                     <Line data={chartData} options={chartOptions} />
//                   </div>
//                 )}
//               </div>
//             ) : (
//               // Otherwise, display beautified submitted form data
//               <div className="p-6 bg-white rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-bold mb-4">Submitted Crop Details</h2>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Crop Name</span>
//                     <span className="text-gray-800">{rightPanelData.cropName}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Planting Date</span>
//                     <span className="text-gray-800">{rightPanelData.plantingDate}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Harvest Date</span>
//                     <span className="text-gray-800">{rightPanelData.harvestDate}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Season</span>
//                     <span className="text-gray-800">{rightPanelData.season}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Status</span>
//                     <span className="text-gray-800">{rightPanelData.status}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Area (Hectares)</span>
//                     <span className="text-gray-800">{rightPanelData.area}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Expected Yield (kg)</span>
//                     <span className="text-gray-800">{rightPanelData.expectedYield}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-gray-600 font-semibold">Soil Type</span>
//                     <span className="text-gray-800">{rightPanelData.soilType}</span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <p className="text-gray-500">No crop selected.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard2;
import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Dummy data for each crop including image and revenue data for past three years
export const dummyCropData = {
  Wheat: {
    description: "Wheat is a staple crop known for its versatility.",
    optimalSoil: "Loamy",
    season: "Rabi",
    image: "./image.png",
    revenue: [100000, 120000, 90000],
  },
  Alfalfa: {
    description: "Alfalfa is a high-protein forage crop.",
    optimalSoil: "Sandy",
    season: "Summer",
    image: "./image.png",
    revenue: [80000, 95000, 110000],
  },
  Soybean: {
    description: "Soybean is used for oil and protein.",
    optimalSoil: "Loamy",
    season: "Summer",
    image: "./image.png",
    revenue: [130000, 125000, 140000],
  },
  Blueberry: {
    description: "Blueberry is a popular fruit crop.",
    optimalSoil: "Acidic",
    season: "Spring",
    image: "./image.png",
    revenue: [70000, 85000, 80000],
  },
  Rapeseed: {
    description: "Rapeseed is used for producing canola oil.",
    optimalSoil: "Clayey",
    season: "Winter",
    image: "./image.png",
    revenue: [90000, 95000, 92000],
  },
  Corn: {
    description: "Corn is a versatile crop used for many purposes.",
    optimalSoil: "Loamy",
    season: "Summer",
    image: "./image.png",
    revenue: [150000, 155000, 160000],
  },
  Rice: {
    description: "Rice is a staple food in many parts of the world.",
    optimalSoil: "Clayey",
    season: "Monsoon",
    image: "./image.png",
    revenue: [110000, 115000, 108000],
  },
  Potato: {
    description: "Potato is a versatile root vegetable.",
    optimalSoil: "Sandy",
    season: "Autumn",
    image: "./image.png",
    revenue: [95000, 97000, 93000],
  },
  Beetroot: {
    description: "Beetroot is rich in nutrients and versatile in cuisine.",
    optimalSoil: "Loamy",
    season: "Autumn",
    image: "./image.png",
    revenue: [60000, 65000, 63000],
  },
};

function Dashboard2() {
  const [formData, setFormData] = useState({
    cropName: "",
    plantingDate: "",
    harvestDate: "",
    season: "",
    status: "",
    area: "",
    expectedYield: "",
    soilType: "",
  });
  const [rightPanelData, setRightPanelData] = useState(null);
  const [selectedCrops, setSelectedCrops] = useState(
    JSON.parse(localStorage.getItem("selectedCrops")) || []
  );

  // Handle changes for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // If the cropName changes, update the right panel with corresponding dummy data.
    if (name === "cropName") {
      setRightPanelData(dummyCropData[value] || null);
    }
  };
  // const tokenData = JSON.parse(localStorage.getItem("token"));


  // Handle form submission and connect to backend controller using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a payload matching the controller's expected fields.
    const payload = {
      name: formData.cropName, // mapping cropName to name
      //userId: localStorage.getItem("token".userId),   // replace with real user id from your auth
      // userId :tokenData.userId,
      plantingDate: formData.plantingDate,
      harvestDate: formData.harvestDate,
      season: formData.season,
      status: formData.status,
      area: formData.area,
      expectedYield: formData.expectedYield,
      soilType: formData.soilType,
    };

    try {
      // const response = await axios.post("http://localhost:4000/createCrop", payload);
      const token = localStorage.getItem("token");
const response = await axios.post(
  `http://localhost:4000/createCrop?token=${token}`,
  payload
);

      console.log("Server Response:", response.data);

      // Use the response data (assumed to be in response.data.data) for the new crop.
      const newCrop = response.data.data;
      const newSelectedCrops = [...selectedCrops, newCrop];
      setSelectedCrops(newSelectedCrops);
      localStorage.setItem("selectedCrops", JSON.stringify(newSelectedCrops));

      // Update right panel to display the submitted crop details from the server.
      setRightPanelData(newCrop);

      // Reset form fields
      setFormData({
        cropName: "",
        plantingDate: "",
        harvestDate: "",
        season: "",
        status: "",
        area: "",
        expectedYield: "",
        soilType: "",
      });
    } catch (error) {
      console.error("Error creating crop:", error.response?.data || error.message);
    }
  };

  // Prepare Chart.js data if dummy data is available (i.e. it contains a "description" property)
  const chartData =
    rightPanelData && rightPanelData.description
      ? {
          labels: ["2022", "2023", "2024"],
          datasets: [
            {
              label: "Revenue",
              data: rightPanelData.revenue,
              fill: false,
              backgroundColor: "rgba(34,197,94,0.6)",
              borderColor: "rgba(34,197,94,1)",
            },
          ],
        }
      : null;

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Past 3 Years Revenue",
      },
    },
  };

  return (
    <div className="flex max-w-screen-xl mx-auto gap-6 justify-around p-6">
      {/* Left Side: Form */}
      <div className="w-1/2 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Add Crop Details</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Crop Name */}
          <div>
            <label className="block text-gray-700 font-medium">Crop Name</label>
            <select
              name="cropName"
              value={formData.cropName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Crop</option>
              {[
                "Wheat",
                "Alfalfa",
                "Soybean",
                "Blueberry",
                "Rapeseed",
                "Corn",
                "Rice",
                "Potato",
                "Beetroot",
              ].map((crop) => (
                <option key={crop} value={crop}>
                  {crop}
                </option>
              ))}
            </select>
          </div>

          {/* Planting Date */}
          <div>
            <label className="block text-gray-700 font-medium">Planting Date</label>
            <input
              type="date"
              name="plantingDate"
              value={formData.plantingDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Harvest Date */}
          <div>
            <label className="block text-gray-700 font-medium">Harvest Date</label>
            <input
              type="date"
              name="harvestDate"
              value={formData.harvestDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Season */}
          <div>
            <label className="block text-gray-700 font-medium">Season</label>
            <select
              name="season"
              value={formData.season}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Season</option>
              {["Spring", "Summer", "Autumn", "Winter"].map((season) => (
                <option key={season} value={season}>
                  {season}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-700 font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {["planned", "growing", "harvested", "failed"].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Area */}
          <div>
            <label className="block text-gray-700 font-medium">Area (Hectares)</label>
            <input
              type="number"
              name="area"
              min="0.1"
              value={formData.area}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Expected Yield */}
          <div>
            <label className="block text-gray-700 font-medium">Expected Yield (kg)</label>
            <input
              type="number"
              name="expectedYield"
              min="0"
              value={formData.expectedYield}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Soil Type */}
          <div>
            <label className="block text-gray-700 font-medium">Soil Type</label>
            <select
              name="soilType"
              value={formData.soilType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Soil Type</option>
              {["clay", "sandy", "loamy", "peat", "chalky"].map((soil) => (
                <option key={soil} value={soil}>
                  {soil}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Side: Display Selected/Submitted Data */}
      <div className="w-1/2 bg-gray-100 shadow-md rounded-lg p-6">
        {rightPanelData ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Crop Details</h2>
            {"description" in rightPanelData ? (
              <div className="space-y-4">
                <img
                  src={rightPanelData.image}
                  alt={formData.cropName}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <p>
                  <strong>Description:</strong> {rightPanelData.description}
                </p>
                <p>
                  <strong>Optimal Soil:</strong> {rightPanelData.optimalSoil}
                </p>
                <p>
                  <strong>Season:</strong> {rightPanelData.season}
                </p>
                {chartData && (
                  <div className="mt-4">
                    <Line data={chartData} options={chartOptions} />
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Submitted Crop Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-gray-600 font-semibold">Crop Name</span>
                    <span className="text-gray-800">{rightPanelData.name || rightPanelData.cropName}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 font-semibold">Planting Date</span>
                    <span className="text-gray-800">{rightPanelData.plantingDate}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 font-semibold">Harvest Date</span>
                    <span className="text-gray-800">{rightPanelData.harvestDate}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 font-semibold">Season</span>
                    <span className="text-gray-800">{rightPanelData.season}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 font-semibold">Status</span>
                    <span className="text-gray-800">{rightPanelData.status}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 font-semibold">Area (Hectares)</span>
                    <span className="text-gray-800">{rightPanelData.area}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 font-semibold">Expected Yield (kg)</span>
                    <span className="text-gray-800">{rightPanelData.expectedYield}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 font-semibold">Soil Type</span>
                    <span className="text-gray-800">{rightPanelData.soilType}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-500">No crop selected.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard2;

