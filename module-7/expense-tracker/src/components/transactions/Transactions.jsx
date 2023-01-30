import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchTransactionsAsync,
  searchTermAdded,
  typeAdded,
} from "../../features/trasnsaction/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
  const { isLoading, isError, error, transactions, filters } = useSelector(
    (state) => state.transaction
  );

  // dispatch
  const dispatch = useDispatch();
  dispatch(typeAdded("all"));
  dispatch(searchTermAdded(""));

  useEffect(() => {
    dispatch(
      fetchTransactionsAsync({
        limit: 5,
        type: filters?.type,
        searchTerm: filters?.searchTerm,
      })
    );
  }, [dispatch, filters]);

  // decide what to render
  let content = null;
  if (isLoading) content = <p className="error">Loading...</p>;

  if (!isLoading && isError) content = <p className="error">{error}</p>;

  if (!isLoading && !isError && transactions.length === 0) {
    content = <p>There is no transactions</p>;
  }

  if (!isLoading && !isError && transactions.length > 0) {
    content = transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ));
  }

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
        {transactions.length > 4 && (
          <Link to="/all-transactions" className="btn">
            View All
          </Link>
        )}
      </div>
    </>
  );
}
