import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "~/features/Layout/LayoutSlice";
import { LAYOUT_REDUCER_NAME } from "./constants";
// ...

export const store = configureStore({
  reducer: {
    [LAYOUT_REDUCER_NAME]: LayoutSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
