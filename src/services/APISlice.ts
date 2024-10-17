import {
  LoginRequest,
  ProductDetailsResponse,
  ProductsResponse,
  SensorDataPaginated,
  SensorResponse,
  User,
  UserResponse,
} from "./types";
import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { apiUrl, buildQueryString, formatDateForRequest } from "./utils";
import { RootState } from "~/app/store";

export const MAIN_API_REDUCER_PATH = "main-api";

function prepareBearer(
  headers: Headers,
  {
    getState,
  }: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">
) {
  const access_token = (getState() as RootState)["auth-reducer"].access_token;
  if (access_token) {
    headers.set("authorization", `Bearer ${access_token}`);
  }
  return headers;
}

export const APISlice = createApi({
  reducerPath: MAIN_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: prepareBearer,
  }),
  keepUnusedDataFor: 60, // save cached data for 10 min
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
    getProfile: builder.query<User, string>({
      query: (userId: string) => ({
        url: `user/profile/${userId}`,
        method: "GET",
      }),
    }),
    refreshToken: builder.query<string, string>({
      query: (userId) => ({
        url: `auth/refresh-token`,
        body: { userId },
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetSensorRecordsForDayQuery,
  useGetSensorRecordsPaginatedQuery,
  useLoginMutation,
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useRefreshTokenQuery,
} = APISlice;
