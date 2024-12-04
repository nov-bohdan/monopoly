import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import PlayersPanel from "./components/PlayersPanel";
import { playersData } from "./components/players_data";

function App() {
  return (
    <div className="flex justify-center mx-auto">
      <PlayersPanel playersData={playersData} />
      <Board />
    </div>
  );
}

export default App;
