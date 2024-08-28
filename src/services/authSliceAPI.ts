import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "~/app/store";
import { ProductType } from "~/static/types";
import { apiUrl } from "./utils";

export interface User {
  username: string;
  email: string;
  avatar: string;
  isSeller: boolean;
  favorites: ProductType[];
  comments: any[];
  _id?: any;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export const authSliceAPI = createApi({
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
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "user/login",
        method: "POST",
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => "protected",
    }),
  }),
});

export const { useLoginMutation, useProtectedMutation } = authSliceAPI;
