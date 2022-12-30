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

export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  };
};
export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const textEdited = (todoId, todoText) => {
  return {
    type: TEXT_EDITED,
    payload: {
      todoId,
      todoText,
    },
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLOR_SELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const allCompleted = (todos) => {
  return {
    type: ALL_COMPLETED,
    payload: todos,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
