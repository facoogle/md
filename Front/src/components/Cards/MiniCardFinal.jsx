import React from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import SangreImg from "../../assets/services/port.jpg"
import useMediaQuery from '@mui/material/useMediaQuery';



const backgroundStyle = {
  background: `url(${SangreImg})`,
  
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width:"100%",
  borderRadius: '16px',
  height: "221px",
  display: 'flex',
  alignItems:"center",
  padding:"32px",
  
 
  
};

export const MiniCardFinal = ({mar}) => {

  const is1024 = useMediaQuery('(max-width:1024px)');
  const is800 = useMediaQuery('(max-width:800px)');

    return(
<>
      {is1024?(is800?
      <>
      <div style={{ marginInline:mar?"22px":"0px", paddingTop:"60px", paddingBottom:"60px"}}
      >
        <Grid sx={{ display: 'flex', alignItems: 'center' }} container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{display:"flex", flexDirection:"column", background:"", }}>
            <Typography sx={{ color:mar?"white":"#161122", fontFamily:"Rubik", fontSize:"24px", lineHeight:"32px", fontWeight:"400"}}>
            Conoce nuestra herramienta de cotización aduanera. Controla tus costos de importación. Cotiza con inteligencia, ahorra eficazmente.
            </Typography>

            <Typography sx={{marginTop:"8px", color:mar?"white":"#161122", fontFamily:"Ubuntu", fontSize:"24px", lineHeight:"32px", fontWeight:"500", textTransform:"uppercase"}}>
            MD GLOBAL 2023
            </Typography>
            </Box>
          </Grid>
  
          <Grid sx={{ display: 'flex' }} item xs={12}>
            <Box sx={{display:"flex", alignItems:"center", width:"100%", justifyContent:"center"}}>
             <a style={{width:"100%"}} href="/cotizador">
              <Button sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}}>
                COTIZAR
              </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </div>
      </>
      
      :<>
      <div style={backgroundStyle}
      >
        <Grid sx={{ display: 'flex', alignItems: 'center' }} container spacing={3}>
          <Grid item xs={7}>
            <Box sx={{display:"flex", flexDirection:"column", background:"", }}>
            <Typography sx={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 1)", color:"white", fontFamily:"Rubik", fontSize:"24px", lineHeight:"32px", fontWeight:"400"}}>
            Conoce nuestra herramienta de cotización aduanera. Controla tus costos de importación. Cotiza con inteligencia, ahorra eficazmente.
            </Typography>

            <Typography sx={{marginTop:"8px",textShadow: "2px 2px 5px rgba(0, 0, 0, 1)", color:"white", fontFamily:"Ubuntu", fontSize:"24px", lineHeight:"32px", fontWeight:"500", textTransform:"uppercase"}}>
            MD GLOBAL 2023
            </Typography>
            </Box>
          </Grid>
  
          <Grid sx={{ display: 'flex' }} item xs={5}>
            <Box sx={{display:"flex", alignItems:"center", width:"100%", justifyContent:"end"}}>
              <a style={{width:"100%"}} href="/cotizador">
              <Button sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}}>
                COTIZAR
              </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </div>
      
      </>)
      
      
      :
      
      <div style={backgroundStyle}
      >
        <Grid sx={{ display: 'flex', alignItems: 'center' }} container spacing={3}>
          <Grid item xs={8}>
            <Box sx={{display:"flex", flexDirection:"column", background:"", }}>
            <Typography sx={{ color:"white", textShadow: "2px 2px 5px rgba(0, 0, 0, 1)", fontFamily:"Rubik", fontSize:"24px", lineHeight:"32px", fontWeight:"500"}}>
            Conoce nuestra herramienta de cotización aduanera. Controla tus costos de importación. Cotiza con inteligencia, ahorra eficazmente.
            </Typography>

            <Typography sx={{marginTop:"20px",textShadow: "2px 2px 5px rgba(0, 0, 0, 1)", color:"white", fontFamily:"Ubuntu", fontSize:"24px", lineHeight:"32px", fontWeight:"600", textTransform:"uppercase"}}>
            MD GLOBAL 2023
            </Typography>
            </Box>
          </Grid>
  
          <Grid sx={{ display: 'flex' }} item xs={4}>
            <Box sx={{display:"flex", alignItems:"center", width:"100%", justifyContent:"end"}}>
              <a style={{width:"100%"}} href="/cotizador">
              <Button sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}}>
                COTIZAR
              </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </div>
  }

    </>
    )
}