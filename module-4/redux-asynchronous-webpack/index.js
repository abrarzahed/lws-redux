const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require("./functions");
const thunk = require("redux-thunk");

// initial state
const initialState = {
  todos: [],
};

// reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/added":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };

    case "todo/loaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      return state;
  }
};

// store
const store = createStore(todoReducer, applyMiddleware(thunk.default));

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
// store.dispatch({
//   type: "todo/added",
//   payload: "Learn Redux",
// });

store.dispatch(fetchTodos);
