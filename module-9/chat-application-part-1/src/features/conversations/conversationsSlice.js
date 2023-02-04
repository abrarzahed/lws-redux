import { createSlice } from "@reduxjs/toolkit";

/* 
  COMMENT: initial state
*/
const initialState = {};

/* 
  COMMENT: slice
*/
const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = conversationsSlice.actions;
export default conversationsSlice.reducer;
