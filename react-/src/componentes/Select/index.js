import React from "react";
import "./Select.css";

function Select({
  options = [],
  nombreCampo = "vacio",
  onChange = {},
  placeholder,
  value = "",
}) {
  return (
    <select
      id="tipo"
      classNameName="form-control"
      onChange={onChange}
      name={nombreCampo}
      value={value}
    >
      <option value="">Seleccione {placeholder}</option>
      {options.map(({ valor, etiqueta }, index) => (
        <option key={`${nombreCampo}-${index}-${etiqueta}`} value={valor}>
          {etiqueta}
        </option>
      ))}
    </select>
  );
}

export default Select;
