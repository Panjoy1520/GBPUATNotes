import React, { useEffect } from "react";

const Popup = ({ message, show, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (

    // TODO:can add a failure popup here only instead of showing above the form 
    <div className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
      <p>{message}</p>
      <div className="w-full h-1 bg-green-800 mt-2 relative overflow-hidden rounded">
        <div className="absolute left-0 top-0 h-full bg-white animate-timer"></div>
      </div>
    </div>
  );
};

export default Popup;
