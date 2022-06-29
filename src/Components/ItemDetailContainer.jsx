//@ts-check

import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import dataProductos from "./dataProductos.js";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const mockAsync = new Promise((res) => {
      setTimeout(() => {
        res(dataProductos);
        mockAsync.then(() => {
          let productosFiltrados = dataProductos.find((item) => item.id == id);
          // @ts-ignore
          setItem(productosFiltrados);
        });
      }, 2000);
    });
  }, [id]);

  return (
    <div>
      <ItemDetail
        item={item}
        key={
          // @ts-ignore
          item.id
        }
        // @ts-ignore
        title={item.title}
        // @ts-ignore
        image={item.imageVertical}
        // @ts-ignore
        price={item.price}
        // @ts-ignore
        description={item.descriptionLong}
        // @ts-ignore
        category= {item.category}
      ></ItemDetail>
    </div>
  );
}
