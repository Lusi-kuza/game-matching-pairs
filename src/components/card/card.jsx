import React from "react";
import "./card.css";
import { useDispatch } from "react-redux";
import { cardFieldSlice } from "../../services/cardField/slice";

const Card = React.memo(({ card }) => {
  const dispatch = useDispatch();

  const { actions } = cardFieldSlice;

  const openCard = (card) => {
    dispatch(actions.openCard(card));
  };

  return (
    <>
      {card.isOpen && <div className="card">{card.value}</div>}
      {!card.isOpen && (
        <div
          className="card card_isClosed"
          onClick={() => openCard(card)}
        ></div>
      )}
    </>
  );
});

export default Card;
