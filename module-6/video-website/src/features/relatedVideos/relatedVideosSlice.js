import { getRelatedVideos } from "./relatedVideosAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// initial State
const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk function to fetch videos
export const fetchRelatedVideosAsync = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }) => {
    const relatedVideos = await getRelatedVideos({ tags, id });
    return relatedVideos;
  }
);

// videos slice
const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideosAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.relatedVideos = [];
      })
      .addCase(fetchRelatedVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideosAsync.rejected, (state, action) => {
        state.isError = true;
        state.relatedVideos = [];
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
