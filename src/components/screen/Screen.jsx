import "./screen.css";
import Tile from "../tile/Tile";

function Screen({ tiles, targetedTile, getAnswer, tileColor }) {
  return (
    <div className="screen">
      <div className="tiles">
        {targetedTile !== null &&
          tiles.map((target, idx) => {
            const isTarget = idx === targetedTile ? true : target;
            let style;
            if (isTarget) {
              style = {
                backgroundColor: `rgba(${tileColor[0]},${tileColor[1]},${tileColor[2]},${tileColor[3]})`,
              };
            } else {
              style = {
                backgroundColor: `rgb(${tileColor[0]},${tileColor[1]},${tileColor[2]})`,
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
  );
}

export default Screen;
