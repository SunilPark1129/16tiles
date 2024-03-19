import React, { useEffect, useState } from "react";
import Screen from "../../components/screen/Screen";
import "./main.css";
import Board from "../../components/board/Board";
import Button from "../../components/button/Button";

const tiles = new Array(16).fill(false);

function Main() {
  const [targetedTile, setTargetedTile] = useState(null);
  const [tileColor, setTileColor] = useState(null);
  const [score, setScore] = useState({ current: 0, highest: 0 });
  const [timer, setTimer] = useState(null);

  const [isSingleMode, setIsSingleMode] = useState(false);

  function getRandomTile(length) {
    const num = Math.floor(Math.random() * length);
    const opacity = (70 + score.current) / 105.8;
    let color;

    // set colors
    if (isSingleMode) {
      color = [250, 149, 144, opacity];
    } else {
      color = [
        Math.floor(Math.random() * (250 - 150) + 150),
        Math.floor(Math.random() * (220 - 150) + 150),
        Math.floor(Math.random() * (250 - 150) + 150),
        opacity,
      ];
    }
    console.log(color);
    setTargetedTile(num);
    clearTimeout(timer);

    if (isSingleMode) {
      // single mode
      setTileColor([221, 221, 221, 1]);
      if (score.current !== 0) {
        setTimer(
          setTimeout(() => {
            setTileColor(color);
          }, 200)
        );
      } else {
        setTileColor(color);
      }
    } else {
      // multiple mode
      setTileColor(color);
    }
  }

  function getAnswer(isTarget) {
    if (isTarget) {
      // game continue, increase score
      setScore((prev) => ({ ...prev, current: prev.current + 1 }));
    } else {
      // game over set high score
      setScore((prev) => ({
        current: 0,
        highest: prev.highest < prev.current ? prev.current : prev.highest,
      }));
    }
  }

  function getMode(bool) {
    setIsSingleMode(bool);
  }

  useEffect(() => {
    getRandomTile(tiles.length);
  }, [score]);

  useEffect(() => {
    getRandomTile(tiles.length);
    setScore({ current: 0, highest: 0 });
  }, [isSingleMode]);

  return (
    <main>
      <Screen
        tiles={tiles}
        targetedTile={targetedTile}
        tileColor={tileColor}
        getAnswer={getAnswer}
      />
      <Board score={score} tileColor={tileColor} />
      <Button getMode={getMode} isSingleMode={isSingleMode} />
    </main>
  );
}

export default Main;
