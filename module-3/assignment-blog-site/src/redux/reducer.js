import {
  AUTHOR_CHANGED,
  CATEGORY_CHANGED,
  RESET_FILTERS,
  SEARCH_TERM_CHANGED,
} from "./actionTypes";

const initialState = {
  searchTerm: "",
  category: "",
  author: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_CHANGED:
      return {
        ...state,
        category: action.payload,
      };

    case AUTHOR_CHANGED:
      return {
        ...state,
        author: action.payload,
      };
    case SEARCH_TERM_CHANGED:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case RESET_FILTERS:
      return {
        searchTerm: "",
        category: "",
        author: "",
      };

    default:
      return state;
  }
};
export default reducer;
