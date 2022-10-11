import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isPlaying = useSelector((state) => state.play.isPlaying);
  return (
    <nav className="flex flex-row justify-between items-center bg-blue-300 font-bold transition ease-in-out delay-150 duration:300 mb-20 gap-2 border- b-2 border-gray-300 h-20 p-6 tablet:p-8">
      <div>
        <Link to="/">
          <h1>Score Counter App</h1>
        </Link>
      </div>
      <div className="flex flex-row gap-4">
        <Link to="/start-game">
          <h2 className="border-solid border-2 border-black bg-blue-400 p-2 rounded-3xl transition ease-in-out delay-150 duration:300 hover:bg-green-500 hover:scale-110">
            {isPlaying ? "Stop Game" : "Start Game"}
          </h2>
        </Link>
        <Link to="/add-player">
          <h2 className="border-solid border-2 border-black bg-blue-400 p-2 rounded-3xl transition ease-in-out delay-150 duration:300 hover:bg-green-500 hover:scale-110">
            Add Player
          </h2>
        </Link>
        <Link to="/see-stats">
          <h2 className="border-solid border-2 border-black bg-blue-400 p-2 rounded-3xl transition ease-in-out delay-150 duration:300 hover:bg-green-500 hover:scale-110">
            See Stats
          </h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
