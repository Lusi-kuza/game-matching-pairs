import React from "react";
import star from "../../images/star_96096.svg";
import "./options-field.css";
import ProgressBar from "../progress-bar/progress-bar";
import { useDispatch, useSelector } from "react-redux";
import { currentGameSlice } from "../../services/gameStatus/slice";
import LevelGame from "./level-game/level-game";
import Timer from "./timer/timer";

const OptionsField = () => {
  const level = useSelector((store) => store.currentGame.level);
  const time = useSelector((store) => store.currentGame.time);

  const { actions } = currentGameSlice;
  const dispatch = useDispatch();

  const levelUp = () => {
    dispatch(actions.plusLevel());
  };
  // console.log(store);
  return (
    <div className="options_field">
      <div className="options_field_progress_area">
        <img src={star} alt="star" />
        <ProgressBar />
      </div>
      <LevelGame />
      <Timer />
    </div>
  );
};

export default OptionsField;
