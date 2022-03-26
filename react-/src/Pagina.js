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

  listar = async () => {
    const { entidad } = this.props;
    const entidades = await listarEntidad({ entidad });
    this.setState({ entidades });
  };

  componentDidMount() {
    debugger;
    this.listar();
  }

  componentWillMount() {
    debugger;
  }

  componentWillReciveProps() {
    debugger;
  }

  shouldComponentUpdate() {
    debugger;
    return true;
  }

  componentWillUpdate() {
    debugger;
  }

  componentDidUpdate() {
    debugger;
  }

  componentWillUnmount() {
    debugger;
  }

  // código del componente

  // render siempre debe ir el último
  //render = interpreta el código para mostrar
  render() {
    const { titulo = "Página sin título" } = this.props;
    return (
      <>
        <div className="container">
          <Nav />
          <ActionMenu cambiarModal={this.cambiarModal} titulo={titulo} />
          <Tabla entidades={this.state.entidades} />
          {this.state.mostarModal && <Modal cambiarModal={this.cambiarModal} />}
        </div>
      </>
    );
  }
}

export default Pagina;
