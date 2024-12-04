import Player from "./Player";

export default function PlayersPanel({ playersData }) {
  return (
    <div className="text-white mr-10">
      {playersData.map((player) => (
        <Player playerData={player} key={player.id} />
      ))}
    </div>
  );
}
