import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./ItemCount.css";

export default function ItemCount({ add, remove, onAdd, count }) {
  return (
    <Box
      className="box"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        width: 200,
        height: 200,
        ml: 2,
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        className="setBotones"
        variant="contained"
        aria-label="outlined button group"
      >
        <Button onClick={remove}>-</Button>
        <Button variant="outlined" disabled>
          <div id="contador">{count}</div>
        </Button>
        <Button onClick={add}>+</Button>
      </ButtonGroup>
      <Button
        onClick={() => onAdd(count)}
        className="agregarCarrito"
        variant="contained"
      >
        Agregar
      </Button>

      <Link to="/Cart">
        <Button className="irAlCarro" variant="contained">
          Ir al Carro
        </Button>
      </Link>
    </Box>
  );
}
