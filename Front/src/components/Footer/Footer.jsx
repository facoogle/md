import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import GroupGoogleImg from "../../assets/GroupGoogle.svg"
import LogoGenFooterImg from "../../assets/logoMDGlobal2.png"
import LogosImg from "../../assets/Logos.svg"
import instagramFooterImg from "../../assets/instagramFooter.svg"
import facebookFooterImg from "../../assets/facebookFooter.svg"
import linkedinFooterImg from "../../assets/linkedinFooter.svg"
import LogosFooterTabletImg from "../../assets/LogosFooterTablet.svg"


import useMediaQuery from '@mui/material/useMediaQuery';


export const Footer = () => {

const is1024 = useMediaQuery('(max-width:1024px)');
const is600 = useMediaQuery('(max-width:600px)');
const is450 = useMediaQuery('(max-width:450px)');
  return (
    <div style={{marginTop:"0px"}}>

    {is1024?(is600?
    // ------ Mobile ------
    
    <>

    <Box sx={{display:"flex", justifyContent:"center",  maxHeight:"600px", width:"100%", background:"#150F24"}}>
    <Box sx={{display:"flex", flexDirection:"column",}}>
    <Box sx={{display:"flex", flexDirection:"column", width:"100%"}}>
    
<Box sx={{display:"flex", justifyContent:"center"}}>
    <Box sx={{width:"100%",maxWidth:"227px", display:"flex", flexDirection:"column"}}>
    <Typography
      variant="h6"
      style={{
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        marginTop:"50px",
        color:"#FFF"
      }}
    >
      Follow us
      <span
        style={{
          position: 'absolute',
          bottom: '-16px',
          left: '0',
          width: '100%',
          maxWidth: '227px',
          height: '3px',
          backgroundColor: 'var(--morado, #6252A3)',
        }}
      />
    </Typography>

    <Box sx={{display:"flex", alignItems:"center", width:"100%", maxWidth:"227px", justifyContent:"space-between"}}>
<img style={{width:"27px", marginTop:"27px", marginTop:"30px", cursor:"pointer"}} src={instagramFooterImg}></img>
<img style={{width:"33px", marginTop:"33px", cursor:"pointer"}} src={facebookFooterImg}></img>
<img style={{width:"33px", marginTop:"33px", cursor:"pointer"}} src={linkedinFooterImg}></img>

    </Box>

    
    <Typography
      variant="h6"
      style={{
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        marginTop:"58px",
        color:"#FFF"
      }}
    >
      MD GLOBAL TRADE SERVICES
      <span
        style={{
          position: 'absolute',
          bottom: '-16px',
          left: '0',
          width: '100%',
          maxWidth: '227px',
          height: '3px',
          backgroundColor: 'var(--morado, #6252A3)',
        }}
      />
    </Typography>
    </Box>
    </Box>
    <Box sx={{display:"flex", justifyContent:"center", width:"100%", marginTop:"16px"}}>
    <img style={{width:"29px", marginTop:"29px", cursor:"pointer"}} src={GroupGoogleImg}></img>
    </Box>

    <Typography sx={{textAlign:"center", marginTop:"28px",color:"#FFF", fontFamily:"Plus Jakarta Sans", fontSize:"12px", fontWeight:"600", textTransform:"capitalize"}}> 
    2601 SW 37th Ave, Suite 503
    </Typography>

    

    
    
    </Box>
    
    <Box >
        <img style={{paddingInline:is450?"6%":0,height:"auto", width:"100%", maxWidth:"373px", marginTop:"38px"}} src={LogosImg} alt="LogoGenFooterImg" />
    </Box>

    <Typography sx={{width:"100%", paddingBottom:"14px", textAlign:"center", color:"#FFF", fontFamily:"Montserrat", fontSize:"10px", marginTop:"10px"}}>
            Made with magic by <span> </span>
            <span style={{cursor:"pointer", textDecoration:"underline"}}>
            PlannerTeam
            </span>
    </Typography>
    </Box>
    </Box>
    </>
    
    :
    
    // ----- Tablet --------

    <>
    
    <Box sx={{display:"flex", justifyContent:"center", height:"100%", maxHeight:"293px",background:"#150F24"}}>
<Box sx={{width:"1440px", display:"flex", alignItems:"center", height:"100%"}}>
    <Grid container spacing={0}>
      <Grid item xs={4}>
        <Box sx={{background:"", display:"flex",  alignItems:"center", height:"293px"}}>
    <Box sx={{display:"flex", flexDirection:"column", marginLeft:"13%", width:"100%"}}>
    <Typography
      variant="h6"
      style={{
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        marginTop:"20px",
        color:"#FFF"
      }}
    >
      MD GLOBAL TRADE SERVICES
      <span
        style={{
          position: 'absolute',
          bottom: '-16px',
          left: '0',
          width: '100%',
          maxWidth: '206px',
          height: '3px',
          backgroundColor: 'var(--morado, #6252A3)',
        }}
      />
    </Typography>

    <img style={{width:"48px", marginTop:"30px", cursor:"pointer"}} src={GroupGoogleImg}></img>


    <Typography
      variant="h6"
      style={{
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        marginTop:"34px",
        color:"#FFF"
      }}
    >
      Follow us
      <span
        style={{
          position: 'absolute',
          bottom: '-16px',
          left: '0',
          width: '100%',
          maxWidth: '206px',
          height: '3px',
          backgroundColor: 'var(--morado, #6252A3)',
        }}
      />
    </Typography>

    <Box sx={{display:"flex", alignItems:"center", width:"100%", maxWidth:"206px", justifyContent:"space-between"}}>
<img style={{width:"27px", marginTop:"27px", marginTop:"30px", cursor:"pointer"}} src={instagramFooterImg}></img>
<img style={{width:"33px", marginTop:"33px", cursor:"pointer"}} src={facebookFooterImg}></img>
<img style={{width:"33px", marginTop:"33px", cursor:"pointer"}} src={linkedinFooterImg}></img>

    </Box>
    </Box>
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box sx={{background:"", display:"flex", flexDirection:"column", height:"293px"}}>
            <Box sx={{display:"flex", justifyContent:"center", width:"100%", marginTop:"22px"}}>
            <img style={{height:"53px", width:"158px"}} src={LogoGenFooterImg} alt="LogoGenFooterImg" />
            </Box>

            

            <Typography sx={{width:"100%", textAlign:"center", color:"#FFF", fontFamily:"Montserrat", fontSize:"10px", marginTop:"185px"}}>
            Made with magic by <span> </span>
            <span style={{cursor:"pointer", textDecoration:"underline"}}>
            PlannerTeam
            </span>
            </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
      <Box sx={{background:"", display:"flex",  alignItems:"center", height:"293px", background:"",justifyContent:"end", marginRight:"13%"}}>
    <Box sx={{display:"flex", width:"100%", maxWidth:"204px", background:"", alignItems:"center", justifyContent:"end"}}>
        
        <img src={LogosFooterTabletImg} alt="LogosTablet" />

    </Box>
        </Box>
      </Grid>
    </Grid>
    </Box>
</Box>
    </>)
    
    :
    // ------ Desktop ------

    <Box sx={{display:"flex", justifyContent:"center", height:"100%", maxHeight:"293px", background:"#282828", paddingBottom:"320px"}}>
<Box sx={{width:"1440px", display:"flex", alignItems:"center", height:"100%"}}>
    <Grid container spacing={0}>
      <Grid item xs={5}>
        <Box sx={{background:"", display:"flex",  alignItems:"center", height:"293px"}}>
    <Box sx={{display:"flex", flexDirection:"column", marginLeft:"13%", width:"100%"}}>
    <Typography
      variant="h6"
      style={{
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        
        color:"#FFF"
      }}
    >
      MD GLOBAL TRADE SERVICES
      <span
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '0',
          width: '100%',
          maxWidth: '250px',
          height: '3px',
          backgroundColor: 'var(--morado, #912327)',
        }}
      />
    </Typography>

    <Typography
      variant="h6"
      style={{
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        marginTop:"40px",
        color:"#FFF"
      }}
    >
      Contáctanos a través del chat del sitio web o mándanos un correo a cotiza@mdglobal.com.mx
    </Typography>

    <img style={{width:"200px", marginTop:"30px", cursor:"pointer"}} src={LogoGenFooterImg}></img>

    </Box>
        </Box>
      </Grid>

      <Grid item xs={3}>
        <Box sx={{background:"", display:"flex", flexDirection:"column", height:"293px"}}>
        <Typography variant="h6" style={{marginLeft:"100px",fontFamily: 'Rubik',fontSize: '18px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative',marginTop:"40px", color:"#FFF"}}>
        SERVICIOS
        </Typography>
        <Typography variant="h6" style={{marginLeft:"100px",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative',marginTop:"10px", color:"#FFF"}}>
        Despacho Aduanal MX/USA
        </Typography>
        <Typography variant="h6" style={{marginLeft:"100px",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF"}}>
        Warchcuising 
        </Typography>
        <Typography variant="h6" style={{marginLeft:"100px",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF"}}>
        Auditorias Preventivas 
        </Typography>
        <Typography variant="h6" style={{marginLeft:"100px",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF"}}>
        Permisos / Norms / RRNA 
        </Typography>
        <Typography variant="h6" style={{marginLeft:"100px",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF"}}>
        Comercializadora  
        </Typography>
        <Typography variant="h6" style={{marginLeft:"100px",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF"}}>
        Clasificaciòn Arancelaria 
        </Typography>
        <Typography variant="h6" style={{marginLeft:"100px",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF"}}>
        Atención Personalizada 
        </Typography>
        <Typography variant="h6" style={{marginLeft:"100px",fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF"}}>
        Franquicias 
        </Typography>


          
        </Box>
      </Grid>
      <Grid item xs={4}>
      <Box sx={{background:"", display:"flex",  alignItems:"center", height:"293px", background:"",justifyContent:"end", marginRight:"13%"}}>
    <Box sx={{display:"flex", flexDirection:"column", width:"100%", maxWidth:"204px", background:"", }}>
    <Typography
      variant="h6"
      style={{
        fontFamily: 'Rubik',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '26px',
        position: 'relative',
        marginTop:"17px",
        color:"#FFF"
      }}
    >
      Seguinos en:
      <span
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '0',
          width: '100%',
          maxWidth: '206px',
          height: '3px',
          backgroundColor: 'var(--morado, #912327)',
        }}
      />
    </Typography>

    

    <Box sx={{display:"flex", alignItems:"center", width:"100%", justifyContent:"space-between"}}>
<img style={{width:"27px", marginTop:"27px", marginTop:"30px", cursor:"pointer"}} src={instagramFooterImg}></img>
<img style={{width:"33px", marginTop:"33px", cursor:"pointer"}} src={facebookFooterImg}></img>
<img style={{width:"33px", marginTop:"33px", cursor:"pointer"}} src={linkedinFooterImg}></img>

    </Box>

    <Typography variant="h6" style={{fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF", marginTop:"32px"}}>
        QUIENES SOMOS 
        </Typography>
        <Typography variant="h6" style={{fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF"}}>
        ADUANAS 
        </Typography>
        <Typography variant="h6" style={{fontFamily: 'Rubik',fontSize: '14px',fontStyle: 'normal',fontWeight: 400, lineHeight: '26px',position: 'relative', color:"#FFF"}}>
        CONSULTA EL AVISO DE PRIVACIDAD 
        </Typography>
    

    </Box>
        </Box>
      </Grid>
    </Grid>
    </Box>
</Box>
}

    
    
</div>
  );
};



