import { Link } from "react-router-dom";
const Item = ({ product }) => {
  const linkItem = `/item/${product.id}`
  return (
    <Link to={linkItem} className="text-dark text-decoration-none" >
      <div className="d-flex flex-column justify-content-center align-items-center border m-2">
        <div className="p-2">
          <div 
            className="d-flex align-items-center justify-content-center border" 
            style={{
              "width":"200px",
              "height": "200px",
              "overflow": "hidden"
                    }}
            >
            <img src={product.img} alt="Product" />
          </div>
        </div>
        <p>{product.name}</p>
        <p>Precio: ${product.price}</p>
      </div>
    </Link>
  );
};

export default Item;