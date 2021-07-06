import React from "react";

export const Tile = ({ obj }) => {

  const tiles = []
  for (const key in obj) {
    if (key === Object.keys(obj)[0]) {
      tiles.push(<p className="tile-title">{obj[key]}</p>)
    } else {
      tiles.push(<p className="tile">{obj[key]}</p>)
    }
  }

  return (
    <div className="tile-container">
      {tiles}
    </div>
  );
};
