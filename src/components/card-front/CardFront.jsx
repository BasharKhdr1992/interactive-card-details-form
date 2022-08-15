import React from "react";
import "./CardFront.css";
import cardLogo from "../../images/card-logo.svg";
import cardFrontBg from "../../images/bg-card-front.png";
const CardFront = () => {
  return (
    <div className="card-front">
      <img
        src={cardFrontBg}
        className="card-front-bg"
        alt="card front back ground"
      />
      <div className="overlay-front">
        <div className="logo-container">
          <img src={cardLogo} alt="card-logo" className="logo" />
        </div>
        <div className="card-details">
          <p className="card-number">1234 5678 9123 0000</p>
          <div className="card-holder-exp-date">
            <p className="card-holder">Jane Appleseed</p>
            <p className="exp-date">00/00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
