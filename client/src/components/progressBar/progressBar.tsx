import React from "react";
import "./ProgressBar.css";

interface ProgressBarProps {
  current: number;
  total: number;
}

const progressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = Math.floor((current / total) * 100);

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-inner"
        style={{ width: `${progress + 10}%` }}
      >
        {progress + 10}%
      </div>
    </div>
  );
};

export default progressBar;
