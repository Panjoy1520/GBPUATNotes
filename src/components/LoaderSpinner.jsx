import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/90 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-neutral-700 border-t-orange-500 rounded-full animate-spin"></div>
          <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-t-orange-300 rounded-full animate-spin animation-delay-150"></div>
        </div>
        <p className="mt-4 text-white text-lg font-medium animate-pulse">
          Loading your experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;