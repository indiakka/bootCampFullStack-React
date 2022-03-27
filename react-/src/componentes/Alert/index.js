import React from "react";
import "./Alert.css";

function Alert(alertSwitch = () => {}) {
  return (
    <div classNameName="alert alert-danger alert-dismissible" role="alert">
      <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a intentarlo!.
      <button
        type="button"
        classNameName="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={alertSwitch}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
