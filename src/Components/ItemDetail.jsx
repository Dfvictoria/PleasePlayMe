import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import "./ItemDetail.css";
import Box from "@mui/material/Box";

function ItemDetail(Item) {
  return (
    <React.Fragment>
      <Box
        className="ItemDetailImagen"
        component="img"
        alt={Item.titulo}
        src={Item.imagen}
      />
      <CardContent className="ItemDetailContainer">
        <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
          {Item.titulo}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography
          id="ItemDetailContainerPrecio"
          sx={{ mb: 1.5, fontSize: 30 }}
          color="text.secondary"
        >
          ${Item.precio}
        </Typography>
        <Typography className="ItemDetailContainerDescripcion" variant="body2">
          {Item.descripcion}
        </Typography>
        <CardActions>
          <Button size="small" id="ItemDetailContainerAgregar">
            Agregar
          </Button>
        </CardActions>
      </CardContent>
    </React.Fragment>
  );
}

export default ItemDetail;