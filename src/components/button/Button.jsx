import React from "react";
import "./button.css";

function Button({ getMode, isSingleMode }) {
  return (
    <div className="btns">
      <button
        onClick={() => getMode(false)}
        className={`btn ${!isSingleMode && "btn--active"}`}
      >
        Multiple
      </button>
      <button
        onClick={() => getMode(true)}
        className={`btn ${isSingleMode && "btn--active"}`}
      >
        Single
      </button>
    </div>
  );
}

export default Button;
