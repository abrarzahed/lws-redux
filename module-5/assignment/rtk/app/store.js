const { configureStore } = require("@reduxjs/toolkit");
const postReducer = require("../features/post/postSlice");
const otherPostReducer = require("../features/otherPosts/otherPostSlice");
const { createLogger } = require("redux-logger");

const logger = createLogger();

const store = configureStore({
  reducer: {
    post: postReducer,
    otherPosts: otherPostReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
