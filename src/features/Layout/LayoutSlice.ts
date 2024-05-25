import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LAYOUT_REDUCER_NAME } from "~/app/constants";
import type { RootState } from "~/app/store";

interface LayoutState {
  refreshTime: number;
}

const initialState: LayoutState = {
  refreshTime: 0,
} satisfies LayoutState as LayoutState;

export const counterSlice = createSlice({
  name: LAYOUT_REDUCER_NAME,
  initialState,
  reducers: {
    increment: (state) => {
      state.refreshTime += 1;
    },
    decrement: (state) => {
      state.refreshTime -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.refreshTime += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectRefreshTime = (state: RootState) =>
  state[LAYOUT_REDUCER_NAME].refreshTime;

export default counterSlice.reducer;
