import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "~/features/Layout/LayoutSlice";
import { LAYOUT_REDUCER_NAME } from "./constants";
import {
  PRODUCTS_API_REDUCER_PATH,
  productsApi,
} from "~/services/productsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { SENSOR_API_REDUCER_PATH, sensorApi } from "~/services/sensorSlice";
// ...

export const store = configureStore({
  reducer: {
    [LAYOUT_REDUCER_NAME]: LayoutSlice,
    [PRODUCTS_API_REDUCER_PATH]: productsApi.reducer,
    [SENSOR_API_REDUCER_PATH]: sensorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(sensorApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
