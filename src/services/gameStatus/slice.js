import { createSlice } from "@reduxjs/toolkit";

export const currentGameSlice = createSlice({
  name: "currentGame",
  initialState: {
    statusGame: { start: false, inProgress: false, end: false },
    level: 1,
    time: "10:20",
    totalSteps: 0,
    stepsLevel: 0,
  },
  reducers: {
    startGame: (state, action) => {
      state.statusGame.start = true;
      state.statusGame.inProgress = true;
    },
    plusLevel: (state, action) => {
      state.level += 1;
    },
    plusStep: (state, action) => {
      state.stepsLevel += 1;
    },
    setTotalSteps: (state, action) => {
      state.totalSteps = action.payload;
    },
  },
});
