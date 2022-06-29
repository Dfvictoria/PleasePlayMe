import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import "./ItemDetail.css";
import Box from "@mui/material/Box";

export default function ItemDetail(item) {

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
        <Typography variant="h5" component="div" id="ItemDetailContainerTitle">{item.title}</Typography>
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
          <Button size="small" id="ItemDetailContainerAgregar">
            Agregar
          </Button>
        </CardActions>
      </CardContent>
    </React.Fragment>
    
  );
  
}