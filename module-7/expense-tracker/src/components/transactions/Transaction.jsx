import editImage from "../../assets/images/edit.svg";
import deleteImage from "../../assets/images/delete.svg";
import { useDispatch } from "react-redux";
import {
  deleteTransactionAsync,
  editActive,
} from "../../features/trasnsaction/transactionSlice";
import numberWithCommas from "../../utils/thousandsSeparators";

export default function Transaction({ transaction = {} }) {
  const dispatch = useDispatch();
  const { name, amount, type, id } = transaction;

  // handle edit
  const handleEdit = () => {
    dispatch(editActive(transaction));
  };
  // handle delete
  const handleDelete = () => {
    dispatch(deleteTransactionAsync(id));
  };

  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {numberWithCommas(amount)}</p>
        <button className="link" onClick={handleEdit}>
          <img className="icon" src={editImage} alt="edit" />
        </button>
        <button className="link" onClick={handleDelete}>
          <img className="icon" src={deleteImage} alt="delete" />
        </button>
      </div>
    </li>
  );
}
