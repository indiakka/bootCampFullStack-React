import React, { Component } from "react";
import Nav from "./componentes/Nav";
import ActionMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";
import { listarEntidad } from "./servicio";

class Pagina extends Component() {
  constructor(props) {
    super(props); //llama a todos los métodos del componente
    this.state = { mostarModal: false, entidades: [] };
  }

  cambiarModal = () => {
    this.setState({ mostarModal: !this.state.mostarModal });
  };

  listar = async() =>
  {
    const entidades = await listarEntidad()
  this.setState({entidades})
  };
  // código del componente

  // render siempre debe ir el último
  render() {
    //render = interpreta el código para mostrar
    const { titulo = "Página sin título" } = this.props;
    return (
      <>
        <div className="container">
          <Nav />
          <ActionMenu cambiarModal={this.cambiarModal} titulo={titulo} />
          <Tabla />
          {this.state.mostarModal && <Modal cambiarModal={this.cambiarModal} />}
        </div>
      </>
    );
  }
}

export default Pagina;
