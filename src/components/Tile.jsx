import PlayerChip from "./PlayerChip";

export default function Tile({ name, bgImg, bgColor, playersOnTile }) {
  const transformations = [
    "translate-x-1/2 translate-y-1/2",
    "-translate-x-1/2 -translate-y-1/2",
  ];
  const className =
    " bg-slate-500 border-2 border-black flex justify-center items-center justify-self-center self-center w-full h-full bg-cover bg-no-repeat bg-center";
  return (
    <div
      className={className}
      style={{ backgroundImage: `url(${bgImg})`, backgroundColor: bgColor }}
    >
      {playersOnTile.map((player, idx) => (
        <PlayerChip
          color={player.color}
          transformation={transformations[idx]}
        />
      ))}
    </div>
  );
}
