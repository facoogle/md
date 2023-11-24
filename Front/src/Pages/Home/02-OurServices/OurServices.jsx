import React from 'react';
import { Box, Grid,Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom"
import "./custom.css"

import img1 from "../../../assets/services/portada1.svg"
import img2 from "../../../assets/services/portada2.svg"
import img3 from "../../../assets/services/portada3.svg"
import img4 from "../../../assets/services/portada4.png"



export const OurServices = () => {
const is1440 = useMediaQuery('(max-width:1440px)');
const is1110 = useMediaQuery('(max-width:1110px)');
const is1024 = useMediaQuery('(max-width:1024px)');
const is600 = useMediaQuery('(max-width:600px)');






  return (
    <Box sx={{marginTop:is600?"66px":"50px"}}>
        {/* Cuatro cuadrados juntos */}
        {is1024?
        (is600?
        <>
        {/* -------------------MOBILE MOBILE MOBILE------------ */}
        <Box>

        <Box sx={{display:"flex", width:"100%", justifyContent:"center", marginBottom:"24px"}}>
                    <Box sx={{display:"flex",width:"100%" ,maxWidth:"1440px", flexDirection:"column"}}>
            <Typography data-aos="fade-right" data-aos-offset="-30" data-aos-duration={800}  data-aos-delay="200" sx={{marginLeft:"5%",color:"#1A202C", fontFamily:"Ubuntu", fontSize:"40px", fontWeight:"500",lineHeight:"normal",textTransform:"uppercase"}}>
            OUR SERVICES
        </Typography> 
        <Box
        data-aos="fade-right" data-aos-offset="-30" data-aos-duration={1500}  data-aos-delay="200"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"93%":"49.5%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"50px"
                  }}
                />
        </Box>
        </Box>
        
        <Grid sx={{display:"flex", justifyContent:"center", marginTop:"36px"}}>
    <Box sx={{display:"flex", justifyContent:"center", width:"1440px", marginInline:is1024?"3%":"4%"}}>
        <Box sx={{ width:"100%",display:"flex", justifyContent:"center",}}>
    <Grid container justifyContent="center" spacing={2} width={"100%"} maxWidth={is1440?"714px":"714px"}>
    {/* Cuatro cuadrados juntos */}

   

    <Grid item xs={12} md={4} lg={4} sx={{width:"100%",  height:"250px",}}>

<Link to="/services" style={{ textDecoration: 'none' }}>     
 <div data-aos="fade-down-right" data-aos-offset="-30" data-aos-duration={500}  data-aos-delay="100"  style={{  display: "flex", flexDirection: "column", alignItems: "center", width: '100%', height: "250px", borderRadius: "8px"}}>
     <div style={{background:"#D9D9D9", padding:"30px", borderRadius:"50%", filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", marginBottom:"20px"}}>

     <img src={img1}  alt="img" style={{ width:"99px", marginBottom:"8px"}} />
     </div>
     <Typography sx={{marginBottom:"24px", maxWidth:"230px",color:"#423E3F", textAlign:"center", fontFamily:"Rubik", fontSize:"24px", fontWeight:500,lineHeight:"normal"}}>
     Despachos Nacionales
     </Typography>

     
 </div>
 </Link>

 </Grid>

 <Grid item xs={12} md={4} lg={4} sx={{width:"100%",  height:"250px",}}>

   <Link to="/services" style={{ textDecoration: 'none' }}>     
    <div data-aos="fade-down-right" data-aos-offset="-30" data-aos-duration={500}  data-aos-delay="100"  style={{  display: "flex", flexDirection: "column", alignItems: "center", width: '100%', height: "250px", borderRadius: "8px"}}>
        <div style={{background:"#D9D9D9", padding:"30px", borderRadius:"50%", filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", marginBottom:"20px"}}>

        <img src={img1}  alt="img" style={{ width:"99px", marginBottom:"8px"}} />
        </div>
        <Typography sx={{marginBottom:"24px", maxWidth:"260px",color:"#423E3F", textAlign:"center", fontFamily:"Rubik", fontSize:"24px", fontWeight:500,lineHeight:"normal"}}>
        Servicio Personalizado
        </Typography>

        
    </div>
    </Link>

    </Grid>

    <Grid item xs={12} md={4} lg={4} sx={{width:"100%",  height:"250px",}}>

   <Link to="/services" style={{ textDecoration: 'none' }}>     
    <div data-aos="fade-down-right" data-aos-offset="-30" data-aos-duration={500}  data-aos-delay="100"  style={{  display: "flex", flexDirection: "column", alignItems: "center", width: '100%', height: "250px", borderRadius: "8px"}}>
        <div style={{background:"#D9D9D9", padding:"30px", borderRadius:"50%", filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", marginBottom:"20px"}}>

        <img src={img1}  alt="img" style={{ width:"99px", marginBottom:"8px"}} />
        </div>
        <Typography sx={{marginBottom:"24px", maxWidth:"200px",color:"#423E3F", textAlign:"center", fontFamily:"Rubik", fontSize:"24px", fontWeight:500,lineHeight:"normal"}}>
        Respaldo Jurídico
        </Typography>

        
    </div>
    </Link>

    </Grid>

    

    

    

  </Grid>
  </Box>
  </Box>


  </Grid>

  <Link to="/about" style={{ textDecoration: 'none' }}> 
  <Box sx={{display:"flex", justifyContent:"center", background:"", marginTop:"40px"}}>
                <Button data-aos="fade" data-aos-offset="0" data-aos-duration={1500}  data-aos-delay="150"  sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}} variant="outlined" color="primary">
                      Sobre Nosotros
                     </Button>
  </Box>
  </Link>

        </Box></>
        :
        <>


        {/* -------------------TABLET TABLET TABLET------------ */}
            <Box>
            <Box sx={{display:"flex", width:"100%", justifyContent:"center", marginBottom:"24px"}}>
                    <Box sx={{display:"flex",width:"100%" ,maxWidth:"1440px", flexDirection:"column"}}>
            {/* <Typography data-aos="fade-right" data-aos-offset="-100" data-aos-duration={800}  data-aos-delay="300" sx={{marginLeft:"5%",color:"#1A202C", fontFamily:"Ubuntu", fontSize:"36px", fontWeight:"500",lineHeight:"normal",textTransform:"uppercase"}}>
            OUR SERVICES
        </Typography> 

        <Box
        data-aos="fade-right" data-aos-offset="-50" data-aos-duration={2000} data-aos-easing="ease-in-sine" data-aos-delay="300"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"80%":"49.5%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"50px"
                  }}
                /> */}
        
        </Box>
        </Box>

              

        <Grid sx={{display:"flex", justifyContent:"center", marginTop:"44px"}}>
    <Box sx={{display:"flex", justifyContent:"center", width:"1440px", marginInline:is1024?"3%":"4%"}}>
        <Box sx={{ width:"100%",display:"flex", justifyContent:"center",}}>
    <Grid container justifyContent="center" spacing={2} width={"100%"} maxWidth={is1440?"714px":"714px"}>
    {/* Cuatro cuadrados juntos */}

    <Grid item xs={4} md={4} lg={4} sx={{width:"100%",  height:"250px",}}>

   <Link to="/services" style={{ textDecoration: 'none' }}>     
    <div data-aos="fade-down-right" data-aos-offset="-30" data-aos-duration={500}  data-aos-delay="100"  style={{  display: "flex", flexDirection: "column", alignItems: "center", width: '100%', height: "250px", borderRadius: "8px"}}>
        <div style={{background:"#D9D9D9", padding:"30px", borderRadius:"50%", filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", marginBottom:"20px"}}>

        <img src={img1}  alt="img" style={{ width:"99px", marginBottom:"8px"}} />
        </div>
        <Typography sx={{marginBottom:"24px", maxWidth:"200px",color:"#423E3F", textAlign:"center", fontFamily:"Rubik", fontSize:"24px", fontWeight:500,lineHeight:"normal"}}>
        Respaldo Jurídico
        </Typography>

        
    </div>
    </Link>

    </Grid>

    <Grid item xs={4} md={4} lg={4} sx={{width:"100%",  height:"250px",}}>

   <Link to="/services" style={{ textDecoration: 'none' }}>     
    <div data-aos="fade-down" data-aos-offset="-30" data-aos-duration={500}  data-aos-delay="100"  style={{  display: "flex", flexDirection: "column", alignItems: "center", width: '100%', height: "250px", borderRadius: "8px"}}>
        <div style={{background:"#D9D9D9", padding:"30px", borderRadius:"50%", filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", marginBottom:"20px"}}>

        <img src={img1}  alt="img" style={{ width:"99px", marginBottom:"8px"}} />
        </div>
        <Typography sx={{marginBottom:"24px", maxWidth:"260px",color:"#423E3F", textAlign:"center", fontFamily:"Rubik", fontSize:"24px", fontWeight:500,lineHeight:"normal"}}>
        Servicio Personalizado
        </Typography>

        
    </div>
    </Link>

    </Grid>

    

    

    <Grid item xs={4} md={4} lg={4} sx={{width:"100%",  height:"250px",}}>

   <Link to="/services" style={{ textDecoration: 'none' }}>     
    <div data-aos="fade-down-left" data-aos-offset="-30" data-aos-duration={500}  data-aos-delay="100"  style={{  display: "flex", flexDirection: "column", alignItems: "center", width: '100%', height: "250px", borderRadius: "8px"}}>
        <div style={{background:"#D9D9D9", padding:"30px", borderRadius:"50%", filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", marginBottom:"20px"}}>

        <img src={img1}  alt="img" style={{ width:"99px", marginBottom:"8px"}} />
        </div>
        <Typography sx={{marginBottom:"24px", maxWidth:"230px",color:"#423E3F", textAlign:"center", fontFamily:"Rubik", fontSize:"24px", fontWeight:500,lineHeight:"normal"}}>
        Despachos Nacionales
        </Typography>

        
    </div>
    </Link>

    </Grid>

  </Grid>
  </Box>
  </Box>
  </Grid>

  <Link to="/about" style={{ textDecoration: 'none' }}> 
  <Box sx={{display:"flex", justifyContent:"center", background:"", marginTop:"40px"}}>
                <Button data-aos="fade" data-aos-offset="0" data-aos-duration={1500}  data-aos-delay="200" sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}} variant="outlined" color="primary">
                      Sobre nosotros
                     </Button>
  </Box>
  </Link>
       </Box> </>)
        :
        <>


        {/* -------------------DESKTOP DESKTOP DESKTOP------------ */}
            <Box>
                

        <Grid sx={{display:"flex", justifyContent:"center", marginTop:"0px"}}>
    <Box sx={{display:"flex",flexDirection:"column", justifyContent:"center", width:"1440px", marginInline:is1024?"3%":"4%"}}>
        
        
        <Box sx={{ width:"100%",display:"flex", justifyContent:"center",}}>

    <Grid container justifyContent="center" spacing={2} width={"100%"} maxWidth={is1440?"1312px":"1440px"}>
    {/* Cuatro cuadrados juntos */}
    <Grid item xs={12} md={4} lg={4} sx={{width:"100%",  height:"250px",}}>

   <Link to="/services" style={{ textDecoration: 'none' }}>     
    <div data-aos="fade-down-left" data-aos-offset="-30" data-aos-duration={500}  data-aos-delay="100"  style={{  display: "flex", flexDirection: "column", alignItems: "center", width: '100%', height: "250px", borderRadius: "8px"}}>
        <div style={{background:"#D9D9D9", padding:"30px", borderRadius:"50%", filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", marginBottom:"20px"}}>

        <img src={img1}  alt="img" style={{ width:"99px", marginBottom:"8px"}} />
        </div>
        <Typography sx={{marginBottom:"24px", maxWidth:"230px",color:"#423E3F", textAlign:"center", fontFamily:"Rubik", fontSize:"24px", fontWeight:500,lineHeight:"normal"}}>
        Despachos Nacionales
        </Typography>

        
    </div>
    </Link>

    </Grid>
    
    
    <Grid item xs={12} md={4} lg={4} sx={{width:"100%",  height:"250px",}}>

   <Link to="/services" style={{ textDecoration: 'none' }}>     
    <div data-aos="fade-down" data-aos-offset="-30" data-aos-duration={500}  data-aos-delay="100"  style={{  display: "flex", flexDirection: "column", alignItems: "center", width: '100%', height: "250px", borderRadius: "8px"}}>
        <div style={{background:"#D9D9D9", padding:"30px", borderRadius:"50%", filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", marginBottom:"20px"}}>

        <img src={img1}  alt="img" style={{ width:"99px", marginBottom:"8px"}} />
        </div>
        <Typography sx={{marginBottom:"24px", maxWidth:"260px",color:"#423E3F", textAlign:"center", fontFamily:"Rubik", fontSize:"24px", fontWeight:500,lineHeight:"normal"}}>
        Servicio Personalizado
        </Typography>

        
    </div>
    </Link>

    </Grid>

    <Grid item xs={12} md={4} lg={4} sx={{width:"100%",  height:"250px",}}>

   <Link to="/services" style={{ textDecoration: 'none' }}>     
    <div data-aos="fade-down-right" data-aos-offset="-30" data-aos-duration={500}  data-aos-delay="100"  style={{  display: "flex", flexDirection: "column", alignItems: "center", width: '100%', height: "250px", borderRadius: "8px"}}>
        <div style={{background:"#D9D9D9", padding:"30px", borderRadius:"50%", filter:"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", marginBottom:"20px"}}>

        <img src={img1}  alt="img" style={{ width:"99px", marginBottom:"8px"}} />
        </div>
        <Typography sx={{marginBottom:"24px", maxWidth:"200px",color:"#423E3F", textAlign:"center", fontFamily:"Rubik", fontSize:"24px", fontWeight:500,lineHeight:"normal"}}>
        Respaldo Jurídico
        </Typography>

        
    </div>
    </Link>

    </Grid>

  </Grid>
  </Box>
  </Box>
  
  </Grid>
 
  </Box>
        </>}
    
  </Box>
  );
};

