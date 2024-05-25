import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SENSOR_REDUCER_NAME } from "~/app/constants";
import { RootState } from "~/app/store";

interface ISensorState {
  page: number;
  count: number;
}

const initialState: ISensorState = {
  page: 1,
  count: 10,
} satisfies ISensorState as ISensorState;

export const sensorSlice = createSlice({
  name: SENSOR_REDUCER_NAME,
  initialState,
  reducers: {
    setSensorPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSensorCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { setSensorCount, setSensorPage } = sensorSlice.actions;

export const selectSensorPage = (state: RootState): number => {
  return state[SENSOR_REDUCER_NAME].page;
};

export const selectSensorCount = (state: RootState): number => {
  return state[SENSOR_REDUCER_NAME].count;
};

export default sensorSlice.reducer;
