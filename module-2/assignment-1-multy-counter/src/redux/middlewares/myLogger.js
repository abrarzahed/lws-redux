import rootReducer from "../rootReducer";

// create our first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  //   upcoming state
  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);

  // pass action
  return next(action);
};
export default myLogger;
