import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Box, CircularProgress  } from '@mui/material';
import LogoSvg from "../../assets/LogoBlanco.svg"
import LogoSvg2 from "../../assets/Logo2.svg"
import PuntitosSvg from "../../assets/puntitos.svg"

export const CardProgress = () => {
  return (
    <Card sx={{ width: 270, height: 80, borderRadius: 5, backgroundColor: "#171E23" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", marginTop:"8px", alignItems:"center" }}>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
          <Box>
          <img src={LogoSvg} alt="Logo" style={{ height: 43, width: 43 }} />
          <img src={LogoSvg2} alt="Logo" style={{ height: 43, width: 43 }} />
          <img  src={PuntitosSvg} alt="Logo" style={{ height: 25, width: 25, position:"absolute", marginLeft:"-34px", marginTop:"10px" }} />
          </Box>
          <Typography sx={{color:"white", fontWeight:"400", fontSize:"20px"}}>
            Cita en proceso
          </Typography>
        </Box>

        <Box sx={{display:"flex", justifyContent:"center", width:"100%"}}>
        <Box sx={{position:"absolute", marginTop:"15px"}}>
        <CircularProgress style={{ color: "#FF5C00" }} thickness={6}/>
        </Box>
        </Box>
        
      </CardContent>
    </Card>
  );
};