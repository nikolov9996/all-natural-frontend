import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SensorDataPaginated, SensorResponse } from "./types";
import { apiUrl, buildQueryString, formatDateForRequest } from "./utils";
import { RootState } from "~/app/store";

export const SENSOR_API_REDUCER_PATH = "sensor-api";

export const sensorApi = createApi({
  reducerPath: SENSOR_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState)["auth-reducer"].token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 60, // save cached data for 1 min
  endpoints: (builder) => ({
    getSensorRecordsForDay: builder.query<SensorResponse, string>({
      query: (date) => {
        const qString = buildQueryString({ date: formatDateForRequest(date) });
        return `sensor/day${qString}`;
      },
    }),
    getSensorRecordsPaginated: builder.query<
      SensorResponse,
      SensorDataPaginated
    >({
      query: ({ count, page }) => {
        const qString = buildQueryString({ count, page: page - 1 });
        return `sensor${qString}`;
      },
    }),
  }),
});

export const {
  useGetSensorRecordsForDayQuery,
  useGetSensorRecordsPaginatedQuery,
} = sensorApi;
