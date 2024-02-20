import React, { useEffect } from "react";

import "./App.css";
import CardField from "../card-field/card-field";
import { gameData, shuffleCard } from "../../utils/card-data";
import { useDispatch } from "react-redux";
import { cardFieldSlice } from "../../services/cardField/slice";
import OptionsField from "../options-field/options-field";
import { currentGameSlice } from "../../services/gameStatus/slice";

const App = () => {
  const dispatch = useDispatch();

  const cardFieldActions = cardFieldSlice.actions;
  const currentGameActions = currentGameSlice.actions;

  useEffect(() => {
    const initialData = shuffleCard(gameData);
    dispatch(cardFieldActions.createGame(initialData));
    dispatch(currentGameActions.setTotalSteps(initialData.length / 2));
  }, []);

  return (
    <div className="App">
      <main className="main_field">
        <OptionsField />
        <CardField />
      </main>
    </div>
  );
};

export default App;
