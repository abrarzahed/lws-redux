import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/trasnsaction/transactionSlice";
export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});
