import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EmailVerificationPage = () => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [verificationMessage, setVerificationMessage] = useState("");

  const navigate = useNavigate();

  // Function to extract token from the URL
  const getTokenFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("token");
  };

  // Email verification function
  const handleEmailVerification = useCallback(async () => {
    const token = getTokenFromUrl();
    if (!token) {
      toast.error("No verification token found in the URL.");
      setVerificationMessage("No verification token found.");
      setIsVerifying(false);
      return;
    }

    try {
      setVerificationMessage("Verifying your email...");
      // API call to verify the email
      const verificationResponse = await axios.get(
        `http://localhost:4000/verify-email?token=${token}`
      );
      //   console.log(verificationResponse.data);
      if (verificationResponse.data.success) {
        toast.success("Email verified successfully! Redirecting to login.");
        setVerificationMessage(
          "Email verified successfully! Redirecting to login."
        );
        setTimeout(() => {
          navigate("/login");
        }, 3000); // Redirect after 3 seconds
      } else {
        toast.error("Email verification failed. Please try again.");
        setVerificationMessage("Email verification failed. Please try again.");
      }
    } catch (error) {
      toast.error("Email verification failed. Please try again.");
      setVerificationMessage("An error occurred during verification.");
      console.error("Error during email verification", error);
    } finally {
      setIsVerifying(false);
    }
  }, [navigate]);

  // Automatically trigger email verification when token is present in the URL
  useEffect(() => {
    handleEmailVerification();
  }, [handleEmailVerification]);

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <Toaster />
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
        <h2 className="text-2xl font-bold mb-6">Email Verification</h2>
        <div className="mt-6 text-white">
          {isVerifying ? (
            <p>Verifying your email...</p>
          ) : (
            <p>{verificationMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
