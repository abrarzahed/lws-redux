import { getVideos } from "./videosAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// initial State
const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk function to fetch videos
export const fetchVideosAsync = createAsyncThunk(
  "videos/fetchVideos",
  async () => {
    const videos = await getVideos();
    return videos;
  }
);

// videos slice
const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.videos = [];
      })
      .addCase(fetchVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideosAsync.rejected, (state, action) => {
        state.isError = true;
        state.videos = [];
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer;
