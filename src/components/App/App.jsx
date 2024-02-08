import React, { useEffect } from "react";

import "./App.css";
import CardField from "../card-field/card-field";
import { gameData, shuffleCard } from "../../utils/card-data";
import { useDispatch, useSelector } from "react-redux";
import { cardFieldSlice } from "../../services/cardField/slice";

function App() {
  const dispatch = useDispatch();
  const cardField = useSelector(
    (store) => store.cardField.cardField.length > 0
  );

  const { actions } = cardFieldSlice;

  useEffect(() => {
    dispatch(actions.createGame(shuffleCard(gameData)));
  }, []);

  return <div className="App">{cardField && <CardField />}</div>;
}

export default App;
