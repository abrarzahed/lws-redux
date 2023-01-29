import editImage from "../../assets/images/edit.svg";
import deleteImage from "../../assets/images/delete.svg";

export default function Transaction({ transaction }) {
  return (
    <li className="transaction income">
      <p>{transaction?.name}</p>
      <div className="right">
        <p>৳ {transaction?.amount}</p>
        <button className="link">
          <img className="icon" src={editImage} alt="edit" />
        </button>
        <button className="link">
          <img className="icon" src={deleteImage} alt="delete" />
        </button>
      </div>
    </li>
  );
}
