import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  searchTermAdded,
  typeAdded,
} from "../features/trasnsaction/transactionSlice";

export default function Filters() {
  const dispatch = useDispatch();

  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  const handleTypeChange = (value) => {
    setType(value);
    dispatch(typeAdded(value));
  };

  // handle search
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchTermAdded(search));
  };

  // reset filters
  const resetFilters = () => {
    setType("");
    setSearch("");
    dispatch(searchTermAdded(""));
    dispatch(typeAdded("all"));
  };

  return (
    <div className="top-bar">
      <div className="top-bar__left">
        <div className="radio_group">
          <input
            type="radio"
            value="income"
            name="type"
            checked={type === "income"}
            onChange={() => handleTypeChange("income")}
            required
          />
          <label>Income</label>
        </div>
        <div className="radio_group">
          <input
            type="radio"
            value="expense"
            name="type"
            checked={type === "expense"}
            onChange={() => handleTypeChange("expense")}
            placeholder="Expense"
            required
          />
          <label>Expense</label>
        </div>
      </div>
      <form className="top-bar__right" onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
        />
      </form>
      <button onClick={resetFilters}>Reset</button>
    </div>
  );
}
