import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {doc,getDoc, getFirestore} from "firebase/firestore"
const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const {id} = useParams()
  useEffect( ()=> {
    const db = getFirestore();
    const itemRef = doc(db,'items',id);
    getDoc(itemRef).then((snapshot)=>{
      if(snapshot.exists()){
        setItem({id:id,...snapshot.data()});
      }
    });

  },[]);
  if (!item) {
    return <p>Loading...</p>;
  }
  return <ItemDetail item={item} />
};
export default ItemDetailContainer;