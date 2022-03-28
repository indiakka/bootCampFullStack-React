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

  useEffect(() => {
    const obtenerOptionsBackend = async () => {
      const mascotasPromise = listarEntidad({ entidad: "mascotas" });
      const veterinariasPromise = listarEntidad({ entidad: "veterinarias" });
      const duenosPromise = listarEntidad({ entidad: "duenos" });
      /* no ponemos await en las anteriores porque habría que esperar 
      a que se hagan una a una desde la 1ª. Para hacerlo todo al mismo tiempo
      creamos el let siguiente  */
      let [mascota, veterinaria, dueno] = await Promise.all([
        mascotasPromise,
        veterinariasPromise,
        duenosPromise,
      ]);

      mascota = mascota.map((_mascota, index) => ({
        valor: index,
        etiqueta: `${_mascota.nombre}(${_mascota.tipo})`,
      }));
      veterinaria = veterinaria.map((_veterinaria, index) => ({
        valor: index,
        etiqueta: `${_veterinaria.nombre}${_veterinaria.apellido}`,
      }));
      dueno = dueno.map((_dueno, index) => ({
        valor: index,
        etiqueta: `${_dueno.nombre}${_dueno.apellido}`,
      }));
      const nuevasOpciones = { ...options, mascota, veterinaria, dueno };
      setOptions(nuevasOpciones);
    };
    obtenerOptionsBackend();
  }, []);

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
