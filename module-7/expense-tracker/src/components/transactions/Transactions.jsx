import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactionsAsync } from "../../features/trasnsaction/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
  const { transactions } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactionsAsync());
  }, [dispatch]);
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </>
  );
}
