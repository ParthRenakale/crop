import React, { useState} from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      await axios.post(
        `http://localhost:4000/reset-password`,
        { token, newPassword }
      );

      setSuccessMessage("Password reset successful");

      // Redirect to login page after a successful reset
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Error resetting password"
      );
    }
  };

  return (
   

    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="relative w-[400px] h-[470px] bg-black rounded-[50px_5px] flex items-center justify-center overflow-hidden mt-[20px]"
      >
        <div className="absolute w-[130%] h-[130%] bg-[conic-gradient(transparent,transparent,transparent,#3cbdb1)] animate-rotate_border"></div>
        <div className="absolute w-[130%] h-[130%] bg-[conic-gradient(transparent,transparent,transparent,#c8a217)] animate-rotate_border animate-delay-[-3s]"></div>

        <div className="absolute bg-black rounded-[50px_5px] inset-[5px] p-[50px_40px] z-10 text-white">
          <h2 className="text-2xl font-semibold text-center">Reset Password</h2>

          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          {successMessage && (
            <p className="text-green-500 mt-2">{successMessage}</p>
          )}

          <div className="mt-[40px] relative flex items-center justify-start">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-[95%] h-[30px] bg-transparent border-b border-white outline-none text-white text-[20px] pl-[10px]"
              autoComplete="off"
              required
            />
          </div>

          <div className="mt-[40px] relative flex items-center justify-start">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Reset Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
