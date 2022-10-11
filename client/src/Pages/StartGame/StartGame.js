import React from "react";
import { Layout } from "../../Layouts/Layout/Layout";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { stopGame, startGame } from "../../store/slices/playSlice";
import { useSelector } from "react-redux";

const StartGame = () => {
  const [play, setPlay] = useState(false);

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log(state);
  const isPlaying = useSelector((state) => state.play.isPlaying);

  const onClick = (e) => {
    e.preventDefault();
    try {
      if (isPlaying === false) {
        dispatch(startGame());
        localStorage.setItem("isPlaying", "true");
      } else {
        dispatch(stopGame());
        localStorage.removeItem("isPlaying");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <button
        onClick={(e) => onClick(e)}
        className="bg-green-500 p-4 rounded-xl mb-8 transition ease-in-out delay-150 duration:300 font-bold hover:bg-green-300 "
      >
        {isPlaying ? "Stop Playing" : "Start Playing"}
      </button>

      
    </Layout>
  );
};

export default StartGame;
