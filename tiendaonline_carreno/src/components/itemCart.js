import { Link } from "react-router-dom";
export const ItemCart = ({ product,quantityAdded }) => {
  const linkItem = `/item/${product.id}`
  return (
    <Link to={linkItem} className="text-dark text-decoration-none" >
      <div className="d-flex flex-row">
        <div className="border p-2 d-flex align-items-center">
          <div 
            className="d-flex justify-content-center border" 
            style={{
              "width":"100px",
              "height": "100px",
              "overflow": "hidden"
            }}
            >
            <img src={product.img} alt="Product" />
          </div>
        </div>
        <div className="p-3">
          <h5>{product.name}</h5>
          <p>Cantidad: {quantityAdded}</p>
          <p>Precio: ${product.price}</p>
        </div>
      </div>
    </Link>
  );
};