import { initialState } from "./initialState";
import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload.status,
      };

    case COLOR_CHANGED:
      const { color, changeType } = action.payload;
      if (changeType === "added") {
        return {
          ...state,
          colors: [...state.colors, color],
        };
      } else if (changeType === "removed") {
        return {
          ...state,
          colors: state.colors.filter((c) => c !== color),
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default reducer;
