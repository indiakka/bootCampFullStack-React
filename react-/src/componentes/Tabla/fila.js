import React from "react";
import BotonAccion from "../BotonAccion";
import "./Fila.css";

function Fila({
  index,
  entidad,
  editarEntidad = () => {},
  eliminarEntidad = () => {},
}) {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{entidad.tipo}</td>
      <td>{entidad.nombre}</td>
      <td>{entidad.dueno}</td>
      <td>
        <div classNameName="btn-group" role="group" aria-label="Basic example">
          <BotonAccion tipo="editar" onclick={editarEntidad} index={index} />
          <BotonAccion tipo="eliminar" onclick={(e) => eliminarEntidad(e, index)} />
        </div>
      </td>
    </tr>
  );
}

export default Fila;
