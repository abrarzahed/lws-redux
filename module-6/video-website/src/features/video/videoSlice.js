import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateLikes, updateUnlikes } from "./videoAPI";
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
export const updateLikesAsync = createAsyncThunk(
  "video/updateLikes",
  async ({ videoId, likes }) => {
    const video = await updateLikes({ videoId, likes });
    return video;
  }
);
export const updateUnlikesAsync = createAsyncThunk(
  "video/updateUnlikes",
  async ({ videoId, unlikes }) => {
    const video = await updateUnlikes({ videoId, unlikes });
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
      })
      .addCase(updateLikesAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.video = action.payload;
      })
      .addCase(updateUnlikesAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.video = action.payload;
      });
  },
});
export default videoSlice.reducer;
