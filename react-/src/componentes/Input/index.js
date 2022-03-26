import React from "react";
import "./Input.css";

function Input ( {
  tipo = "text",
  nombreCampo,
  onInput = () => { },
  placeholder,
} )
{
  return (
    <input //input de html
      type={tipo}
      name={nombreCampo}
      class="form-control"
      placeholder={placeholder}
      onInput={onInput} //input de js
    />
  );
}

export default Input;
