import React from "react";
import { useNavigate } from "react-router-dom";
import { Mail, AlertTriangle } from "lucide-react"; // added AlertTriangle

function EmailPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      <div className="bg-neutral-800 shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        {/* Icon */}
        <Mail className="mx-auto text-orange-400 w-12 h-12 mb-4" />

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-white mb-2">
          Verify Your Email
        </h2>

        {/* Message */}
        <p className="text-gray-300 text-sm mb-4">
          We have sent a verification link to your email address. <br />
          Please click the link to open your Gmail and continue.
        </p>

        {/* Alert Section */}
        <div className="flex items-start p-3 mb-6 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-left">
          <AlertTriangle className="w-5 h-5 mr-2 mt-[2px] flex-shrink-0" />
          <span>
            It may take <strong>5–10 minutes</strong> for the verification email to reach
            your inbox. Please be patient and check your spam folder if you don't see it.
          </span>
        </div>

        {/* Go to Email Button */}
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition mb-4"
        >
          Open Gmail
        </a>

        {/* Back to Login */}
        <button
          onClick={() => navigate("/home")}
          className="text-sm text-gray-400 hover:underline"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default EmailPage;
