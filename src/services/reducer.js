import { cardFieldSlice } from "./cardField/slice";
import { currentGameSlice } from "./gameStatus/slice";
import { timerSlice } from "./timer/slice";

export const rootReducer = {
  cardField: cardFieldSlice.reducer,
  currentGame: currentGameSlice.reducer,
  timer: timerSlice.reducer,
};
