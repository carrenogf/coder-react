import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {items as itemMock} from "../mocks/item.mock"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const {id} = useParams()
  useEffect( ()=> {
    new Promise((resolve)=> setTimeout(()=> resolve(itemMock[0]),2000)).then(
      (data) =>{if (id){
        const itemId = itemMock.find(obj => obj.id==id);
        setItem(itemId);
      }else{
        setItem(data)
      }} 
    );
  },[]);
  if (!item) {
    return <p>Loading...</p>;
  }
  return <ItemDetail item={item} />

};
export default ItemDetailContainer;