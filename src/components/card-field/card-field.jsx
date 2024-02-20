import React, { useEffect } from "react";
import "./card-field.css";
import Card from "../card/card";
import { useDispatch, useSelector } from "react-redux";
import { cardFieldSlice } from "../../services/cardField/slice";
import { currentGameSlice } from "../../services/gameStatus/slice";

const CardField = () => {
  const cardField = useSelector((store) => store.cardField.cardField);
  const matchingPair = useSelector((store) => store.cardField.matchingPair);
  const dispatch = useDispatch();

  const cardFieldActions = cardFieldSlice.actions;
  const currentGameActions = currentGameSlice.actions;

  // console.log(cardField);
  // console.log(matchingPair);

  useEffect(() => {
    if (matchingPair.length < 2) return;
    if (matchingPair.length === 2) {
      // console.log("intro");
      // console.log(matchingPair[0].value);
      // console.log(matchingPair[1].value);
      if (matchingPair[0].value === matchingPair[1].value) {
        // console.log("matching");
        dispatch(currentGameActions.plusStep());
      } else {
        setTimeout(() => {
          dispatch(cardFieldActions.changeStatusCard(matchingPair[0].id));
          dispatch(cardFieldActions.changeStatusCard(matchingPair[1].id));
        }, 500);
      }

      dispatch(cardFieldActions.resetMatchingPair());
    }
  }, [matchingPair]);

  return (
    <div className="card_field">
      {cardField.length > 0 &&
        cardField.map((el) => <Card key={el.id} card={el} />)}
    </div>
  );
};

export default CardField;
