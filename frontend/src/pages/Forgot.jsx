// import React, { useState } from "react";

// const Forgot = () => {
//   const [email, setEmail] = useState("");
//   const [firstSchool, setFirstSchool] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a single object containing email and first school
//     const formData = {
//       email,
//       firstSchool,
//     };

//     console.log(formData);

//   setEmail('');
//   setFirstSchool('');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">

//       <form
//         onSubmit={handleSubmit}
//         className="bg-gray-800 p-6 rounded-md shadow-md w-full max-w-sm"
//       >
//           <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-300 mb-2"
//           >
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="firstSchool"
//             className="block text-sm font-medium text-gray-300 mb-2"
//           >
//             Your First School
//           </label>
//           <input
//             type="text"
//             id="firstSchool"
//             value={firstSchool}
//             onChange={(e) => setFirstSchool(e.target.value)}
//             placeholder="Enter your first school"
//             className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition"
//         >
//           Send Reset Link
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Forgot;

import React, { useState } from "react"; // Add this import

import axios from "axios";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [firstSchool, setFirstSchool] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a single object containing email and first school
    const formData = {
      email,
      yourFirstSchool: firstSchool, // Match this with the backend field name
    };

    try {
      // Send the data to the backend API
      const response = await axios.post(
        "http://localhost:4000/forgot-password",
        formData
      );

      // Handle the success response (optional)
      console.log(response.data.message);
    } catch (error) {
      // Handle errors (optional)
      console.error("Error sending reset password request:", error);
    }

    // Reset the form fields
    setEmail("");
    setFirstSchool("");
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    //   <form
    //     onSubmit={handleSubmit}
    //     className="bg-gray-800 p-6 rounded-md shadow-md w-full max-w-sm"
    //   >
    //     <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="email"
    //         className="block text-sm font-medium text-gray-300 mb-2"
    //       >
    //         Email Address
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         placeholder="Enter your email"
    //         className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
    //         required
    //       />
    //     </div>
    //     <div className="mb-6">
    //       <label
    //         htmlFor="firstSchool"
    //         className="block text-sm font-medium text-gray-300 mb-2"
    //       >
    //         Your First School
    //       </label>
    //       <input
    //         type="text"
    //         id="firstSchool"
    //         value={firstSchool}
    //         onChange={(e) => setFirstSchool(e.target.value)}
    //         placeholder="Enter your first school"
    //         className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
    //         required
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       className="w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition"
    //     >
    //       Send Reset Link
    //     </button>
    //   </form>
    // </div>

    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="relative w-[400px] h-[470px] bg-black rounded-[50px_5px] flex items-center justify-center overflow-hidden mt-[20px]"
      >
        {/* <div className="absolute w-[130%] h-[130%] bg-[conic-gradient(transparent,transparent,transparent,#3cbdb1)] animate-rotate_border"></div>
        <div className="absolute w-[130%] h-[130%] bg-[conic-gradient(transparent,transparent,transparent,#c8a217)] animate-rotate_border animate-delay-[-3s]"></div> */}

        <div className="absolute bg-black rounded-[50px_5px] inset-[5px] p-[50px_40px] z-10 text-white">
          <h2 className="text-2xl font-semibold text-center">
            Forgot Password
          </h2>

          <div className="mt-[40px] relative flex items-center justify-start">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[95%] h-[30px] bg-transparent border-b border-white outline-none text-white text-[20px] pl-[10px]"
              autoComplete="off"
              required
            />
          </div>

          <div className="mt-[40px] relative flex items-center justify-start">
            <input
              type="text"
              placeholder="Your First School"
              value={firstSchool}
              onChange={(e) => setFirstSchool(e.target.value)}
              className="w-[95%] h-[30px] bg-transparent border-b border-white outline-none text-white text-[20px] pl-[10px]"
              autoComplete="off"
              required
            />
          </div>

          <div className="relative mt-[70px] w-[300px] h-[40px] transition-[1s]">
            <button
              type="submit"
              className="absolute w-full h-full text-white bg-black border border-[#c8a217] rounded-[50px] flex justify-center items-center text-[22px] tracking-[2px] cursor-pointer hover:bg-[#c8a217]"
            >
              Send Reset Link
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forgot;
