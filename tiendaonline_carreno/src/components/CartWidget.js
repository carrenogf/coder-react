import { useContext, useEffect,useState } from "react";
import { CartContext } from '../Context/CartContext';
function CartWidget () {
  const [productsQuantity, setproductsQuantity] = useState(0);
  const { productsAdded} = useContext(CartContext);
  useEffect(()=>{
    setproductsQuantity(productsAdded.reduce((total,p)=>total+p.quantityAdded,0))
    },[productsAdded])
    return(
      <button className="btn btn-primary">
        <i className="bi bi-cart"></i> Carrito {productsQuantity}
      </button>
    ) 
}
export default CartWidget;