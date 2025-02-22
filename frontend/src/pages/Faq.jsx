import React from "react";

function FAQs() {
  return (
    <div className="max-w-screen-xl mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">What is AgriManage?</h2>
          <p className="text-lg">
            AgriManage is a comprehensive agricultural management platform that helps farmers track crop growth, log farm operations, and manage financial records in a user-friendly interface.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">How does the dashboard work?</h2>
          <p className="text-lg">
            The dashboard aggregates data from various modules including crop monitoring, activity logging, and financial management, presenting key metrics and trends to help farmers make informed decisions.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Is the platform accessible on mobile devices?</h2>
          <p className="text-lg">
            Yes, AgriManage is designed to be fully responsive and accessible on all modern devices, so you can manage your farm operations on-the-go.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">How secure is my data?</h2>
          <p className="text-lg">
            We prioritize security and use advanced encryption and authentication methods to ensure that your data is protected at all times.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
