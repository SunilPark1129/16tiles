import "./tile.css";
import React from "react";

function Tile({ isTarget, getAnswer, style }) {
  function clickHandler() {
    getAnswer(isTarget);
  }

  return <div style={style} className={`tile`} onClick={clickHandler}></div>;
}

export default Tile;
