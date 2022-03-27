import React from "react";
import BotonAccion from "../BotonAccion";
import "./Fila.css";

function Fila({
  index,
  entidad,
  editarEntidad = () => {},
}) {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{entidad.tipo}</td>
      <td>{entidad.nombre}</td>
      <td>{entidad.dueno}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <BotonAccion tipo="editar" onclick={editarEntidad} index={index} />
        </div>
      </td>
    </tr>
  );
}

export default Fila;
