import { initialState } from "./initialState";
import {
  LOADED,
  ADDED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETED,
  TOGGLED,
  TEXT_EDITED,
} from "./actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      // return [...state, ...action.payload];
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload,
          completed: false,
        },
      ];

    case TEXT_EDITED:
      return state.map((todo) => {
        if (action.payload.todoId === todo.id) {
          return {
            ...todo,
            text: action.payload.todoText,
          };
        } else {
          return todo;
        }
      });

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });

    case COLOR_SELECTED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            color: action.payload.color,
          };
        } else {
          return todo;
        }
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALL_COMPLETED:
      return state;

    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default reducer;
