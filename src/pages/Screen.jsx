import "./screen.css";
import React, { useEffect, useState } from "react";
import Tile from "../components/Tile";

const tiles = new Array(16).fill(false);

function Screen() {
  const [randomTile, setRandomTile] = useState(null);
  const [score, setScore] = useState({ score: 0 });
  const [highestScore, setHighestScore] = useState(0);
  const [randomColor, setRandomColor] = useState(null);

  function getRandomTile(length) {
    const num = Math.floor(Math.random() * length);
    const opacity = (70 + score.score) / 105.8;
    console.log(opacity);

    const color = [
      Math.floor(Math.random() * 255 + 1),
      Math.floor(Math.random() * 255 + 1),
      Math.floor(Math.random() * 255 + 1),
      opacity,
    ];
    setRandomTile(num);
    setRandomColor(color);
  }

  function getAnswer(isTarget) {
    if (isTarget) {
      setScore(({ score }) => ({ score: score + 1 }));
    } else {
      setScore({ score: 0 });
      if (highestScore < score.score) {
        setHighestScore(score.score);
      }
    }
  }

  useEffect(() => {
    getRandomTile(tiles.length);
  }, [score]);

  return (
    <>
      <div className="screen">
        <div className="tiles">
          {randomTile !== null &&
            tiles.map((target, idx) => {
              const isTarget = idx === randomTile ? true : target;
              let style;
              if (isTarget) {
                style = {
                  backgroundColor: `rgba(${randomColor[0]},${randomColor[1]},${randomColor[2]},${randomColor[3]})`,
                };
              } else {
                style = {
                  backgroundColor: `rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`,
                };
              }
              return (
                <Tile
                  key={idx}
                  isTarget={isTarget}
                  style={style}
                  getAnswer={getAnswer}
                />
              );
            })}
        </div>
      </div>
      <div className="score-board">
        {randomColor && (
          <>
            <div
              className={`${
                highestScore !== 0 &&
                highestScore <= score.score &&
                "score--highestscore"
              }`}
            >
              Score: <span>{score.score}</span>
            </div>
            <div>Record: {highestScore}</div>
            <div>Opacity: {((1 - randomColor[3]) * 100).toFixed(2)}%</div>
          </>
        )}
      </div>
    </>
  );
}

export default Screen;
