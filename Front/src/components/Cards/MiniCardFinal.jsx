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

export const MiniCardFinal = () => {

  const is1024 = useMediaQuery('(max-width:1024px)');
  const is800 = useMediaQuery('(max-width:800px)');

    return(
<>
      {is1024?(is800?
      <>
      <div style={{ marginInline:"32px", paddingTop:"60px", paddingBottom:"60px"}}
      >
        <Grid sx={{ display: 'flex', alignItems: 'center' }} container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{display:"flex", flexDirection:"column", background:"", }}>
            <Typography sx={{ color:"#161122", fontFamily:"Rubik", fontSize:"24px", lineHeight:"32px", fontWeight:"400"}}>
            Avoid surgery whenever possible. Control inflammation smartly, keep your weight down fuel your body right, take control of your hormones.
            </Typography>

            <Typography sx={{marginTop:"8px", color:"#161122", fontFamily:"Ubuntu", fontSize:"24px", lineHeight:"32px", fontWeight:"500", textTransform:"uppercase"}}>
            Dr. Charles Mahl
            </Typography>
            </Box>
          </Grid>
  
          <Grid sx={{ display: 'flex' }} item xs={12}>
            <Box sx={{display:"flex", alignItems:"center", width:"100%", justifyContent:"center"}}>
              <Button sx={{width: "100%",
                  textTransform: "none",
                  maxWidth: "314px",
                  minHeight: "42px",
                  maxHeight: "42px",
                  paddingInline:"24px",
                  borderRadius:"8px",
                  background:"#209D9F",
                  boxShadow:"0px 0px 4px 0px rgba(0, 0, 0, 0.24)",
                  color:"white",
                  fontSize:"16px",
                  fontWeight:"Rubik",
                  fontWeight:"400"
          
                  }}>
                Apply for consultation
              </Button>
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
            Avoid surgery whenever possible. Control inflammation smartly, keep your weight down fuel your body right, take control of your hormones.
            </Typography>

            <Typography sx={{marginTop:"8px",textShadow: "2px 2px 5px rgba(0, 0, 0, 1)", color:"white", fontFamily:"Ubuntu", fontSize:"24px", lineHeight:"32px", fontWeight:"500", textTransform:"uppercase"}}>
            Dr. Charles Mahl
            </Typography>
            </Box>
          </Grid>
  
          <Grid sx={{ display: 'flex' }} item xs={5}>
            <Box sx={{display:"flex", alignItems:"center", width:"100%", justifyContent:"end"}}>
              <Button sx={{width: "100%",
                  textTransform: "none",
                  maxWidth: "370px",
                  minHeight: "42px",
                  maxHeight: "42px",
                  paddingInline:"24px",
                  borderRadius:"8px",
                  background:"#209D9F",
                  boxShadow:"0px 0px 4px 0px rgba(0, 0, 0, 0.24)",
                  color:"white",
                  fontSize:"16px",
                  fontWeight:"Rubik",
                  fontWeight:"400"
          
                  }}>
                Apply for consultation
              </Button>
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
              <Button sx={{width: "100%",
                  textTransform: "none",
                  maxWidth: "314px",
                  minHeight: "42px",
                  maxHeight: "42px",
                  paddingInline:"24px",
                  borderRadius:"8px",
                  background:"#912327",
                  boxShadow:"0px 0px 4px 0px rgba(0, 0, 0, 0.24)",
                  color:"white",
                  fontSize:"16px",
                  fontWeight:"Rubik",
                  fontWeight:"400",
                  
          
                  }}>
                COTIZAR
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
  }

    </>
    )
}