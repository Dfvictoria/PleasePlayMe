//@ts-check

import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import dataProductos from "../Components/dataProductos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const mockAsync = new Promise((res) => {
      setTimeout(() => {
        res(dataProductos);
        mockAsync.then((res) => {
          if (id == undefined) {
            setProductos(res);
          }
          else {
            let productosFiltrados = dataProductos.filter(
              (productos) => productos.category == id
            );
            // @ts-ignore
            setProductos(productosFiltrados);
          }
        });
      }, 2000);
    });
  }, [id]);

  // @ts-ignore
  return <ItemList productos={productos} />;
}

export default ItemListContainer;
