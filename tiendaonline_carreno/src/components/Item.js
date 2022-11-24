import { Link } from "react-router-dom";
const Item = ({ product }) => {
  const linkItem = `/item/${product.id}`
  return (
    <Link to={linkItem} className="text-decoration-none" >
      <div className="d-flex flex-column justify-content-center align-items-center border m-2">
        <img src={product.img} className="w-20 h-20" alt="Product" />
        <p>{product.name}</p>
        <p>Precio; ${product.price}</p>
      </div>
    </Link>
  );
};

export default Item;