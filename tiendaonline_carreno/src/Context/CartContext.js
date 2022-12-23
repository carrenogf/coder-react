import { createContext, useState, useEffect } from "react";
import {getFirestore,collection,addDoc,serverTimestamp,updateDoc,doc} from "firebase/firestore";


export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
    const [productsAdded, setProductsAdded] = useState([]);
    const [totalCompra,setTotalCompra] = useState(0);
    const db = getFirestore();
    const ventasCollection =  collection(db,'ventas');

    // calcula el total del carrito
    useEffect(()=>{
      setTotalCompra(productsAdded.reduce((total,p)=>total+p.item.price*p.quantityAdded,0));
    },[productsAdded])

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
        );
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

    function actualizarStock(productsAdded){
      productsAdded.map((product)=>{
        updateDoc(doc(db,"items",product.item.id),{stock:product.item.stock-product.quantityAdded})
      })
    }

    function finalizarCompra(productsAdded,totalCompra,values) {
      addDoc(ventasCollection,{
        comprador:values,
        items:productsAdded,
        total:totalCompra,
        date:serverTimestamp()
      })
      actualizarStock(productsAdded);

    };

    return (
      <CartContext.Provider
        value={{ addItem, removeItem, clear, isInCart, productsAdded,totalCompra,finalizarCompra}}
      >
        {children}
      </CartContext.Provider>
    );
  };