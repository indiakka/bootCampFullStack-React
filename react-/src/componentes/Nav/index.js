import React from "react";
import {Link} from 'react-router-dom'
import Search from "../Search";
import "./Nav.css";
function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        VET Web
      </Link>
      <div className="collapse navbar-collapse" id="navbarColor03">
        <div className="navbar-right" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/index.html" to="/">
                Mascotas<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/veterinarias.html"
                to="/veterinarias"
              >
                Veterinari@s
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/consultas.html"
                to="/consultas"
              >
                Consultas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/duenos.html" to="/duenos">
                Dueñ@s
              </Link>
            </li>
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
}
export default Nav;