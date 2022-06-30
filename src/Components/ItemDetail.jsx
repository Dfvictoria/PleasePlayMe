import React, {useState} from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import "./ItemDetail.css";
import Box from "@mui/material/Box";
import ItemCount from "./ItemCount";

export default function ItemDetail(item) {

  const [count, setCount] = useState(1);
  console.log(item.stock);
  const add = () => {
    if (count < item.stock) {
      setCount(count + 1);
    }
    if (count==item.stock) {
      alert('No hay más stock de este producto')
    }
  };

  const remove = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  const onAdd = (count) => {
    alert ('Quiero agregar ' + count + " de " + item.title)
  }

  return (
    <React.Fragment>
      <Box
        className="ItemDetailImagen"
        component="img"
        alt={item.title}
        src={item.image}
      />

      <CardContent className="ItemDetailContainer">
        <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
          {item.titulo}
        </Typography>
        <Typography variant="h5" component="div" id="ItemDetailContainerTitle">
          {item.title}
        </Typography>
        <Typography
          id="ItemDetailContainerPrecio"
          sx={{ mb: 1.5, fontSize: 30 }}
          color="text.secondary"
        >
          ${item.price}
        </Typography>
        <Typography className="ItemDetailContainerDescripcion" variant="body1">
          {item.description}
        </Typography>
        <CardActions>
          <ItemCount add = {add} remove={remove} count={count} onAdd={onAdd} />
        </CardActions>
      </CardContent>
    </React.Fragment>
  );
}
