import React from "react";
import './LoadingSpinner.css'

const LoadingSpinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <p className="loading-content">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
