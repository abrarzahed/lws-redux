import { createSlice } from "@reduxjs/toolkit";

/* 
  COMMENT: initial state
*/
const initialState = {
  accessToken: undefined,
  user: undefined,
};

/* 
  COMMENT: slice
*/
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },

    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
