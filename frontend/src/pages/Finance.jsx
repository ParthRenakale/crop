// // import React, { useState, useEffect } from "react";
// // import { Bar } from "react-chartjs-2";
// // import axios from 'axios';
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// // } from "chart.js";

// // // Register Chart.js components
// // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // function FinancialManagement() {
// //   const [transactions, setTransactions] = useState([]);
// //   const [formData, setFormData] = useState({
// //     type: "expense", // "expense" or "revenue"
// //     description: "",
// //     amount: "",
// //     date: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setTransactions((prev) => [...prev, formData]);
// //     setFormData({
// //       type: "expense",
// //       description: "",
// //       amount: "",
// //       date: "",
// //     });
// //   };

// //   // Group transactions by month
// //   const monthlyData = {};
// //   transactions.forEach((txn) => {
// //     const month = new Date(txn.date).toLocaleString("default", {
// //       month: "short",
// //     });
// //     if (!monthlyData[month]) {
// //       monthlyData[month] = { expense: 0, revenue: 0 };
// //     }
// //     monthlyData[month][txn.type] += parseFloat(txn.amount);
// //   });

// //   // Sort months in calendar order
// //   const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// //   const sortedMonths = Object.keys(monthlyData).sort(
// //     (a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b)
// //   );

// //   const chartData = {
// //     labels: sortedMonths,
// //     datasets: [
// //       {
// //         label: "Expenses",
// //         data: sortedMonths.map((month) => monthlyData[month].expense),
// //         backgroundColor: "rgba(239,68,68,0.6)", // red
// //       },
// //       {
// //         label: "Revenue",
// //         data: sortedMonths.map((month) => monthlyData[month].revenue),
// //         backgroundColor: "rgba(34,197,94,0.6)", // green
// //       },
// //     ],
// //   };

// //   const chartOptions = {
// //     responsive: true,
// //     plugins: {
// //       legend: { position: "top" },
// //       title: { display: true, text: "Monthly Financial Summary" },
// //     },
// //   };

// //   return (
// //     <div className="max-w-screen-xl mx-auto p-6">
// //       <h1 className="text-3xl font-bold text-center mb-8">Financial Management</h1>
// //       <div className="flex flex-col md:flex-row gap-6">
// //         {/* Form Section */}
// //         <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
// //           <h2 className="text-2xl font-semibold mb-4">Add Transaction</h2>
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <label className="block text-gray-700 font-medium">Type</label>
// //               <select
// //                 name="type"
// //                 value={formData.type}
// //                 onChange={handleChange}
// //                 className="w-full p-2 border border-gray-300 rounded-md"
// //               >
// //                 <option value="expense">Expense</option>
// //                 <option value="revenue">Revenue</option>
// //               </select>
// //             </div>
// //             <div>
// //               <label className="block text-gray-700 font-medium">Description</label>
// //               <input
// //                 type="text"
// //                 name="description"
// //                 value={formData.description}
// //                 onChange={handleChange}
// //                 placeholder="Enter description"
// //                 className="w-full p-2 border border-gray-300 rounded-md"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-gray-700 font-medium">Amount</label>
// //               <input
// //                 type="number"
// //                 name="amount"
// //                 value={formData.amount}
// //                 onChange={handleChange}
// //                 placeholder="Enter amount"
// //                 className="w-full p-2 border border-gray-300 rounded-md"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-gray-700 font-medium">Date</label>
// //               <input
// //                 type="date"
// //                 name="date"
// //                 value={formData.date}
// //                 onChange={handleChange}
// //                 className="w-full p-2 border border-gray-300 rounded-md"
// //                 required
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
// //             >
// //               Add Transaction
// //             </button>
// //           </form>
// //         </div>
// //         {/* Chart and Summary Section */}
// //         <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
// //           <h2 className="text-2xl font-semibold mb-4">Monthly Summary</h2>
// //           {transactions.length > 0 ? (
// //             <Bar data={chartData} options={chartOptions} />
// //           ) : (
// //             <p className="text-gray-500">No transactions added yet.</p>
// //           )}
// //           <div className="mt-6">
// //             <h3 className="text-xl font-semibold mb-2">Recent Transactions</h3>
// //             {transactions.length > 0 ? (
// //               <ul className="space-y-2">
// //                 {transactions.map((txn, index) => (
// //                   <li
// //                     key={index}
// //                     className="p-2 border border-gray-200 rounded-md"
// //                   >
// //                     <p className="font-medium">
// //                       {txn.type === "expense" ? "Expense" : "Revenue"}: ${txn.amount}
// //                     </p>
// //                     <p className="text-sm text-gray-600">{txn.description}</p>
// //                     <p className="text-sm text-gray-500">{txn.date}</p>
// //                   </li>
// //                 ))}
// //               </ul>
// //             ) : (
// //               <p className="text-gray-500">No transactions recorded.</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FinancialManagement;
// // import React, { useState, useEffect } from "react";
// // import axios from 'axios';
// // import { Bar } from "react-chartjs-2";
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend,
// // } from 'chart.js';

// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   Title,
// //   Tooltip,
// //   Legend
// // );

// // function FinancialManagement() {
// //   const [transactions, setTransactions] = useState([]);
// //   const [formData, setFormData] = useState({
// //     type: "expense",
// //     description: "",
// //     amount: "",
// //     date: "",
// //   });
// //   const [totalAmount, setTotalAmount] = useState({ revenue: 0, expense: 0 });
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetchTransactions();
// //   }, []);

// //   useEffect(() => {
// //     calculateTotals();
// //   }, [transactions]);

// //   const fetchTransactions = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:4000/getAllTransactions');
// //       // Ensure we're getting an array
// //       if (Array.isArray(response.data)) {
// //         setTransactions(response.data);
// //       } else {
// //         console.error('Invalid data format:', response.data);
// //         setTransactions([]);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching transactions:', error);
// //       setTransactions([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const calculateTotals = () => {
// //     const totals = transactions.reduce((acc, txn) => {
// //       acc[txn.type] += parseFloat(txn.amount);
// //       return acc;
// //     }, { revenue: 0, expense: 0 });
// //     setTotalAmount(totals);
// //   };

// //   // Rest of the code remains the same until the monthlyData calculation

// //   // Modified monthlyData calculation with array check
// //   const monthlyData = {};
// //   if (Array.isArray(transactions)) {
// //     transactions.forEach((txn) => {
// //       const month = new Date(txn.date).toLocaleString("default", {
// //         month: "short",
// //       });
// //       if (!monthlyData[month]) {
// //         monthlyData[month] = { expense: 0, revenue: 0 };
// //       }
// //       monthlyData[month][txn.type] += parseFloat(txn.amount);
// //     });
// //   }

// //   // Rest of the component remains the same

// //   return (
// //         <div className="max-w-screen-xl mx-auto p-6">
// //           <h1 className="text-3xl font-bold text-center mb-8">Financial Management</h1>
// //           <div className="flex flex-col md:flex-row gap-6">
// //             {/* Form Section */}
// //             <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
// //               <h2 className="text-2xl font-semibold mb-4">Add Transaction</h2>
// //               <form onSubmit={handleSubmit} className="space-y-4">
// //                 <div>
// //                   <label className="block text-gray-700 font-medium">Type</label>
// //                   <select
// //                     name="type"
// //                     value={formData.type}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border border-gray-300 rounded-md"
// //                   >
// //                     <option value="expense">Expense</option>
// //                     <option value="revenue">Revenue</option>
// //                   </select>
// //                 </div>
// //                 <div>
// //                   <label className="block text-gray-700 font-medium">Description</label>
// //                   <input
// //                     type="text"
// //                     name="description"
// //                     value={formData.description}
// //                     onChange={handleChange}
// //                     placeholder="Enter description"
// //                     className="w-full p-2 border border-gray-300 rounded-md"
// //                     required
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-gray-700 font-medium">Amount</label>
// //                   <input
// //                     type="number"
// //                     name="amount"
// //                     value={formData.amount}
// //                     onChange={handleChange}
// //                     placeholder="Enter amount"
// //                     className="w-full p-2 border border-gray-300 rounded-md"
// //                     required
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-gray-700 font-medium">Date</label>
// //                   <input
// //                     type="date"
// //                     name="date"
// //                     value={formData.date}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border border-gray-300 rounded-md"
// //                     required
// //                   />
// //                 </div>
// //                 <button
// //                   type="submit"
// //                   className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
// //                 >
// //                   Add Transaction
// //                 </button>
// //               </form>
// //             </div>
// //             {/* Chart and Summary Section */}
// //             <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
// //               <h2 className="text-2xl font-semibold mb-4">Monthly Summary</h2>
// //               {transactions.length > 0 ? (
// //                 <Bar data={chartData} options={chartOptions} />
// //               ) : (
// //                 <p className="text-gray-500">No transactions added yet.</p>
// //               )}
// //               <div className="mt-6">
// //                 <h3 className="text-xl font-semibold mb-2">Recent Transactions</h3>
// //                 {transactions.length > 0 ? (
// //                   <ul className="space-y-2">
// //                     {transactions.map((txn, index) => (
// //                       <li
// //                         key={index}
// //                         className="p-2 border border-gray-200 rounded-md"
// //                       >
// //                         <p className="font-medium">
// //                           {txn.type === "expense" ? "Expense" : "Revenue"}: ${txn.amount}
// //                         </p>
// //                         <p className="text-sm text-gray-600">{txn.description}</p>
// //                         <p className="text-sm text-gray-500">{txn.date}</p>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 ) : (
// //                   <p className="text-gray-500">No transactions recorded.</p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       );
// //     }
// //     export default FinancialManagement;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// function FinancialManagement() {
//   const [transactions, setTransactions] = useState([]);
//   const [formData, setFormData] = useState({
//     type: "expense",
//     description: "",
//     amount: "",
//     date: "",
//   });
//   const [totalAmount, setTotalAmount] = useState({ revenue: 0, expense: 0 });
//   const [loading, setLoading] = useState(true);

