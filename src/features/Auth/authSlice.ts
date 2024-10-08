import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/app/store";
import { User } from "~/services/types";

export const AUTH_REDUCER_NAME = "auth-reducer";

type AuthStateType = {
  user: User | null;
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
      { payload: { token } }: PayloadAction<{ token: string }>
    ) => {
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

export const selectCurrentUser = (state: RootState) =>
  state["auth-reducer"].token;
