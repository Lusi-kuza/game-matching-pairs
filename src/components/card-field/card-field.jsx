import React, { useEffect } from "react";
import "./card-field.css";
import Card from "../card/card";
import { useDispatch, useSelector } from "react-redux";
import { cardFieldSlice } from "../../services/cardField/slice";

const CardField = () => {
  const cardField = useSelector((store) => store.cardField.cardField);
  const matchingPair = useSelector((store) => store.cardField.matchingPair);
  const dispatch = useDispatch();

  const { actions } = cardFieldSlice;

  // console.log(cardField);
  // console.log(matchingPair);

  useEffect(() => {
    if (matchingPair.length < 2) return;
    if (matchingPair.length === 2) {
      // console.log("intro");
      // console.log(matchingPair[0].value);
      // console.log(matchingPair[1].value);
      if (matchingPair[0].value === matchingPair[1].value) {
        // console.log("reset");
      } else {
        setTimeout(() => {
          dispatch(actions.changeStatusCard(matchingPair[0].id));
          dispatch(actions.changeStatusCard(matchingPair[1].id));
        }, 500);
      }

      dispatch(actions.resetMatchingPair());
    }
  }, [matchingPair]);

  return (
    <div className="card_field">
      {cardField.map((el) => (
        <Card key={el.id} card={el} />
      ))}
    </div>
  );
};

export default CardField;
