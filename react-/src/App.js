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
        <Route
          exact
          path="/"
          element={<Pagina titulo="Mascotas" entidad="mascotas" />}
        ></Route>
        <Route
          exact
          path="/veterinarias"
          element={<Pagina titulo="Veterinari@s" entidad="veterinarias" />}
        ></Route>
        <Route
          exact
          path="/duenos"
          element={<Pagina titulo="Dueñ@s" entidad="duenos" />}
        ></Route>
        <Route
          exact
          path="/consultas"
          element={<Pagina titulo="Consultas" entidad="consultas" />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
