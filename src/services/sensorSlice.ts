import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL_DEV, API_BASE_URL_PROD } from "./constants";
import { SensorResponse } from "./types";
import { buildQueryString, formatDateForRequest } from "./utils";

export const SENSOR_API_REDUCER_PATH = "sensor-api";

const apiUrl =
  import.meta.env.MODE === "development" ? API_BASE_URL_DEV : API_BASE_URL_PROD;

export const sensorApi = createApi({
  reducerPath: SENSOR_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  keepUnusedDataFor: 600, // save cached data for 10 min
  endpoints: (builder) => ({
    getSensorRecordsForDay: builder.query<SensorResponse, string>({
      query: (date: string | Date) => {
        const qString = buildQueryString({ date: formatDateForRequest(date) });
        return `sensor/day${qString}`;
      },
    }),
  }),
});

export const { useGetSensorRecordsForDayQuery } = sensorApi;
