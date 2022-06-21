//@ts-check

import React, { useEffect, useState } from "react";
import Item from "./Item";
import "../Components/Item.css";
import dataProductos from "./dataProductos";

export default function ItemList() {
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

  return (
    <div>
      {productos.map((dataProductos) => {
        return (
          <div className="divProductos">
            <Item key= {dataProductos.id} title= {dataProductos.title} description= {dataProductos.description} price={dataProductos.price} image={dataProductos.imageUrl}  />
          </div>
        );
      })}
    </div>
  );
}
