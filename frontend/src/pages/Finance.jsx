import React, { useState } from "react";
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

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function FinancialManagement() {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    type: "expense", // "expense" or "revenue"
    description: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions((prev) => [...prev, formData]);
    setFormData({
      type: "expense",
      description: "",
      amount: "",
      date: "",
    });
  };

  // Group transactions by month
  const monthlyData = {};
  transactions.forEach((txn) => {
    const month = new Date(txn.date).toLocaleString("default", {
      month: "short",
    });
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
        label: "Expenses",
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

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Financial Management</h1>
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
                  <li
                    key={index}
                    className="p-2 border border-gray-200 rounded-md"
                  >
                    <p className="font-medium">
                      {txn.type === "expense" ? "Expense" : "Revenue"}: ${txn.amount}
                    </p>
                    <p className="text-sm text-gray-600">{txn.description}</p>
                    <p className="text-sm text-gray-500">{txn.date}</p>
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
