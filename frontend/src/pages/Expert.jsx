import React from "react";

const expertsData = [
  {
    id: 1,
    name: "Dr. Aisha Khan",
    title: "Agricultural Scientist",
    image: "./p1.jpg",
    description:
      "Expert in sustainable farming techniques and crop yield optimization. Passionate about eco-friendly practices and innovative agricultural research.",
    phone: "+91 9876543210",
    email: "aisha@example.com",
  },
  {
    id: 2,
    name: "Mr. Raj Patel",
    title: "Organic Farming Expert",
    image: "./p2.jpg",
    description:
      "Provides strategic advice on farm management, financial planning, and market trends to help farmers maximize their productivity.",
    phone: "+91 9123456780",
    email: "raj@example.com",
  },
  {
    id: 3,
    name: "Mr. SitaRaman Rao",
    title: "Organic Farming Expert",
    image: "./p3.webp",
    description:
      "Specializes in organic and eco-friendly farming practices, helping farmers transition to sustainable methods and improve soil health.",
    phone: "+91 9988776655",
    email: "sita@example.com",
  },
];

function Experts() {
  return (
    <div className="max-w-screen-xl mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Our Experts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertsData.map((expert) => (
          <div
            key={expert.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {expert.name}
              </h2>
              <p className="text-xl text-teal-500 mb-2">{expert.title}</p>
              <p className="text-gray-600 mb-4">{expert.description}</p>
              <div className="flex flex-col space-y-2">
                <p className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-teal-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12H8m8 4H8m-2-8h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V10a2 2 0 012-2z"
                    />
                  </svg>
                  {expert.email}
                </p>
                <p className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-teal-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5h12M9 3v2m6 2H3a2 2 0 00-2 2v11a2 2 0 002 2h18a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2z"
                    />
                  </svg>
                  {expert.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experts;