//   // Fetch all transactions on mount
//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   // Recalculate totals when transactions update
//   useEffect(() => {
//     calculateTotals();
//   }, [transactions]);

//   const fetchTransactions = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/getAllTransactions");
//       // Assuming response.data is an array of transactions
//       if (Array.isArray(response.data)) {
//         setTransactions(response.data);
//       } else {
//         console.error("Invalid data format:", response.data);
//         setTransactions([]);
//       }
//     } catch (error) {
//       console.error("Error fetching transactions:", error);
//       setTransactions([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const calculateTotals = () => {
//     const totals = transactions.reduce(
//       (acc, txn) => {
//         acc[txn.type] += parseFloat(txn.amount);
//         return acc;
//       },
//       { revenue: 0, expense: 0 }
//     );
//     setTotalAmount(totals);
//   };

//   // Build monthly data for the chart
//   const monthlyData = {};
//   transactions.forEach((txn) => {
//     const month = new Date(txn.date).toLocaleString("default", { month: "short" });
//     if (!monthlyData[month]) {
//       monthlyData[month] = { expense: 0, revenue: 0 };
//     }
//     monthlyData[month][txn.type] += parseFloat(txn.amount);
//   });

//   // Sort months in calendar order
//   const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//   const sortedMonths = Object.keys(monthlyData).sort(
//     (a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b)
//   );

//   const chartData = {
//     labels: sortedMonths,
//     datasets: [
//       {
//         label: "Expense",
//         data: sortedMonths.map((month) => monthlyData[month].expense),
//         backgroundColor: "rgba(239,68,68,0.6)", // red
//       },
//       {
//         label: "Revenue",
//         data: sortedMonths.map((month) => monthlyData[month].revenue),
//         backgroundColor: "rgba(34,197,94,0.6)", // green
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { position: "top" },
//       title: { display: true, text: "Monthly Financial Summary" },
//     },
//   };

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission (create a new transaction)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send formData to the backend createTransaction endpoint
//       const response = await axios.post(
//         "http://localhost:4000/createTransaction",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       // Append new transaction to state
//       setTransactions((prev) => [response.data, ...prev]);
//       // Reset the form
//       setFormData({
//         type: "expense",
//         description: "",
//         amount: "",
//         date: "",
//       });
//     } catch (error) {
//       console.error("Error creating transaction:", error.response || error.message);
//     }
//   };

//   if (loading) {
//     return <div className="text-center p-6">Loading transactions...</div>;
//   }

