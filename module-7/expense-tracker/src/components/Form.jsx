import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransactionAsync } from "../features/trasnsaction/transactionSlice";

export default function Form() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  // state selector
  const { isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );

  // dispatch
  const dispatch = useDispatch();

  // handle create transaction
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(addTransactionAsync({ name, type, amount: Number(amount) }));
  };

  return (
    <form className="form" onSubmit={handleCreate}>
      <h3>Add new transaction</h3>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group radio">
        <label>Type</label>
        <div className="radio_group">
          <input
            type="radio"
            value="income"
            name="type"
            checked={type === "income"}
            onChange={(e) => setType("income")}
            required
          />
          <label>Income</label>
        </div>
        <div className="radio_group">
          <input
            type="radio"
            value="expense"
            name="type"
            placeholder="Expense"
            checked={type === "expense"}
            onChange={(e) => setType("expense")}
            required
          />
          <label>Expense</label>
        </div>
      </div>

      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <button disabled={isLoading} className="btn">
        Add Transaction
      </button>

      {!isLoading && isError && (
        <p className="error">There was an error {error}</p>
      )}

      <button className="btn cancel_edit">Cancel Edit</button>
    </form>
  );
}
