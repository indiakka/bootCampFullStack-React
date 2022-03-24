import React from "react";
import classNames from "classnames";
import { FontAwesomeICon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

function BotonAccion({ tipo }) {
  return (
    <button
      type="button"
      className={classNames("btn", {
        "btn-info": tipo === "editar",
        "btn-danger": tipo === "eliminar",
      })}
    >
      {tipo === "editar" && <FontAwesomeICon icon={faEdit} />}
      {tipo === "eliminar" && <FontAwesomeICon icon={faTrashAlt} />}
    </button>
  );
}
export default BotonAccion;
