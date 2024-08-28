import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL_DEV, API_BASE_URL_PROD } from "./constants";
import { SensorDataPaginated, SensorResponse } from "./types";
import { buildQueryString, formatDateForRequest } from "./utils";

export const SENSOR_API_REDUCER_PATH = "sensor-api";

const apiUrl =
  import.meta.env.MODE === "development" ? API_BASE_URL_DEV : API_BASE_URL_PROD;

export const sensorApi = createApi({
  reducerPath: SENSOR_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
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
