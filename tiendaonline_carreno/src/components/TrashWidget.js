import { useContext } from "react";
import { CartContext } from '../Context/CartContext';

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <button
      onClick={() => removeItem(itemId)}
      className="btn btn-danger"
    >
      X
    </button>
  );
};  