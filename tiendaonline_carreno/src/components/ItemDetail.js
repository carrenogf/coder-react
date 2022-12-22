import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from '../Context/CartContext';
import { ItemCount } from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <div className="row">
      <div className="p-5 col-6 text-center">
        <img className="img-fluid" src={item.img} alt={item.name} />
      </div>
      <div className="p-5 col-6">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <span>
          Precio: <strong >${item.price}</strong>
        </span>
        {currentStock > 0 && (
          <p >En Stock: {currentStock}</p>
        )}

        <div className="text-center">
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span>Sin stock</span>
          )}
          <div>
            <button
              onClick={handleAdd}
              disabled={currentStock === 0}
              className="btn btn-primary border m-2"
            >
              Agregar al carrito
            </button>
            <button
              onClick={handleCheckout}
              className="btn btn-success border m-2"
            >
              Finalizar Compra
            </button>
            <Link to="/" className="btn btn-dark border">Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;