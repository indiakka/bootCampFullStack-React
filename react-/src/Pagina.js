import React, { Component } from "react";
import Nav from "./componentes/Nav";
import ActionMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";

class Pagina extends Component() {
  constructor(props) {
    super(props); //llama a todos los métodos del componente
    this.state = { mostarModal: false };
  }

  cambiarModal = () => {
    this.setState({ mostarModal: !this.state.mostarModal });
  };
  // código del componente

  // render debe ir el último
  render() {
    //render = interpreta el código para mostrar
    return (
      <>
        <div className="container">
          <Nav />
          <ActionMenu cambiarModal={this.cambiarModal} />
          <Tabla />
          {this.state.mostarModal && <Modal cambiarModal={this.cambiarModal} />}
        </div>
      </>
    );
  }
}

export default Pagina;
