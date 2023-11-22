import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { CardCreatePerfil } from "../components/Cards/CardCreatePerfil";
import { CardProgress } from "../components/Cards/CardProgress";
import { CardExitosa } from "../components/Cards/CardExitoso";
import { CardRechazo } from "../components/Cards/CardRechazada";

export const HomeAdmin = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cards = [<CardProgress />, <CardExitosa />, <CardRechazo />];

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar al siguiente índice de tarjeta
      setCurrentCardIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            background: "#D9D9D9",
            height: "100%",
            maxHeight: "172px",
            minHeight: "172px",
            width: "100%",
            justifyContent: "center",
            paddingTop: "21px",
            paddingBottom: "18px",
          }}
        >
          {/* Mostrar la tarjeta actual según el índice */}
          {cards[currentCardIndex]}
        </Box>
        <Box sx={{ background: "#838383", height: "100%", minHeight: "50vh" }}>
          {/* Contenido del componente Home */}
        </Box>
      </Box>
    </>
  );
};
