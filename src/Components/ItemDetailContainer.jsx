//@ts-check

import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer() {
  const [Item, setItem] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("../../productos.json")
        .then((response) => response.json())
        .then (Item => {setItem(Item)})
    }, 2000);
  }, []);

return (
  <ItemDetail precio={Item.precio}/>
)

}
