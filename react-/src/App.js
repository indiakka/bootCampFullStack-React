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
          element={() => <Pagina titulo="Mascotas" entidad="mascotas" />}
        />
        <Route
          path="/veterinarias"
          element={() => (
            <Pagina titulo="Veterinari@s" entidad="veterinarias" />
          )}
        />
        <Route
          path="/duenos"
          element={() => <Pagina titulo="Dueñ@s" entidad="duenos" />}
        />
        <Route
          path="/consultas"
          element={() => <Pagina titulo="Consultas" entidad="consultas" />}
        />
      </Routes>
    </div>
  );
}

export default App;
