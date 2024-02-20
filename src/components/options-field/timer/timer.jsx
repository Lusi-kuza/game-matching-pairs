import React from "react";
import "./timer.css";
import { useDispatch, useSelector } from "react-redux";
import { timerSlice } from "../../../services/timer/slice";

const Timer = () => {
  // const store = useSelector((store) => store.timer);
  // console.log(store);
  const seconds = useSelector((store) => store.timer.seconds);
  const minutes = useSelector((store) => store.timer.minutes);

  const timerSliceActions = timerSlice.actions;
  const dispatch = useDispatch();

  const startTimer = () => {
    dispatch(timerSliceActions.updateTimer());
  };
  // console.log(seconds);
  // console.log(minutes);
  return (
    <div className="time_area" onClick={startTimer}>
      <p className="timer">{`${minutes} : ${seconds}`}</p>
    </div>
  );
};

export default Timer;
