import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ItemDetail(Item, precio) {
  console.log();
  return (
    <div>
      <Card sx={{ minWidth: 345, maxWidth: 345, minHeight: 300 }}>
        <CardActionArea>
          <CardMedia 
            component="img"
            height="140"
            image=""
            alt=""
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titulo"
            >
              {Item.titulo}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              className="descripcion"
            >
              {Item.descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="precio">${Item.precio}</div>

      </Card>
      
    </div>
  )
  
}

export default ItemDetail