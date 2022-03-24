import React from "react";
import './alert.css'

function Alert ( props )
{
  return (
    <div className="alert alert-danger alert-dismissible" role="alert">
      <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a intentarlo!.
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={props.alertSwitch}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert