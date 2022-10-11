import React from "react";
import { useState } from "react";
import { deletePlayer } from "../../api/users";

const Player = ({ player }) => {
  const [error, setError] = useState(false);

  const onClick = async (e) => {
    e.preventDefault();
    try {
      const { data } = await deletePlayer(player.user_name);
      console.log(player.user_name)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center bg-gray-300 p-4 border-2 w-full border-black rounded-2xl gap-4">
      <h1 className="text-2xl font-bold">{player.user_name}</h1>
      <div className="flex flex-col gap-4">
        <button
          onClick={(e) => onClick(e,)}
          className="bg-blue-400 p-1 rounded-lg border-2 border-black uppercase font-500 transition ease-out duration-300 hover:bg-red-500"
        >
          Delete
        </button>
        <button className="bg-blue-400 p-1 rounded-lg border-2 border-black uppercase font-500 transition ease-out duration-300 hover:bg-yellow-300">
          Edit
        </button>
      </div>
      <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
    </div>
  );
};

export const MemoPlayer = React.memo(Player);
