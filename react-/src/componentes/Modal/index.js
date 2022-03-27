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
  objeto = {},
}) {
  return (
    <>
      <div classNameName="modal">
        <div classNameName="modal-dialog modal-dialog-centered">
          <div classNameName="modal-content">
            <ModalHeader cambiarModal={cambiarModal} />
            <div classNameName="modal-body">
              <form id="form">
                <div classNameName="form-row">
                  <div classNameName="col">
                    <Select
                      nombreCampo="tipo"
                      options={tiposMascota}
                      onChange={manejarInput}
                      placeholder="Tipo Animal"
                      value={objeto.tipo}
                    />
                  </div>
                </div>
                <div classNameName="form-row">
                  <div classNameName="col">
                    <Input
                      nombreCampo="nombre"
                      tipo="text"
                      onInput={manejarInput}
                      placeholder="Nombre"
                      value={objeto.nombre}
                    />
                  </div>
                  <div classNameName="col">
                    <Select
                      placeholder="dueño"
                      options={duenos}
                      onChange={manejarInput}
                      nombreCampo="Dueno"
                      value={objeto.dueno}
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
      <div classNameName="modal-backdrop fade show"></div>
    </>
  );
}

export default Modal;
