import {
  AUTHOR_CHANGED,
  CATEGORY_CHANGED,
  RESET_FILTERS,
  SEARCH_TERM_CHANGED,
} from "./actionTypes";

export const categoryChanged = (category) => {
  return {
    type: CATEGORY_CHANGED,
    payload: category,
  };
};
export const authorChanged = (author) => {
  return {
    type: AUTHOR_CHANGED,
    payload: author,
  };
};
export const searchTermChanged = (searchTerm) => {
  return {
    type: SEARCH_TERM_CHANGED,
    payload: searchTerm,
  };
};
export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  };
};
