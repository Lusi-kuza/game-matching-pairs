import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    seconds: "45",
    minutes: "09",
  },
  reducers: {
    updateTimer: (state, action) => {
      if (+state.seconds === 59) {
        state.seconds = "00";
        state.minutes =
          +state.minutes < 9
            ? `0${+state.minutes + 1}`
            : `${+state.minutes + 1}`;
      } else if (+state.seconds < 9) {
        state.seconds = `0${+state.seconds + 1}`;
      } else {
        state.seconds = `${+state.seconds + 1}`;
      }
    },
  },
});
