import { useEffect, useState } from "react";
import {items} from "../mocks/item.mock"
import ItemList from "./Itemlist"
import { useParams } from "react-router-dom";
import {collection,getDocs, getFirestore, query, where} from "firebase/firestore"
import { querystring } from "@firebase/util";

function capitalizar(str) {
  return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const ItemListContainer = ()=>{
  const {category} = useParams();
  const [products, setProducts] = useState([]);

  // firebase
  useEffect(()=>{
    const db = getFirestore();
    let itemsCollection = collection(db,'items');
    if (category){itemsCollection = query(itemsCollection,where("category","==",category))}
    getDocs(itemsCollection).then((snapshot)=>{
      const products = snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}));
      setProducts(products)})

  },[category]);

    // consulta 1 producto
    // const itemRef = doc(db,'items','3L4MZ8x6Lgi385YXjd94')
    // getDoc(itemRef).then((snapshot)=>{
    //   if(snapshot.exists()){
    //     setProducts([{id:'3L4MZ8x6Lgi385YXjd94',...snapshot.data()}]);
    //   }
    // });

  // useEffect(()=>{
  //   new Promise((resolve)=>
  //     setTimeout(()=>{
  //       resolve(items);
  //     },2000)
  //   ).then((data)=>{
  //     if (category){
  //       const categories = data.filter(obj => obj.category===category);
  //       setProducts(categories);
  //     }else{
  //       setProducts(data)}
  //     });
  // },[category]);
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