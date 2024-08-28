import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "~/features/Layout/LayoutSlice";
import { LAYOUT_REDUCER_NAME, SENSOR_REDUCER_NAME } from "./constants";
import {
  PRODUCTS_API_REDUCER_PATH,
  productsApi,
} from "~/services/productsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { SENSOR_API_REDUCER_PATH, sensorApi } from "~/services/sensorSlice";
import sensorSlice from "~/features/Sensor/SensorSlice";
import authSlice, { AUTH_REDUCER_NAME } from "~/features/Auth/authSlice";
import { authSliceAPI } from "~/services/authSliceAPI";
// ...

export const store = configureStore({
  reducer: {
    [LAYOUT_REDUCER_NAME]: LayoutSlice,
    [PRODUCTS_API_REDUCER_PATH]: productsApi.reducer,
    [SENSOR_API_REDUCER_PATH]: sensorApi.reducer,
    [authSliceAPI.reducerPath]: authSliceAPI.reducer,
    [SENSOR_REDUCER_NAME]: sensorSlice,
    [AUTH_REDUCER_NAME]: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(sensorApi.middleware)
      .concat(authSliceAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
