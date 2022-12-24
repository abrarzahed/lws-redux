import blogsReducer from "./blogsReducer";
import filtersReducer from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  blogs: blogsReducer,
  filters: filtersReducer,
});

export default rootReducer;
