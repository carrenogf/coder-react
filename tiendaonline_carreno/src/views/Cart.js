import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCart } from "../components/itemCart";
import { Layout } from "../components/Layout";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from '../Context/CartContext';

const CartView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalCompra,setTotalCompra] = useState(0);
  const navigate = useNavigate();
  const { productsAdded, clear} = useContext(CartContext);
  const handleFinalizePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
      clear();
      setIsLoading(false);
      alert("Compra finalizada");
      navigate("/");
    }, 2000);
  };
  useEffect(()=>{
    setTotalCompra(productsAdded.reduce((total,p)=>total+p.item.price*p.quantityAdded,0));
  },[productsAdded])

  return (
    <Layout>
      <div>
        <h2>Tu Carrito</h2>
        {productsAdded.length === 0 ? (<h1 >No has agregado productos</h1>) : 
        (
          <div className="d-flex flex-column">
            <div>
              {productsAdded.map((product) => {
                const quantityAdded = product.quantityAdded;
                return (
                <div className="d-flex flex-row justify-content-center p-2 border">
                  <ItemCart
                    product={product.item}
                    quantityAdded={quantityAdded}
                  />
                  <TrashWidget itemId={product.item.id} />
                </div>
                );
              })}
            </div>
            <div className="text-center m-2">Total: ${totalCompra}</div>
            <div className="text-center">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <button className="btn btn-success" onClick={handleFinalizePurchase}>Finalizar Compra</button>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;