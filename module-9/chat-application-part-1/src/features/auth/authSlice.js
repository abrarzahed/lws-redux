import { createSlice } from "@reduxjs/toolkit";

/* 
  COMMENT: initial state
*/
const initialState = {};

/* 
  COMMENT: slice
*/
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = authSlice.actions;
export default authSlice.reducer;
