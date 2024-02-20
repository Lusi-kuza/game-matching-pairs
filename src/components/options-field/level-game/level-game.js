import React from "react";
import "./level-game.css";
import { useSelector } from "react-redux";

const LevelGame = () => {
  const level = useSelector((store) => store.currentGame.level);

  return (
    <div className="level_area">
      <p>Ваш уровень</p>
      <p>{level}</p>
    </div>
  );
};

export default LevelGame;
