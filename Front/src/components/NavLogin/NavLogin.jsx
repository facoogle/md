import React from 'react';
import { AppBar, Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


import LogoLogged from "../../assets/LogoLogin.png"



export const NavBarLogin = () => {

  const userData = localStorage.getItem('userData');
    const token = userData ? JSON.parse(userData).user : null;
    const decoded = token ? JSON.parse(atob(token.split('.')[1])) : null;
    const decodedUser = decoded?.user;

    console.log(decodedUser, "MORE !")

    const cerrarSesion = () => {
        localStorage.removeItem("userData");
        window.location.href = "/admin";
      };


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
        <Box sx={{ display: "flex", alignItems: "center", marginLeft:"5%", alignItems:"center" }}>
          
          <img style={{width:"48px", height:"48px", borderRadius:"48px", border:"1px solid white"}} src={decodedUser?.imgPerfil?decodedUser.imgPerfil:LogoLogged} alt="" />
        <Typography sx={{color:"white", marginLeft:"8px"}}>
          {decodedUser?.username?decodedUser.username:"Admin"} - Panel
        </Typography>
       
        </Box>

        

        <Box sx={{ display: "flex", alignItems: "center", marginRight:"5%" }}>
        <div style={{marginRight:"18px", cursor: 'pointer'}}>
            <Box>
                <Typography fontSize={"16px"}>
                <RouterLink to="/admin/editor" style={{ textDecoration: 'none', color: 'white' }}>
                    Mis Blogs
                    </RouterLink>
                </Typography>
            </Box>
        </div>
        <div style={{marginRight:"38px", cursor: 'pointer'}}>
            <Box>
                <Typography fontSize={"16px"}>
                <RouterLink to="/admin/blogcreator" style={{ textDecoration: 'none', color: 'white' }}>
                    Crear Blog
                    </RouterLink>
                </Typography>
            </Box>
        </div>

          <Button
          onClick={cerrarSesion}
            component={RouterLink}
            to="/registro"
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "20.46px",
              letterSpacing: "-2%",
              textAlign: "center",
              background:"white",
              color:"black"
            }}
          >
            Cerrar Sesion
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};