const store = require("./app/store");
const { fetchPost } = require("./features/post/postSlice");
const { fetchOtherPosts } = require("./features/otherPosts/otherPostSlice");

let num = 0;

store.subscribe(() => {
  const titleQuery = store
    .getState()
    .post?.post?.title?.split(" ")
    ?.join("&title_like=");

  if (titleQuery?.length > 0) {
    num++;
  }
  while (num > 0 && num < 2) {
    store.dispatch(fetchOtherPosts(titleQuery));
  }
});

store.dispatch(fetchPost());
