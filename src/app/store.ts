import { combineReducers, configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "~/features/Layout/LayoutSlice";
import { LAYOUT_REDUCER_NAME, SENSOR_REDUCER_NAME } from "./constants";
import { APISlice } from "~/services/APISlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import sensorSlice from "~/features/Sensor/SensorSlice";
import authSlice, { AUTH_REDUCER_NAME } from "~/features/Auth/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: [APISlice.reducerPath, AUTH_REDUCER_NAME],
  blacklist: [
    SENSOR_REDUCER_NAME,
    LAYOUT_REDUCER_NAME,
    APISlice.reducerPath,
  ],
};

const rootReducer = combineReducers({
  [APISlice.reducerPath]: APISlice.reducer,
  [LAYOUT_REDUCER_NAME]: LayoutSlice,
  [SENSOR_REDUCER_NAME]: sensorSlice,
  [AUTH_REDUCER_NAME]: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(APISlice.middleware),
});

const persistor = persistStore(store);

export { store, persistor };

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
