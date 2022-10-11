import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPlayer from "./Pages/AddPlayer/AddPlayer";
import Home from "./Home/Home";
import SeeStats from "./Pages/SeeStats/SeeStats";
import StartGame from "./Pages/StartGame/StartGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-player" element={<AddPlayer />} />
        <Route path="/see-stats" element={<SeeStats />} />
        <Route path="/start-game" element={<StartGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
