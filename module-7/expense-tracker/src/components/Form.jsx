import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTransactionAsync,
  editTransactionAsync,
} from "../features/trasnsaction/transactionSlice";

export default function Form() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [editMode, setEditMode] = useState(false);

  // state selector
  const { isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );

  const { itemToEdit } = useSelector((state) => state.transaction);
  // listen for edit mode active
  useEffect(() => {
    const { id } = itemToEdit;
    if (id) {
      setEditMode(true);
      setName(itemToEdit.name);
      setType(itemToEdit.type);
      setAmount(itemToEdit.amount);
    } else {
      setEditMode(false);
      reset();
    }
  }, [itemToEdit]);

  // dispatch
  const dispatch = useDispatch();

  // reset form
  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };

  // handle create and update transaction
  const handleCreate = (e) => {
    e.preventDefault();
    if (editMode && itemToEdit) {
      dispatch(
        editTransactionAsync({
          id: itemToEdit?.id,
          data: {
            name,
            type,
            amount,
          },
        })
      );
    } else {
      dispatch(addTransactionAsync({ name, type, amount: Number(amount) }));
    }
    reset();
    setEditMode(false);
  };

  // handle edit mode changes
  const cancelEditMode = (e) => {
    e.preventDefault();
    setEditMode(false);
    reset();
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
        {editMode ? "Update Transaction" : "Add Transaction"}
      </button>

      {!isLoading && isError && (
        <p className="error">There was an error {error}</p>
      )}

      {editMode && (
        <button onClick={cancelEditMode} className={`btn cancel_edit`}>
          Cancel Edit
        </button>
      )}
    </form>
  );
}
