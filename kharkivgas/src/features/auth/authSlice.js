import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: null,
    refreshToken: null,
    pwd: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { pwd, user, accessToken, refreshToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.pwd = pwd;
    },
    logOut: (state, action) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.pwd = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.accessToken;
