const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");

// logger
const logger = createLogger();

// configure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(logger),
});

module.exports = store;
