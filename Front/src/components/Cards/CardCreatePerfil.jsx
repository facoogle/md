import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import LogoSvg from "../../assets/Logo.svg"

export const CardCreatePerfil = () => {
  return (
    <Card sx={{ width: 370, height: 140, borderRadius: 5, backgroundColor: "#171E23" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", marginTop:"8px" }}>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
          <img src={LogoSvg} alt="Logo" style={{ height: 43, width: 43 }} />
          <TextField
            label="Nombre"
            variant="outlined"
            InputLabelProps={{ style: { display: "flex", color: '#000000', marginTop: "-12px" } }}
            InputProps={{
              sx: {
                '& fieldset': {
                  border: 'none',
                  height: 28
                },
                '& input': {
                  padding: '6px 12px' // Ajusta el padding del texto dentro del campo
                }
              },
            }}
            sx={{ backgroundColor: '#FFFFFF', borderRadius: "5px", width: 126, height: 28 }}
          />
          <TextField
            label="Apellido"
            variant="outlined"
            InputLabelProps={{ style: { display: "flex", color: '#000000', marginTop: "-12px" } }}
            InputProps={{
              sx: {
                '& fieldset': {
                  border: 'none',
                  height: 28,
                  marginTop: "-80px"
                },
                '& input': {
                  padding: '6px 12px' // Ajusta el padding del texto dentro del campo
                }
              },
            }}
            sx={{ backgroundColor: '#FFFFFF', borderRadius: "5px", width: 126, height: 28, border: "none" }}
          />
        </Box>
        <Button
          variant="contained"
          color="error"
          sx={{ width: 114, height: 28, fontSize: 13, fontWeight: 400, color: '#FFFFFF', marginTop: 4, marginLeft: 'auto', }}
        >
          Crear Perfil
        </Button>
      </CardContent>
    </Card>
  );
};





