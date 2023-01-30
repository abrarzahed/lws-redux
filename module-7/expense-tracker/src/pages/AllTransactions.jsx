import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../components/Filters";
import Transaction from "../components/transactions/Transaction";
import { fetchTransactionsAsync } from "../features/trasnsaction/transactionSlice";

export default function AllTransactions() {
  const dispatch = useDispatch();
  const { isLoading, isError, error, transactions, filters } = useSelector(
    (state) => state.transaction
  );

  // dispatch
  useEffect(() => {
    dispatch(
      fetchTransactionsAsync({
        limit: 0,
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
    <div>
      <Filters />
      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </div>
  );
}
