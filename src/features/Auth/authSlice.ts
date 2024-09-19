import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/app/store";
import { AuthUser } from "./AuthPage.static";

export const AUTH_REDUCER_NAME = "auth-reducer";

type AuthStateType = {
  user: AuthUser | null;
  token: string | null;
};

const initialState: AuthStateType = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: AUTH_REDUCER_NAME,
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { token, user },
      }: PayloadAction<{ token: string; user: AuthUser }>
    ) => {
      state.user = user;
      state.token = token;
    },
    signOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, signOut } = authSlice.actions;

export default authSlice.reducer;

export const selectToken = (state: RootState) => state["auth-reducer"].token;

export const selectCurrentUser = (state: RootState) =>
  state["auth-reducer"].user;
