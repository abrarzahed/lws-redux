const { configureStore } = require("@reduxjs/toolkit");
const postReducer = require("../features/post/postSlice");

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

module.exports = store;
