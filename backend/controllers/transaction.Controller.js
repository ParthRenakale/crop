
import Transaction from "../models/Transaction.model.js"
import { ApiError } from "../utils/api.js";
export const createTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAmount = async (req, res, next) => {
  try {
    // Fetch all transactions (you can filter by user if needed)
    const transactions = await Transaction.find();

    // Calculate totals for revenue and expense
    const totals = transactions.reduce(
      (acc, txn) => {
        if (txn.type === "revenue") acc.revenue += txn.amount;
        if (txn.type === "expense") acc.expense += txn.amount;
        return acc;
      },
      { revenue: 0, expense: 0 }
    );

    // Calculate net amount: revenue - expense
    const netAmount = totals.revenue - totals.expense;

    // Respond with the calculated net amount and the totals
    return res.status(200).json(
      new ApiResponse(200, {
        message: "Net amount calculated successfully",
        data: {
          netAmount,
          totals,
        },
      })
    );
  } catch (error) {
    return next(
      new ApiError(500, "Error calculating net amount", [error.message])
    );
  }
};