import React from "react";
//import { Link } from "react-router-dom";
import Search from "../Search";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="navbar-brand" to="/">
        Veterinaria
      </div>
      <div className="navbar-right" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <div className="nav-div" to="/">
              Mascotas<span className="sr-only">(current)</span>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-div" to="/veterinarias">
              Veterinari@s
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-div" to="/consultas">
              Consultas
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-div" to="/duenos">
              Dueños
            </div>
          </li>
        </ul>
        <Search />
      </div>
    </nav>
  );
}

export default Nav;
