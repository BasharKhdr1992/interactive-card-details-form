import React from "react";
import "./Input.css";
import Label from "./Label";
import Error from "./Error";
const Input = ({
  type,
  name,
  value,
  valid,
  error,
  onChange,
  onBlur,
  placeholder,
  label,
  className,
}) => {
  return (
    <div className="form-input">
      {label && <Label>{label}</Label>}
      <input
        type={type}
        name={name}
        className={`input ${className} ${!valid ? "input-invalid" : undefined}`}
        value={value}
        onBlur={(e) => onBlur(e.target)}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target)}
      />
      {!valid && error && <Error>{error}</Error>}
    </div>
  );
};

export default Input;
