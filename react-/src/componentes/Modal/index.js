import React from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import Select from "..Select";
import Input from "../Input";
import "./Modal.css";

function Modal({
  cambiarModal = () => {},
  crearEntidad = () => {},
  children = [],
}) {
  return (
    <>
      <div className="modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <ModalHeader cambiarModal={cambiarModal} />
            <div className="modal-body">
              <form id="form">
                <div className="form-row">
                  <div className="col">
                    <Select options={tiposMascota} nombreCampo="Tipo animal" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <Input tipo="text" nombreCampo="nombre" />
                  </div>
                  <div className="col">
                    <Select options={duenos} nombreCampo="dueño" />
                  </div>
                </div>
              </form>
            </div>
            <ModalFooter
              cambiarModal={cambiarModal}
              crearEntidad={crearEntidad}
            />
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}

export default Modal;
