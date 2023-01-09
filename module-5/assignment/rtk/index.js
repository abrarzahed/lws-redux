const store = require("./app/store");
const { fetchPost } = require("./features/post/postSlice");

console.log(`Initial State : ${store.getState()}`);
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(fetchPost());
