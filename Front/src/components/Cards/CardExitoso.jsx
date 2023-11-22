import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import LogoSvg from "../../assets/LogoBlanco.svg"
import Logocheck from "../../assets/check.svg"


export const CardExitosa = () => {
  return (
    <Card sx={{ width: 270, height: 130, borderRadius: 5, backgroundColor: "#171E23" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", marginTop:"8px", alignItems:"center" }}>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", marginBottom:"20px" }}>
          <Box>
          <img src={LogoSvg} alt="Logo" style={{ height: 43, width: 43 }} />
          <img src={Logocheck} alt="Logo" style={{ height: 40, width: 40, marginBottom:"5px" }} />
          
          </Box>
          <Typography sx={{color:"white", fontWeight:"400", fontSize:"20px"}}>
            Cita exitosa!
          </Typography>
        </Box>

        <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
            <Typography sx={{textAlign:"center", color:"white", fontWeight:"400", fontSize:"13px"}}>
            Dom. 9 de Julio 2023
            </Typography>
        </Box>
        
      </CardContent>
    </Card>
  );
};