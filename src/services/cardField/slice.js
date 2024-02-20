import { createSlice } from "@reduxjs/toolkit";

export const cardFieldSlice = createSlice({
  name: "cardField",
  initialState: {
    cardField: [],
    matchingPair: [],
    // isLoading: false,
    // hasError: false,
  },
  reducers: {
    createGame: (state, action) => {
      state.cardField = action.payload;
    },
    openCard: (state, action) => {
      state.cardField[action.payload.id].isOpen = true;
      state.matchingPair.push(action.payload);
      return state;
    },
    changeStatusCard: (state, action) => {
      state.cardField[action.payload].isOpen = false;
      return state;
    },
    resetMatchingPair: (state) => {
      state.matchingPair = [];
    },
  },
});
