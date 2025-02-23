import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-green-600 text-white py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">AgriSmart</h1>
          <p className="text-xl mb-8">
            Empowering Farmers with Smart Agricultural Management
          </p>
          <Link
            to="/dashboardog"
            className="bg-white text-green-600 px-6 py-3 font-semibold rounded-full hover:bg-green-100 transition"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-3">Crop Monitoring</h3>
              <p className="text-gray-700">
                Real-time tracking of crop growth and health with data-driven insights.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-3">Financial Management</h3>
              <p className="text-gray-700">
                Optimize farm finances by monitoring expenses, revenue, and profit margins.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-3">Weather Forecasting</h3>
              <p className="text-gray-700">
                Get localized weather updates and predictive insights to plan your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">About AgriSmart</h2>
          <p className="text-xl text-gray-700 text-center">
            AgriSmart is an innovative platform designed to empower farmers by leveraging cutting-edge technology to monitor crops, manage finances, and optimize operations. Our mission is to create a sustainable, data-driven agriculture ecosystem that enhances productivity and profitability.
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8">
            Join the AgriSmart community and harness the power of smart agricultural management.
          </p>
          <Link
            to="/signup"
            className="bg-green-600 text-white px-6 py-3 font-semibold rounded-full hover:bg-green-500 transition"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
