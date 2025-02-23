// // backend/controllers/dashboard.Controller.js
// import Crop from "../models/crop.model.js";
// import Transaction from "../models/Transaction.model.js";
// import jwt from "jsonwebtoken";
// import { ApiError, ApiResponse } from "../utils/api.js";

// export const getDashboardData = async (req, res, next) => {
//   try {
//     // Get token from query params
//     const { token } = req.query;
    
//     // Verify and decode token
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     const userId = decoded.id;

//     // Get crop data
//     const crop = await Crop.findOne({ userId }).select(
//       "name area environment expectedYield"
//     );

//     if (!crop) {
//       return next(new ApiError(404, "Crop not found"));
//     }

//     // Get financial data from transactions
//     const transactions = await Transaction.find().sort({ date: -1 });
    
//     // Calculate financial statistics
//     const financials = transactions.reduce(
//       (acc, transaction) => {
//         if (transaction.type === "revenue") acc.revenue += transaction.amount;
//         if (transaction.type === "expense") acc.expense += transaction.amount;
//         return acc;
//       },
//       { revenue: 0, expense: 0 }
//     );

//     const currentProfit = financials.revenue - financials.expense;
//     const expectedProfit = crop.expectedYield * 500; // Adjust multiplier based on your pricing
//     const achievedPercentage = (currentProfit / expectedProfit) * 100;

//     // Prepare response data
//     const dashboardData = {
//       crop: {
//         name: crop.name,
//         area: crop.area,
//         environment: {
//           temperature: crop.environment.temperature,
//           moisture: crop.environment.moisture,
//           ph: crop.environment.ph
//         }
//       },
//       financials: {
//         currentProfit: currentProfit,
//         expectedProfit: expectedProfit,
//         achievedPercentage: achievedPercentage
//       }
//     };

//     return res.status(200).json(
//       new ApiResponse(200, {
//         message: "Dashboard data retrieved successfully",
//         data: dashboardData
//       })
//     );

//   } catch (error) {
//     return next(
//       new ApiError(500, "Error retrieving dashboard data", [error.message])
//     );
//   }
// };
import Crop from "../models/crop.model.js";
import Transaction from "../models/Transaction.model.js";
import jwt from "jsonwebtoken";
import { ApiError, ApiResponse } from "../utils/api.js";

export const getDashboardData = async (req, res, next) => {
  try {
    // Extract token from query params and cropId from route params
    const { token } = req.query;
    const { cropId } = req.params;

    // Verify and decode token using the secret key
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    // Find the crop by cropId and userId
    const crop = await Crop.findOne({ _id: cropId, userId });
    if (!crop) {
      return next(new ApiError(404, "Crop not found"));
    }

    // Get transactions for the user (optionally, you could filter by crop if needed)
    const transactions = await Transaction.find().sort({ date: -1 });
    console.log("Transactions:", transactions);
    
    // Calculate financial statistics
    const financials = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "revenue") acc.revenue += transaction.amount;
        if (transaction.type === "expense") acc.expense += transaction.amount;
        return acc;
      },
      { revenue: 0, expense: 0 }
    );

    const currentProfit = financials.revenue - financials.expense;
    const expectedProfit = crop.expectedYield * 500; // Adjust multiplier based on pricing
    const achievedPercentage = (currentProfit / expectedProfit) * 100;

    // Prepare response data
    const dashboardData = {
      crop: {
        name: crop.name,
        area: crop.area,
        environment: {
          temperature: crop.environment.temperature,
          moisture: crop.environment.moisture,
          ph: crop.environment.ph,
        },
      },
      financials: {
        currentProfit,
        expectedProfit,
        achievedPercentage,
      },
    };

    return res
      .status(200)
      .json(
        new ApiResponse(200, {
          message: "Dashboard data retrieved successfully",
          data: dashboardData,
        })
      );
  } catch (error) {
    return next(
      new ApiError(500, "Error retrieving dashboard data", [error.message])
    );
  }
};
