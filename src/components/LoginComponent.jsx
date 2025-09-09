import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import { initAuth, loginUser, selectAuth,signupUser } from "../features/auth/authSlice";

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error, isAuthenticated, user } = useSelector(selectAuth);

  const [isLogin, setIsLogin] = useState(true);
  const [showPopup, setShowPopup] = useState(false);


  
  const onSubmit = (data) => {
    if (isLogin) {
      
      dispatch(loginUser({ email: data.email, password: data.password }))
        .unwrap()
        .then(() => {
          
          navigate("/home");
        })
        .catch((err) => {
          
          console.error("Login failed:", err);
        });
    } else {
      
      dispatch(signupUser({ email: data.email, password: data.password }))
        .unwrap()
        .then(() => {
          
          setShowPopup(true);
         
          setIsLogin(true);
        })
        .catch((err) => {
         
          console.error("Signup failed:", err);
        });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      <div className="bg-neutral-800 shadow-lg rounded-xl p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          {isLogin ? "Login" : "Signup"}
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-center mb-4 text-sm">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid Email",
                },
              })}
              className="mt-1 block w-full border border-neutral-600 bg-neutral-700 text-white rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-neutral-300">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
              className="mt-1 block w-full border border-neutral-600 bg-neutral-700 text-white rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-neutral-300">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value, formValues) =>
                    value === formValues.password || "Passwords do not match",
                })}
                className="mt-1 block w-full border border-neutral-600 bg-neutral-700 text-white rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
            >
              {status === "loading"
                ? "Processing..."
                : isLogin
                ? "Login"
                : "Signup"}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-neutral-600" />
          <span className="px-2 text-neutral-300 text-sm">or</span>
          <hr className="flex-1 border-neutral-600" />
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center space-x-2 border border-neutral-600 bg-neutral-700 py-2 px-4 rounded-md hover:bg-neutral-600 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-white">Sign in with Google</span>
        </button>

        {/* Toggle Button */}
        <p className="mt-6 text-center text-sm text-gray-300">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-400 hover:underline"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>

      {/* Popup for email verification */}
      <Popup
        message="Verification Email has been sent..."
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
}

export default LoginComponent;
