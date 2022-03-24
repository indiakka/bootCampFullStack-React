import "./ActionsMenu.css";
import Alert from "../Alert";
import React, { useState } from "react";

function ActionMenu() {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const alertSwitch = () => setMostrarAlerta(!mostrarAlerta)
  return (
    <div className="actions-menu">
      <h1>Mascotas</h1>
      <div className="actions-menu-content">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={alertSwitch}
        >
          Nuevo
        </button>
        {mostrarAlerta && <Alert alertSwitch={alertSwitch} />}
      </div>
    </div>
  );
}

export default ActionMenu;
