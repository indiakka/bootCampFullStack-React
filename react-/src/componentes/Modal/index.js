import React from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import Select from "../Select";
import Input from "../Input";
import "./Modal.css";

const tiposMascota = [{ valor: "Perro", etiqueta: "Perro" }];
const duenos = [{ valor: "Felix", etiqueta: "Felix" }];

function Modal({
  cambiarModal = () => {},
  manejarInput = () => {},
  crearEntidad = () => {},
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
                    <Select
                      nombreCampo="tipo"
                      options={tiposMascota}
                      onChange={manejarInput}
                      placeholder="Tipo Animal"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <Input
                      nombreCampo="nombre"
                      tipo="text"
                      onInput={manejarInput}
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="col">
                    <Select
                      placeholder="dueño"
                      options={duenos}
                      onChange={manejarInput}
                      nombreCampo="Dueno"
                    />
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
