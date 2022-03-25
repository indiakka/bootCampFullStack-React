import React from "react";
import "./ModalFooter.css";

function ModalFooter({cambiarModal = () => {}}) {
  return (
    <div className="modal-footer">
      <button
        onClick={cambiarModal}
        id="btn-cerrar"
        type="button"
        className="btn btn-secondary"
        data-dismiss="modal"
      >
        Cerrar
      </button>
      <button
        id="btn-guardar"
        data-dismiss="modal"
        type="button"
        className="btn btn-primary"
      >
        Guardar
      </button>
    </div>
  );
}

export default ModalFooter;
