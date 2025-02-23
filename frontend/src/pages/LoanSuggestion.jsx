import React, { useState, useEffect } from "react";

const loanSchemes = [
  { schemeName: "Basic Loan", revenueLimit: 50000, interestRate: 10.5 },
  { schemeName: "Standard Loan", revenueLimit: 100000, interestRate: 8.75 },
  { schemeName: "Premium Loan", revenueLimit: 150000, interestRate: 7.5 },
  { schemeName: "Elite Loan", revenueLimit: 200000, interestRate: 6.0 },
];

function LoanSuggestion() {
  const [availableRevenue, setAvailableRevenue] = useState(null);
  const [suggestedLoan, setSuggestedLoan] = useState(null);

  // Retrieve revenue from localStorage on component mount
  useEffect(() => {
    const storedAmount = localStorage.getItem("amount");
    if (storedAmount) {
      setAvailableRevenue(Number(storedAmount));
    } else {
      setAvailableRevenue(0);
    }
  }, []);

  // Determine eligible and suggested loan based on available revenue
  useEffect(() => {
    if (availableRevenue !== null) {
      // Filter loan schemes where user's revenue is below the revenue limit
      const eligibleLoans = loanSchemes.filter(
        (scheme) => availableRevenue < scheme.revenueLimit
      );
      if (eligibleLoans.length > 0) {
        // Select the eligible loan with the lowest interest rate
        const bestLoan = eligibleLoans.reduce((prev, curr) =>
          curr.interestRate < prev.interestRate ? curr : prev
        );
        setSuggestedLoan(bestLoan);
      } else {
        setSuggestedLoan(null);
      }
    }
  }, [availableRevenue]);

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Loan Suggestion</h1>
      <div className="mb-6 text-center">
        <p className="text-xl font-semibold">
          Available Revenue: ₹
          {availableRevenue !== null
            ? availableRevenue.toLocaleString()
            : "N/A"}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* List of All Loan Schemes */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Available Loan Schemes</h2>
          <ul className="space-y-4">
            {loanSchemes.map((scheme, index) => (
              <li
                key={index}
                className="p-4 border rounded hover:bg-green-100 transition"
              >
                <p className="font-bold text-lg">{scheme.schemeName}</p>
                <p>
                  Revenue Limit: ₹{scheme.revenueLimit.toLocaleString()}
                </p>
                <p>Interest Rate: {scheme.interestRate}%</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Suggested Loan */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Suggested Loan</h2>
          {suggestedLoan ? (
            <div className="p-4 border rounded bg-green-50">
              <p className="font-bold text-xl">{suggestedLoan.schemeName}</p>
              <p>
                Revenue Limit: ₹{suggestedLoan.revenueLimit.toLocaleString()}
              </p>
              <p>Interest Rate: {suggestedLoan.interestRate}%</p>
              <p className="mt-2 text-sm text-gray-700">
                This loan is available for users with revenue below ₹
                {suggestedLoan.revenueLimit.toLocaleString()} and offers the lowest interest rate among eligible schemes.
              </p>
            </div>
          ) : (
            <p className="text-lg text-red-500">
              No eligible loan scheme found based on your revenue.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoanSuggestion;
