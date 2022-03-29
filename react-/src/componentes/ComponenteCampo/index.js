import React, { useState, useEffect } from "react";
import Select from "../Select";
import Input from "../Input";
import { listarEntidad } from "../../servicio";

const opcionesIniciales = {
  tipo: [
    { valor: "Perro", etiqueta: "Perro" },
    { valor: "Gato", etiqueta: "Gato" },
    { valor: "Pajaro", etiqueta: "Pajaro" },
    { valor: "Otro", etiqueta: "Otro" },
  ],
  diagnostico: [
    { valor: "Leishmaniosis", etiqueta: "Leishmaniosis" },
    { valor: "Epilepsia Idiopática", etiqueta: "Epilepsia Idiopática" },
    { valor: "Moquillo", etiqueta: "Moquillo" },
    { valor: "Parvovirus", etiqueta: "Parvovirus" },
    { valor: "Aspergilosis", etiqueta: "Aspergilosis" },
  ],
};

function ComponenteCampo({
  manejarInput = () => {},
  objeto = {},
  nombreCampo = "",
}) {
  const [options, setOptions] = useState(opcionesIniciales);

 

  switch (nombreCampo) {
    case "tipo":
    case "mascota":
    case "veterinaria":
    case "diagnostico":
    case "dueno":
      return (
        <div className="form-row">
          <Select
            nombreCampo={nombreCampo}
            options={options[nombreCampo]}
            onChange={manejarInput}
            placeholder={nombreCampo}
            value={objeto[nombreCampo]}
          />
        </div>
      );
    case "nombre":
    case "apellido":
    case "dni":
    case "historia":
      return (
        <div className="form-row">
          <Input
            nombreCampo={nombreCampo}
            tipo="text"
            onChange={manejarInput}
            placeholder={nombreCampo}
            value={objeto[nombreCampo]}
          />
        </div>
      );
    default:
      return false;
  }
}

export default ComponenteCampo;
