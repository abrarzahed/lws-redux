import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice'; // default example
import videosReducer from "../features/videos/videosSlice";
import tagsReducer from "../features/tags/tagsSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
  },
});
