import { useContext } from "react";
import { CartContext } from '../Context/CartContext';

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  console.log({ itemId });
  return (
    <button
      onClick={() => removeItem(itemId)}
      className="absolute flex justify-center items-center -top-2 -right-2 w-8 h-8 bg-red-200 rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-red-600"
      >
      </svg>
    </button>
  );
};  