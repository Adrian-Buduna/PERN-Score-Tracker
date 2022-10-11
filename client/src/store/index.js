import { configureStore } from "@reduxjs/toolkit";
import  playingSlice  from "./slices/playSlice";


export const store = configureStore({
  reducer: {
    play: playingSlice,
  },
});
