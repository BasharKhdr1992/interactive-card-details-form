import React, { useState } from "react";
import Button from "./Button";
import "./CardForm.css";
import Input from "./Input";
import Label from "./Label";

const keys = ["cardHolder", "cardNumber", "cvc", "month", "year"];

const checkLength = ["cardHolder"];
const checkDate = ["month", "year"];

const CardForm = ({ onComplete }) => {
  const [cardDetails, setCardDetails] = useState({
    cardHolder: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [errors, setErrors] = useState({
    cardHolder: null,
    cardNumber: null,
    month: null,
    year: null,
    cvc: null,
  });
  const handleOnChange = (target) => {
    const key = target.name;
    const value = target.value;
    if (key === "cardNumber") {
      if (value.length === 4 || value.length === 9 || value.length === 14) {
        setCardDetails((prev) => ({
          ...prev,
          [key]: `${value} `,
        }));
        return;
      }
    }
    setCardDetails((prev) => ({ ...prev, [key]: value }));
  };

  const validateInput = (key, value) => {
    value = value.trim();
    if (checkLength.includes(key)) {
      if (value.length === 0) {
        setErrors((prev) => ({ ...prev, [key]: `${key} can't be empty` }));
        return;
      }
    } else if (checkDate.includes(key)) {
      if (value.length === 0) {
        setErrors((prev) => ({ ...prev, [key]: `can't be empty` }));
        return;
      } else if (!/^[0-9]{2}$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          [key]: `Please insert a valid ${key}`,
        }));
        return;
      } else if (key === "month") {
        if (+value > 12 || value < 1) {
          setErrors((prev) => ({
            ...prev,
            [key]: `please insert a valid month`,
          }));
          return;
        }
      }
    } else if (key === "cvc") {
      if (value.length === 0) {
        setErrors((prev) => ({ ...prev, [key]: `can't be empty` }));
        return;
      } else if (!/^[0-9]{3}$/.test(value)) {
        setErrors((prev) => ({ ...prev, [key]: `not a valid cvc` }));
        return;
      }
    } else {
      if (!/^[0-9]{4}\s{1}[0-9]{4}\s{1}[0-9]{4}\s[0-9]{4}$/.test(value)) {
        setErrors((prev) => ({ ...prev, [key]: "Wrong format, numbers only" }));
        return;
      }
    }
    setErrors((prev) => {
      return { ...prev, [key]: null };
    });
  };

  const isFormValid = () => {
    for (let k in errors) {
      if (errors[k] !== null) {
        return false;
      }
    }

    let errorsTemp = {};
    for (let k of keys) {
      if (cardDetails[k].length === 0) {
        errorsTemp = { ...errorsTemp, [k]: `${k} can't be empty` };
      }
    }

    if (Object.keys(errorsTemp).length === 0) {
      return true;
    } else {
      setErrors((prev) => ({ ...prev, ...errorsTemp }));
      return false;
    }
  };

  const submit = () => {
    if (isFormValid()) {
      console.log(cardDetails);
      onComplete();
    }
  };

  return (
    <div className="card-form">
      <Input
        type={"text"}
        value={cardDetails["cardHolder"]}
        name="cardHolder"
        className={"input-block"}
        error={errors["cardHolder"]}
        valid={errors["cardHolder"] === null}
        onBlur={() => {
          validateInput("cardHolder", cardDetails.cardHolder);
        }}
        label="Cardholder Name"
        onChange={handleOnChange}
        placeholder={"e.g. Jane Appleseed"}
      />
      <Input
        type={"text"}
        name="cardNumber"
        value={cardDetails["cardNumber"]}
        onBlur={() => {
          validateInput("cardNumber", cardDetails.cardNumber);
        }}
        className={"input-block"}
        error={errors["cardNumber"]}
        valid={errors["cardNumber"] === null}
        label="Card Number"
        onChange={handleOnChange}
        placeholder={"e.g. 1234 5678 9123 0000"}
      />
      <div className="row">
        <div className="col">
          <Label>Exp. Date (MM/YY)</Label>
          <div className="row">
            <div className="col">
              <Input
                type={"text"}
                name="month"
                value={cardDetails["month"]}
                onBlur={() => {
                  validateInput("month", cardDetails.month);
                }}
                valid={errors["month"] === null}
                error={errors["month"]}
                className={"input-block"}
                onChange={handleOnChange}
                placeholder={"MM"}
              />
            </div>
            <div className="col mb">
              <Input
                type={"text"}
                name="year"
                value={cardDetails["year"]}
                onBlur={() => {
                  validateInput("year", cardDetails.year);
                }}
                valid={errors["year"] === null}
                error={errors["year"]}
                className={"input-block"}
                onChange={handleOnChange}
                placeholder={"YY"}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <Input
            type={"text"}
            name="cvc"
            value={cardDetails["cvc"]}
            onBlur={() => {
              validateInput("cvc", cardDetails.cvc);
            }}
            valid={errors["cvc"] === null}
            error={errors["cvc"]}
            className={"input-block"}
            label="CVC"
            onChange={handleOnChange}
            placeholder={"e.g. 123"}
          />
        </div>
      </div>
      <Button className={"btn-primary btn-block"} onClick={submit}>
        Confirm
      </Button>
    </div>
  );
};

export default CardForm;