//   return (
//     <div className="max-w-screen-xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-8">Financial Management</h1>
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Form Section */}
//         <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Add Transaction</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 font-medium">Type</label>
//               <select
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="expense">Expense</option>
//                 <option value="revenue">Revenue</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium">Description</label>
//               <input
//                 type="text"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 placeholder="Enter description"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium">Amount</label>
//               <input
//                 type="number"
//                 name="amount"
//                 value={formData.amount}
//                 onChange={handleChange}
//                 placeholder="Enter amount"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium">Date</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//             >
//               Add Transaction
//             </button>
//           </form>
//         </div>
//         {/* Chart and Summary Section */}
//         <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Monthly Summary</h2>
//           {transactions.length > 0 ? (
//             <Bar data={chartData} options={chartOptions} />
//           ) : (
//             <p className="text-gray-500">No transactions added yet.</p>
//           )}
//           <div className="mt-6">
//             <h3 className="text-xl font-semibold mb-2">Recent Transactions</h3>
//             {transactions.length > 0 ? (
//               <ul className="space-y-2">
//                 {transactions.map((txn, index) => (
//                   <li
//                     key={index}
//                     className="p-2 border border-gray-200 rounded-md"
//                   >
//                     <p className="font-medium">
//                       {txn.type === "expense" ? "Expense" : "Revenue"}: ${txn.amount}
//                     </p>
//                     <p className="text-sm text-gray-600">{txn.description}</p>
//                     <p className="text-sm text-gray-500">
//                       {new Date(txn.date).toLocaleDateString()}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-500">No transactions recorded.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FinancialManagement;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function FinancialManagement() {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    type: "expense",
    description: "",
    amount: "",
    date: "",
  });
  const [totalAmount, setTotalAmount] = useState({ revenue: 0, expense: 0 });
  const [loading, setLoading] = useState(true);

  // Fetch transactions on component mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Recalculate totals when transactions change
  useEffect(() => {
    calculateTotals();
  }, [transactions]);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getAllTransactions");
      if (Array.isArray(response.data)) {
        setTransactions(response.data);
      } else {
        console.error("Invalid data format:", response.data);
        setTransactions([]);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotals = () => {
    const totals = transactions.reduce(
      (acc, txn) => {
        acc[txn.type] += parseFloat(txn.amount);
        return acc;
      },
      { revenue: 0, expense: 0 }
    );
    setTotalAmount(totals);
  };

  // Build monthly data for the chart
  const monthlyData = {};
  transactions.forEach((txn) => {
    const month = new Date(txn.date).toLocaleString("default", { month: "short" });
    if (!monthlyData[month]) {
      monthlyData[month] = { expense: 0, revenue: 0 };
    }
    monthlyData[month][txn.type] += parseFloat(txn.amount);
  });

  // Sort months in calendar order
  const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const sortedMonths = Object.keys(monthlyData).sort(
    (a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b)
  );

  const chartData = {
    labels: sortedMonths,
    datasets: [
      {
        label: "Expense",
        data: sortedMonths.map((month) => monthlyData[month].expense),
        backgroundColor: "rgba(239,68,68,0.6)", // red
      },
      {
        label: "Revenue",
        data: sortedMonths.map((month) => monthlyData[month].revenue),
        backgroundColor: "rgba(34,197,94,0.6)", // green
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Financial Summary" },
    },
  };

  // Handle input changes for the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission to create a transaction
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/createTransaction",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Prepend new transaction to state
      setTransactions((prev) => [response.data, ...prev]);
      // Reset the form
      setFormData({
        type: "expense",
        description: "",
        amount: "",
        date: "",
      });
    } catch (error) {
      console.error("Error creating transaction:", error.response || error.message);
    }
  };

  // Calculate the total fund: total revenue - total expense
  const totalFund = totalAmount.revenue - totalAmount.expense;
  // Determine if it's profit (non-negative) or loss (negative)
  const profitLossLabel = totalFund >= 0 ? "Profit" : "Loss";
  const profitLossColor = totalFund >= 0 ? "text-green-600" : "text-red-600";

  if (loading) {
    return <div className="text-center p-6">Loading transactions...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Financial Management</h1>
      
      {/* Display Total Fund with Profit or Loss */}
      <div className="mb-6 text-center">
        <p className={`text-xl font-bold ${profitLossColor}`}>
          {profitLossLabel}: ${Math.abs(totalFund).toFixed(2)}
        </p>
        <p className="text-sm text-gray-600">
          (Revenue: ${totalAmount.revenue.toFixed(2)} - Expense: ${totalAmount.expense.toFixed(2)})
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add Transaction</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="expense">Expense</option>
                <option value="revenue">Revenue</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Add Transaction
            </button>
          </form>
        </div>
        
        {/* Chart and Summary Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Monthly Summary</h2>
          {transactions.length > 0 ? (
            <Bar data={chartData} options={chartOptions} />
          ) : (
            <p className="text-gray-500">No transactions added yet.</p>
          )}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Recent Transactions</h3>
            {transactions.length > 0 ? (
              <ul className="space-y-2">
                {transactions.map((txn, index) => (
                  <li key={index} className="p-2 border border-gray-200 rounded-md">
                    <p className="font-medium">
                      {txn.type === "expense" ? "Expense" : "Revenue"}: ${txn.amount}
                    </p>
                    <p className="text-sm text-gray-600">{txn.description}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(txn.date).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No transactions recorded.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialManagement;
