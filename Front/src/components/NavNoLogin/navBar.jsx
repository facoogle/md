import React from 'react';
import { AppBar, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import NavLogo from './../../assets/Logo_PXBR_Blanco-09.webp';

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Box
        sx={{
          display: "flex",
          background: "#150F24",
          height: "61px",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", marginLeft:"5%" }}>
          
          <span
            style={{
              color: "#fff",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "37.78px",
              letterSpacing: "-2%",
              textAlign: "center",
              
            }}
          >
            GENLIFE PANEL 
           
      </span>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginRight:"5%" }}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "20.46px",
              letterSpacing: "-2%",
              textAlign: "center",
              background:"#AF212D",
              color:"white"
            }}
          >
            WEB
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};



