import React from "react";
import "./Complete.css";
import complete from "../../images/icon-complete.svg";
import Button from "../card-details-form/Button";
const Complete = () => {
  return (
    <div className="complete">
      <img src={complete} alt="complete" />
      <h1 className="title">Thank you! </h1>
      <p className="message">We've added your card details</p>
      <Button className="btn-primary btn-block">Continue</Button>
    </div>
  );
};

export default Complete;
