const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: fetch } = require("node-fetch");

const initialState = {
  loading: "",
  post: null,
  error: "",
};

const fetchPost = createAsyncThunk("post/fetchSinglePost", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const post = await response.json();
  return post;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
      state.post = null;
      state.error = "";
    });

    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload;
      state.error = "";
    });

    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.post = null;
      state.error = action.error.message;
    });
  },
});

module.exports = postSlice.reducer;
module.exports.fetchPost = fetchPost;
