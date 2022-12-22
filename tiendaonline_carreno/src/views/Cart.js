import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import  Item  from "../components/Item";
import { Layout } from "../components/Layout";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from '../Context/CartContext';

const CartView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { productsAdded, clear } = useContext(CartContext);
  console.log(productsAdded)
  const handleFinalizePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
      clear();
      setIsLoading(false);
      alert("Compra finalizada");
      navigate("/");
    }, 2000);
  };

  return (
    <Layout>
      <div>
        {productsAdded.length === 0 ? (
          <div>
            <h1 >No has agregado productos</h1>
          </div>
        ) : (
          <div>
            <div>
              {productsAdded.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div className="relative">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end mt-4">
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <button
                  onClick={handleFinalizePurchase}
                >
                  Finalizar Compra
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;