import { useEffect, useState } from "react";
import {items} from "../mocks/item.mock"
import ItemList from "./Itemlist"
import { useParams } from "react-router-dom";


function capitalizar(str) {
  return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const ItemListContainer = ()=>{
  const {category} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    new Promise((resolve)=>
      setTimeout(()=>{
        resolve(items);
      },2000)
    ).then((data)=>{
      if (category){
        const categories = data.filter(obj => obj.category===category);
        setProducts(categories);
      }else{
        setProducts(data)}
      });
  },[category]);
  if (products.length === 0){
    return <p>Loading...</p>;
  }
  const titulo = category ? capitalizar(category):"Catalogo Completo"
  return (
    <div className="container">
      <h1>{titulo}</h1>
      <ItemList products ={products}/>
    </div>
  )
};
export default ItemListContainer;