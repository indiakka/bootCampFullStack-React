import React from "react";
import Select from "../Select";
import ModalHeader from "./ModalHeader";
import "./Modal.css";

const tiposMascota = [
                      {valor:'Perro', etiqueta:'Perro'},
                      {valor:'Gato', etiqueta:'Gato'},
                      {valor:'Pájaro', etiqueta:'Pájaro'},
                      {valor:'Otro', etiqueta:'Otro'}
                    ]
const duenos =[
                      {valor:'Esteban', etiqueta:'Esteban'},
                      {valor:'Julián', etiqueta:'Julián'},
                      {valor:'Jhon', etiqueta:'Jhon'},
                      {valor: 'Felix', etiqueta: 'Felix' },
                      {valor: 'Camilo', etiqueta: 'Camilo' }
                    ]

function Modal() {
  return (
    <>
      <div className="modal ">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <ModalHeader />
            <div className="modal-body">
              <form id="form">
                <div className="form-row">
                  <div className="col">
                    <Select options={tiposMascota}
                    nombreCampo='Tipo animal'/>                
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <select className="form-control" id="dueno">
                      <option>Esteban</option>
                      <option>Julián</option>
                      <option>Jhon</option>
                      <option>Felix</option>
                      <option>Camilo</option>
                    </select>
                    <Select options={duenos}
                    nombreCampo='Dueño'/> 
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
      <div class="modal-backdrop fade show"></div>
    </>
  );
}

export default Modal;
