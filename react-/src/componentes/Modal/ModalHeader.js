import React from "react";
import "./ModalHeader.css";

function ModalHeader({ cambiarModal = () => {} }) {
  return (
    <div classNameName="modal-header">
      <h5 classNameName="modal-title" id="exampleModalLongTitle">
        Nueva Mascota
      </h5>
      <button
        type="button"
        classNameName="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={cambiarModal}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default ModalHeader;
