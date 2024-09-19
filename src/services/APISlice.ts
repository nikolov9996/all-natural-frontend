import {
  LoginRequest,
  ProductDetailsResponse,
  ProductsResponse,
  SensorDataPaginated,
  SensorResponse,
  UserResponse,
} from "./types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl, buildQueryString, formatDateForRequest } from "./utils";
import { RootState } from "~/app/store";

export const PRODUCTS_API_REDUCER_PATH = "products-api";

export const APISlice = createApi({
  reducerPath: PRODUCTS_API_REDUCER_PATH,
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
  keepUnusedDataFor: 600, // save cached data for 10 min
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, string>({
      query: (count: string) => {
        const qString = buildQueryString({ count });
        return `product${qString}`;
      },
    }),
    getProductById: builder.query<ProductDetailsResponse, string>({
      query: (id: string) => `product/${id}`,
    }),
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
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => "protected",
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetSensorRecordsForDayQuery,
  useGetSensorRecordsPaginatedQuery,
  useLoginMutation,
  useProtectedMutation,
} = APISlice;
