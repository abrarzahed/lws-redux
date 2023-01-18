import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tags: [],
  searchTerm: "",
  limit: 4,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
    searched: (state, action) => {
      state.searchTerm = action.payload;
    },
    limitUpdated: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, limitUpdated } =
  filterSlice.actions;
