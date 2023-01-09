const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");

const initialState = {
  loading: "",
  posts: [],
  error: "",
};

const fetchOtherPosts = createAsyncThunk(
  "posts/fetchOtherPosts",
  async (titleQuery) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?title_like=${titleQuery}`
    );
    const posts = await response.json();
    return posts;
  }
);

const otherPostSlice = createSlice({
  name: "otherPosts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchOtherPosts.pending, (state, action) => {
      state.loading = true;
      state.posts = [];
      state.error = "";
    });

    builder.addCase(fetchOtherPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });

    builder.addCase(fetchOtherPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

module.exports = otherPostSlice.reducer;
module.exports.fetchOtherPosts = fetchOtherPosts;
