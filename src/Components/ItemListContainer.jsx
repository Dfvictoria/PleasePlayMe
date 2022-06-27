import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import dataProductos from "../Components/dataProductos";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const mockAsync = new Promise((res) => {
      setTimeout(() => {
        res(dataProductos);
        mockAsync.then((res) => {
          setProductos(res);
        });
      }, 2000);
    });
  }, []);

  return <ItemList productos={productos} />;
}

export default ItemListContainer;
