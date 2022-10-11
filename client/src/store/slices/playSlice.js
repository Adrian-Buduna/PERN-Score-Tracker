import { createSlice } from "@reduxjs/toolkit";

const isThegameBeingPlayed = () => {
  const isPlaying = localStorage.getItem("isPlayng");

  if (isPlaying && JSON.parse(isPlaying) === true) {
    return true;
  }
  return false;
};

const initialState = {
  isPlaying: isThegameBeingPlayed(),
};

export const playingSlice = createSlice({
  name: "play",
  initialState,
  reducers: {
    startGame: (state) => {
      state.isPlaying = true;
    },
    stopGame: (state) => {
      state.isPlaying = false;
    },
  },
});

export default playingSlice.reducer;
export const { startGame, stopGame } = playingSlice.actions;
