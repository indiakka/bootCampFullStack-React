import React from "react";
import Select from "../Select";
import ModalHeader from "./ModalHeader";

function Modal() {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <ModalHeader />
          <div className="modal-body">
            <form id="form">
              <Select />
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre"
                  />
                </div>
                <div className="col">
                  <select className="form-control" id="dueno">
                    <option>Dueño</option>
                    <option>Esteban</option>
                    <option>Julián</option>
                    <option>Jhon</option>
                    <option>Felix</option>
                    <option>Camilo</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
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
        </div>
      </div>
    </div>
  );
}

export default Modal;
