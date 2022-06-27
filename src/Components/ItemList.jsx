//@ts-check
import Item from "./Item";
import "../Components/Item.css";

export default function ItemList({ productos }) {
  return (
    <div>
      {productos.map((dataProductos) => {
        console.log(dataProductos.image);
        return (
          <div className="divProductos">
            <Item
              key={dataProductos.id}
              title={dataProductos.title}
              description={dataProductos.description}
              price={dataProductos.price}
              image={dataProductos.imageUrl}
              category={dataProductos.category}
            />
          </div>
        );
      })}
    </div>
  );
}
