import React from "react";
import Encabezado from "./Encabezado";
import Fila from "./Fila";
import "./Tabla.css";

function Tabla({
  entidades = [],
  editarEntidad = () => {},
  eliminarEntidad = () => {},
}) {
  const columnas = entidades.length > 0 ? Object.keys(entidades[0]) : [];

  return (
    <table className="table table-stripped table-hover">
      <Encabezado columnas={columnas} />
      <tbody id="lista-mascotas">
        {entidades.map((entidad, index) => (
          <Fila
            key={`fila-${index}`}
            entidad={entidad}
            index={index}
            editarEntidad={editarEntidad}
            eliminarEntidad={eliminarEntidad}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
