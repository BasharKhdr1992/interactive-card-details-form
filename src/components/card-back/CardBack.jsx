import React from "react";
import "./CardBack.css";
import cardBackBg from "../../images/bg-card-back.png";

const CardBack = () => {
  return (
    <div className="card-back">
      <img
        src={cardBackBg}
        className="card-back-bg"
        alt="card back background"
      />
      <div className="overlay-back">
        <p className="cvc">000</p>
      </div>
    </div>
  );
};

export default CardBack;
