import React from "react";
import "./ActionsMenu.css";

function ActionMenu({ cambiarModal = () => {}, titulo }) {
  return (
    <div classNameName="actions-menu">
      <h1>{titulo}</h1>
      <div classNameName="actions-menu-content">
        <button
          type="button"
          classNameName="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={cambiarModal}
        >
          Nuevo
        </button>
      </div>
    </div>
  );
}

export default ActionMenu;
