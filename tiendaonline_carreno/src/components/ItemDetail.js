import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h5>{item.name}</h5>
        <p>Detalle del Producto</p>
        <img src={item.img} alt={item.name}  className="border"/>
        <p>{item.description}</p>
        <p>Precio: ${item.price}</p>
        <Link to="/">Volver</Link>
      </div>
    );
  };
  
  export default ItemDetail;