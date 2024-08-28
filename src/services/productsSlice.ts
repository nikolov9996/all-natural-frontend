import { ProductDetailsResponse, ProductsResponse } from "./types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl, buildQueryString } from "./utils";
import { RootState } from "~/app/store";

export const PRODUCTS_API_REDUCER_PATH = "products-api";

export const productsApi = createApi({
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
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
