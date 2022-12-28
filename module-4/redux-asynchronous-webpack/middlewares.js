const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "todo/added") {
    console.log("It will take some time to get done");
    setTimeout(() => {
      next(action);
    }, 5000);

    return;
  }

  return next(action);
};

const fetchAPIMiddleware = (store) => (next) => async (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

module.exports = {
  delayActionMiddleware,
  fetchAPIMiddleware,
};
