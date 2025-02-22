import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";


const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("Select Role");
  const [firstSchool, setFirstSchool] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/signup", {
        firstName,
        lastName,
        email,
        password,
        phone: phoneNumber,
        role,
        yourFirstSchool: firstSchool,
      });

      toast.success("Registration successful! Please verify your email.");
      console.log(response.data);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setRole("Select Role");
      setFirstSchool("");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Error during registration", error);
    }
  };

  return (
    

    <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <Toaster />
      
      <form
        onSubmit={handleRegister}
        className="relative w-full max-w-[400px] h-auto bg-black rounded-[50px] flex flex-col items-center justify-center mt-10 p-1 shadow-lg border-[5px]  border-transparent z-10" 
      >
       <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* <div className="absolute w-[130%] h-[130%] bg-[conic-gradient(transparent,transparent,transparent,#3cbdb1)] animate-rotate_border"></div>
      <div className="absolute w-[130%] h-[130%]  bg-[conic-gradient(transparent,transparent,transparent,#c8a217)] animate-rotate_border animate-delay-[-3s]"></div> */}
      
       </div> 

        <div className="relative bg-black rounded w-full z-10">
          <h2 className="text-2xl font-semibold text-center text-white">
            Register
          </h2>

          <div className="mt-6">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
              required
            />
          </div>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
              required
            />
          </div>

          <div className="mt-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
              required
            />
          </div>

          <div className="mt-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
              required
            />
          </div>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
              required
            />
          </div>

          
          <div className="mt-6">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full h-12 bg-black text-white  border-b border-white text-lg outline-none px-2 cursor-pointer hover:text-yellow-500"
              required
            >
              <option value="Select Role" className="bg-black text-white">
                Select Role
              </option>
              <option value="Admin" className="bg-black text-white hover:bg-yellow-600">
                Admin
              </option>
              <option
                value="Contentcreator"
                className="bg-black text-white hover:bg-yellow-600"
              >
                Content Creator
              </option>
              <option value="User" className="bg-black text-white hover:bg-yellow-600">
                User
              </option>
            </select>
          </div>


          <div className="mt-6">
            <input
              type="text"
              placeholder="Your First School"
              value={firstSchool}
              onChange={(e) => setFirstSchool(e.target.value)}
              className="w-full h-12 bg-transparent border-b border-white text-white text-lg outline-none px-2"
              required
            />
          </div>

          <div className="relative mt-10 w-full">
            <button
              type="submit"
              className="w-full h-12 text-white bg-black border border-[#c8a217] rounded-full hover:bg-[#c8a217] transition"
            >
              REGISTER
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-[#3cbdb1] text-base">
              Already have an account?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
