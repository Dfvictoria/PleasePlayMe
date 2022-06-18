import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd }) {
  let [Contador, setContador] = useState(initial);

  function sumar() {
    setContador(++Contador);
  }

  function restar() {
    setContador(--Contador);
  }

  useEffect(() => {
    if (Contador < 1) {
      alert("La cantidad ingresada debe ser mayor a 0");
      setContador(1);
    }

    if (Contador > stock) {
      alert("No hay más stock de este producto");
      setContador(stock);
    }
  }, [Contador, stock]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#DCDCDC",
        width: 200,
        height: 200,
        ml: 2,
        "& > *": {
          m: 1,
        },
      }}
    >
      <div className="itemShop">Bajo Fender Jaguar</div>

      <ButtonGroup
        className="setBotones"
        variant="contained"
        aria-label="outlined button group"
      >
        <Button onClick={restar}>-</Button>
        <Button variant="outlined" disabled>
          <div id="contador">{Contador}</div>
        </Button>
        <Button onClick={sumar}>+</Button>
      </ButtonGroup>
      <Button
        onClick={() => onAdd(Contador)}
        className="agregarCarrito"
        variant="contained"
      >
        Agregar
      </Button>
    </Box>
  );
}
