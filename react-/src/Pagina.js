import React from "react";
import Nav from "./componentes/Nav";
import ActionMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";

function Pagina() {
  return (
    <>
      <div className="container">
        <Nav />
        <ActionMenu />
        <Tabla />
        <Modal />
      </div>
    </>
  );
}

export default Pagina.js;
