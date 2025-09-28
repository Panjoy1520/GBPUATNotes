import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";

function OauthVerifypage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    const checkUserVerification = async () => {
      try {
        const user = await authService.getcurrentUser();
        console.log("Fetched User:", user);

        if (!user) {
          console.warn("No active user session found!");
          setStatus("error");
          return;
        }

        if (user.emailVerification && user.email.endsWith("@gbpuat.ac.in")) {
          setStatus("success");
          setTimeout(() => navigate("/home"), 5000);
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setStatus("error");
      }
    };

    checkUserVerification();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      <div className="bg-neutral-800 shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        {status === "verifying" && (
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Verifying...
            </h2>
            <p className="text-gray-300 text-sm">
              Please wait while we confirm your email.
            </p>
          </div>
        )}

        {status === "success" && (
          <div>
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Email Verified!
            </h2>
            <p className="text-gray-300 text-sm">
              Redirecting you to home in 5 seconds...
            </p>
          </div>
        )}

        {status === "error" && (
          <div>
            <div className="text-5xl mb-4">❌</div>
            <h2 className="text-2xl font-semibold text-red-400 mb-2">
              Verification Failed
            </h2>
            <p className="text-gray-300 text-sm">
              Please log in again with a verified @gbpuat.ac.in email.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OauthVerifypage;
