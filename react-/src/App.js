import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./componentes/Nav";

import "./App.css";
import Pagina from "./Pagina";

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route exact path="/">
          <Pagina titulo="Mascotas" entidad="mascotas" />
        </Route>
        <Route path="/veterinarias">
          <Pagina titulo="Veterinari@s" entidad="veterinarias" />
        </Route>
        <Route path="/duenos">
          <Pagina titulo="Dueñ@s" entidad="duenos" />
        </Route>
        <Route path="/consultas">
          <Pagina titulo="Consultas" entidad="consultas" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
