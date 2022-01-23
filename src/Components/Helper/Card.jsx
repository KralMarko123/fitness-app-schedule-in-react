import React from "react";
import "./Card.css";

const Card = ({ name, sets, reps }) => {
  return (
    <div className="card">
      <div className="card__row">
        <div className="card__cell">Exercise</div>
        <div className="card__cell">Sets</div>
        <div className="card__cell">Reps</div>
      </div>
      <div className="card__row second__row">
        <div className="card__cell">{name}</div>
        <div className="card__cell">{sets}</div>
        <div className="card__cell">{reps}</div>
      </div>
    </div>
  );
};

export default Card;
