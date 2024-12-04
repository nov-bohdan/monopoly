import Tile from "./Tile";
import BoardCenter from "./BoardCenter";
import { tilesData } from "./tiles_data";
import { playersData } from "./players_data";

export default function Board() {
  const tiles = [];

  for (const tile of tilesData) {
    tiles.push(
      <Tile
        name={tile.name}
        bgImg={tile.bg}
        bgColor={tile.color}
        playersOnTile={playersData.filter(
          (player) => player.tileId === tile.id
        )}
      />
    );
  }

  return (
    <div className="board bg-black grid grid-cols-[2fr_repeat(9,_1fr)_2fr] grid-rows-[2fr_repeat(9,_1fr)_2fr] gap-2 h-[800px] w-[800px] relative">
      {tiles}
      <BoardCenter className="" />
    </div>
  );
}
