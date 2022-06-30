//@ts-check

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function Item(Item) {
  return (
    <div>
      <Card
        sx={{ minWidth: 345, maxWidth: 380, minHeight: 300, maxHeight: 380 }}
      >
        <CardActionArea>
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            to={`/item/${Item.id}`}
          >
            <CardMedia
              component="img"
              height="140"
              image={Item.image}
              alt={Item.title}
            />
          </Link>

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="titulo"
            >
              {Item.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              className="descripcion"
            >
              {Item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="precio">${Item.price}</div>
      </Card>
    </div>
  );
}
