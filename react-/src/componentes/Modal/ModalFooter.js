import React from "react";
import "./ModalFooter.css";

function ModalFooter({ cambiarModal = () => {}, crearEntidad = () => {} }) {
  return (
    <div classNameName="modal-footer">
      <button
        onClick={cambiarModal}
        id="btn-cerrar"
        type="button"
        classNameName="btn btn-secondary"
        data-dismiss="modal"
      >
        Cerrar
      </button>
      <button
        onClick={crearEntidad}
        id="btn-guardar"
        data-dismiss="modal"
        type="button"
        classNameName="btn btn-primary"
      >
        Guardar
      </button>
    </div>
  );
}

export default ModalFooter;
