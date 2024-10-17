import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/app/store";
import { AuthUser } from "./AuthPage.static";

export const AUTH_REDUCER_NAME = "auth-reducer";

type AuthStateType = {
  user: AuthUser | null;
  access_token: string | null;
  refresh_token: string | null;
};

const initialState: AuthStateType = {
  user: null,
  access_token: null,
  refresh_token: null,
};

const authSlice = createSlice({
  name: AUTH_REDUCER_NAME,
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { access_token, refresh_token, user },
      }: PayloadAction<{
        access_token: string;
        refresh_token: string;
        user: AuthUser;
      }>
    ) => {
      state.user = user;
      state.access_token = access_token;
      state.refresh_token = refresh_token;
    },
    signOut: (state) => {
      state.user = null;
      state.access_token = null;
      state.refresh_token = null;
    },
  },
});

export const { setCredentials, signOut } = authSlice.actions;

export default authSlice.reducer;

export const selectAccessToken = (state: RootState) =>
  state["auth-reducer"].access_token;

export const selectCurrentUser = (state: RootState) =>
  state["auth-reducer"].user;
