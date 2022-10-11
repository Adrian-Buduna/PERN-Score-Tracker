import React from "react";
import { Layout } from "../../Layouts/Layout/Layout";
import { MemoDisplayPlayers } from "../../Components/DisplayPlayers/DisplayPlayers";
import Form from "../../Components/Form/Form";
import { useSelector } from "react-redux";

const AddPlayer = () => {
  const isPlaying = useSelector((state) => state.play.isPlaying);

  return (
    <Layout>
      {!isPlaying ? (
        <div className="flex flex-col justify-center items-center">
          <Form /> 
          <MemoDisplayPlayers />
        </div>
      ) : (
        <h1 className="text-red-500 font-bold text-3xl">Sorry the game has alredy started</h1>
      )}
    </Layout>
  );
};
export default AddPlayer;
