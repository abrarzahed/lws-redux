import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactionsAsync } from "../../features/trasnsaction/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
  const { isLoading, isError, error, transactions } = useSelector(
    (state) => state.transaction
  );

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

  // dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactionsAsync());
  }, [dispatch]);

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
}
