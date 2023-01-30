import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactions,
} from "./transactionAPI";

/* 
  COMMENT: initial state
*/
const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
  itemToEdit: {},
  filters: {
    type: "all",
    searchTerm: "",
  },
};

/* 
  COMMENT: async thunks
*/
export const fetchTransactionsAsync = createAsyncThunk(
  "transaction/fetchTransactions",
  async ({ limit, type, searchTerm }) => {
    const transactions = await getTransactions({ limit, type, searchTerm });
    return transactions;
  }
);

export const addTransactionAsync = createAsyncThunk(
  "transaction/addTransaction",
  async (data) => {
    const transaction = await addTransaction(data);
    return transaction;
  }
);

export const editTransactionAsync = createAsyncThunk(
  "transaction/editTransaction",
  async ({ id, data }) => {
    const transaction = await editTransaction(id, data);
    return transaction;
  }
);

export const deleteTransactionAsync = createAsyncThunk(
  "transaction/deleteTransaction",
  async (id) => {
    const transaction = await deleteTransaction(id);
    return transaction;
  }
);

/* 
  COMMENT: slice
*/

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.itemToEdit = action.payload;
    },
    editDisabled: (state) => {
      state.itemToEdit = {};
    },
    typeAdded: (state, action) => {
      state.filters.type = action.payload;
    },
    searchTermAdded: (state, action) => {
      state.filters.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch transactions
      .addCase(fetchTransactionsAsync.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTransactionsAsync.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.error = "";
        state.transactions = action.payload;
      })
      .addCase(fetchTransactionsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.transactions = [];
      })
      // add transaction
      .addCase(addTransactionAsync.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addTransactionAsync.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.error = "";
        state.transactions.push(action.payload);
      })
      .addCase(addTransactionAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      // edit transaction
      .addCase(editTransactionAsync.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(editTransactionAsync.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.error = "";
        state.transactions = state.transactions.map((transaction) => {
          if (action.payload.id === transaction.id) return action.payload;
          return transaction;
        });
      })
      .addCase(editTransactionAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      // delete transaction
      .addCase(deleteTransactionAsync.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteTransactionAsync.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.error = "";
        state.transactions = state.transactions.filter(
          (transaction) => transaction.id !== action.meta.arg
        );
      })
      .addCase(deleteTransactionAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default transactionSlice.reducer;
export const { editActive, editDisabled, typeAdded, searchTermAdded } =
  transactionSlice.actions;
