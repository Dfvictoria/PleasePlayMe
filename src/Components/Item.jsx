//@ts-check

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Item(dataProductos) {
  return (
    <div>
      <Card
        sx={{ minWidth: 345, maxWidth: 345, minHeight: 300, maxHeight: 345 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={dataProductos.image}
            alt={dataProductos.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titulo"
            >
              {dataProductos.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              className="descripcion"
            >
              {dataProductos.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="precio">${dataProductos.price}</div>
      </Card>
    </div>
  );
}
