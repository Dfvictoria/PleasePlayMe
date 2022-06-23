//@ts-check

import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer() {
  const [Item, setItem] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("../../productos.json")
        .then((response) => response.json())
        .then (Item => {setItem(Item.productos)})
    }, 2000);
  }, []);

return (
  <div>
    {Item.map((Item)=>{
      return (
        <div>
          <ItemDetail key={Item.id} titulo={Item.titulo} descripcion={Item.descripcion} precio={Item.precio} imagen={Item.imagen} />
        </div>
      )
    })}
  </div>
)

}