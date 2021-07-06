import React from "react";

import { Tile } from '../../components/tile/Tile'

export const TileList = ({ arr }) => {
  const tiles = arr.map(item => <Tile obj={item} />)
  return (
    <div>
      {tiles}
    </div>
  );
};
