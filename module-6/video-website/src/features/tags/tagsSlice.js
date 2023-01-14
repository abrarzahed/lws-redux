import { getTags } from "./tagsAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// initial State
const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk function to fetch videos
export const fetchTagsAsync = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();
  return tags;
});

// videos slice
const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTagsAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.tags = [];
      })
      .addCase(fetchTagsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.tags = action.payload;
      })
      .addCase(fetchTagsAsync.rejected, (state, action) => {
        state.isError = true;
        state.tags = [];
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default tagsSlice.reducer;
