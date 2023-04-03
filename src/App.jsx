import "./App.css";
import db from "../db/firebase-config";
import { useState, useEffect } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import ListItems from "./components/ListItems";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";

function App() {
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "items");
  const [loading, setLoading] = useState(true);

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsCollectionRef);
    setItems(
      itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setLoading(false);
  };

  const deleteItem= async (id) => {
    const docRer = doc(db, "items", id);
    await deleteDoc(docRef);
    getItems();
  };

  useEffect(() => {
    getItems();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>OM SHOP</h1>} />
        <Route
          path="/items"
          element={
            <ListItems
              items={items}
              setItems={setItems}
              deleteItem={deleteItem}
            />
          }
        />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="/404" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;