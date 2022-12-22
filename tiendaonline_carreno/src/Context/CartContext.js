import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
    const [productsAdded, setProductsAdded] = useState([]);
    function addItem(item, quantity) {
      const isAlreadyAdded = isInCart(item.id);
      if (isAlreadyAdded) {
        setProductsAdded((prevState) =>
          prevState.map((productAdded) =>
            productAdded.item.id === item.id
              ? {
                  ...productAdded,
                  quantityAdded: productAdded.quantityAdded + quantity,
                }
              : productAdded
                  
          )
          
        )
        console.log(productsAdded);
      } else {
        setProductsAdded((prevState) =>
          prevState.concat({ item, quantityAdded: quantity })
        );
      }
      alert(`Se agregó el producto ${item.name}, Cantidad: ${quantity}`)
      
      
    }
  
    function removeItem(itemId) {
      setProductsAdded((prevState) =>
        prevState.filter((product) => product.item.id !== itemId)
      );
    }
  
    function clear() {
      setProductsAdded([]);
    }
  
    function isInCart(itemId) {
      return Boolean(productsAdded.find((product) => product.item.id === itemId));
    }
  
    return (
      <CartContext.Provider
        value={{ addItem, removeItem, clear, isInCart, productsAdded}}
      >
        {children}
      </CartContext.Provider>
    );
  };