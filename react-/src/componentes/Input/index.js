import React from "react";
import "./Input.css";

function Input({
  tipo = "text",
  nombreCampo,
  onInput = () => {},
  placeholder,
  value 
}) {
  return (
    <input //input de html
      type={tipo}
      name={nombreCampo}
      class="form-control"
      placeholder={placeholder}
      onInput={onInput} //input de js
      value={value}
    />
  );
}

export default Input;
