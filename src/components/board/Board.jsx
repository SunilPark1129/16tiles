import React from "react";
import "./board.css";

function Board({ score, tileColor }) {
  return (
    <div className="board">
      {tileColor && (
        <>
          <div
            className={`${
              score.highest !== 0 &&
              score.highest <= score.current &&
              "board--highestscore"
            }`}
          >
            Level: <span>{score.current}</span>
          </div>
          <div>Record: {score.highest}</div>
          <div>Opacity: {((1 - tileColor[3]) * 100).toFixed(2)}%</div>
        </>
      )}
    </div>
  );
}

export default Board;
