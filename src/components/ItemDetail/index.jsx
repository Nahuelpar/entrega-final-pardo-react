import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import db from "../../../db/firebase-config";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const getItem = async (id) => {
    const docRef = doc(db, "items", id);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setItem(docSnap.data());
    } else {
      setItem(null);
    }
  };

  useEffect(() => {
    getItem(id);
  }, [id]);

  if (!item) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <h3>{item.description}</h3>
      <h3>$ {item.price}</h3>
    </div>
  );
};

export default ItemDetail;