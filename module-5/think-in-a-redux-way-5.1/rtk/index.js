const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const { increment, decrement } = counterActions;

const {
  dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounterSlice");

const unsubscribe = store.subscribe(() => {
  //   console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());

unsubscribe();
