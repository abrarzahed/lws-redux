import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

// initial state
const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchVideoAsync = createAsyncThunk(
  "video/fetchVideo",
  async (videoId) => {
    const video = await getVideo(videoId);
    return video;
  }
);

// reducer
const videoSlice = createSlice({
  name: "video",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoAsync.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideoAsync.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideoAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.video = {};
        state.error = action.error?.message;
      });
  },
});
export default videoSlice.reducer;
