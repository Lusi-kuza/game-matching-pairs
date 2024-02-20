import React from "react";

import "./progress-bar.css";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const totalSteps = useSelector((store) => store.currentGame.totalSteps);
  const stepsLevel = useSelector((store) => store.currentGame.stepsLevel);

  const progressBarValue = (stepsLevel / totalSteps) * 100;

  const updateProgressBar = (value = 0) => {
    return { width: value + "%" };
  };

  return (
    <div className="progress_bar">
      <div
        className="progress_bar_inner"
        style={updateProgressBar(progressBarValue)}
      ></div>
    </div>
  );
};

export default ProgressBar;
