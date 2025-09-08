import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import authService from "../appwrite/auth";

function Verifypage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying"); 

  const userId = params.get("userId");
  const secret = params.get("secret");

  useEffect(() => {
    async function verifyEmail() {
      try {
        if (userId && secret) {
          await authService.completeVerification(userId, secret);
          setStatus("success");

          setTimeout(() => {
            navigate("/home");
          }, 10000); //TODO: change the set timeout
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Verification failed:", error);
        setStatus("error");
      }
    }
    verifyEmail();
  }, [userId, secret, navigate]);

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
              Redirecting you to home in 10 seconds...
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
              Invalid or expired link. Please try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Verifypage;
