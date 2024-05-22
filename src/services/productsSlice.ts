import { API_BASE_URL_DEV, API_BASE_URL_PROD } from "./constants";
import { ProductDetailsResponse, ProductsResponse } from "./types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildQueryString } from "./utils";

export const PRODUCTS_API_REDUCER_PATH = "products-api";

const apiUrl =
  import.meta.env.MODE === "development" ? API_BASE_URL_DEV : API_BASE_URL_PROD;

export const productsApi = createApi({
  reducerPath: PRODUCTS_API_REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
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
