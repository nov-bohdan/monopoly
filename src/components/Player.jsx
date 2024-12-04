export default function Player({ playerData }) {
  return (
    <div className="px-4 py-2 bg-zinc-600 mb-3">
      {playerData.name}
      <br />
      {playerData.balance}
    </div>
  );
}
