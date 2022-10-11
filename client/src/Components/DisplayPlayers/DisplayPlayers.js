import React from "react";
import { allPlayers } from "../../api/users";
import { useState, useEffect } from "react";
import { MemoPlayer } from "../Player/Player";
import { deletePlayer } from "../../api/users";

const DisplayPlayers = () => {
  // ---------- Get players data ----------;
  const [playerData, setPlayerData] = useState([]);

  const playerRows = async () => {
    try {
      const { data } = await allPlayers();
      setPlayerData(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    playerRows();
  }, []);

  
  return (
    <div className="flex justify-center items-center flex-col w-full md:w-6/12 gap-8">
      <div>
        <h1 className="text-2xl font-bold">My players</h1>
      </div>
      <div className="flex flex-col-reverse gap-8 w-full">
        {playerData.map((player) => (
          <MemoPlayer key={player.user_id} player={player} />
        ))}
      </div>
    </div>
  );
};

export const MemoDisplayPlayers = React.memo(DisplayPlayers);
