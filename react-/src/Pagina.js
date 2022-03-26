import React, { Component } from "react";
import Nav from "./componentes/Nav";
import ActionMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";
import { listarEntidad, crearEditarEntidad } from "./servicio";

class Pagina extends Component() {
  constructor(props) {
    super(props); //llama a todos los métodos del componente
    this.state = {
      mostarModal: false,
      entidades: [],
      objeto: {},
    };
  }

  cambiarModal = () => {
    this.setState({ mostarModal: !this.state.mostarModal });
  };

  listar = async () => {
    const { entidad } = this.props;
    const entidades = await listarEntidad({ entidad });
    this.setState({ entidades });
  };

  manejarInput = (evento) => {
    const {
      target: { value, name },
    } = evento;
    let { objeto } = this.state.objeto;
    objeto = { ...objeto, [name]: value };
    this.setState({ objeto });
  }; //... copia de objeto del constructor

  crearEntidad = async () => {
    const { entidad } = this.props;
    let { objeto } = this.state;
    const method = "POST";
     await crearEditarEntidad({ entidad, objeto, method });
   this.cambiarModal()
    this.listar();
  };

  componentDidMount() {
    this.listar();
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
          {this.state.mostarModal && (
            <Modal
              cambiarModal={this.cambiarModal}
              manejarInput={this.manejarInput}
              crearEntidad={this.crearEntidad}
            />
          )}
        </div>
      </>
    );
  }
}

export default Pagina;
