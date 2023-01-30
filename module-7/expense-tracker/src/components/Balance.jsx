import { useSelector } from "react-redux";
import numberWithCommas from "../utils/thousandsSeparators";

export default function Balance() {
  const { transactions } = useSelector((state) => state.transaction);

  const currentAmount = transactions?.reduce(
    (accumulator, currentTransaction) => {
      if (currentTransaction.type === "income") {
        return (accumulator += currentTransaction.amount);
      } else {
        return (accumulator -= currentTransaction.amount);
      }
    },
    0
  );
  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳ </span>
        {transactions?.length > 0 ? (
          <span>{numberWithCommas(currentAmount)}</span>
        ) : (
          0
        )}
      </h3>
    </div>
  );
}
