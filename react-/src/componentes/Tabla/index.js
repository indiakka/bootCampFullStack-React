import React, { useState } from "react";
import Encabezado from "./Encabezado";
import Fila from "./Fila";
import './Tabla.css'

function Tabla() {
  const [mascotas, setMascotas] = useState([
    { tipo: "Perro", nombre: "Trosky0", dueno: "Camilo" },
    { tipo: "Gato", nombre: "Link", dueno: "John" },
  ]);

  const columnas = mascotas.length > 0 ? Object.keys(mascotas[0]) : [];

  return (
    <table className="table table-stripped table-hover">
      <Encabezado columnas={columnas} />
      <tbody id="lista-mascotas">
        {mascotas.map((mascota, index) => (
          <Fila mascota={mascota} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
