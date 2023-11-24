import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from "react-router-dom"
import DoctorImg from "../../../assets/services/mount.png"
import zIndex from '@mui/material/styles/zIndex';

import frameimg from "../../../assets/services/frame.png"




export const DrCertification = () => {
    const is1440 = useMediaQuery('(max-width:1440px)');
    const is1024 = useMediaQuery('(max-width:1024px)');
    const is900 = useMediaQuery('(max-width:900px)');

    



    return (
        <div style={{marginBottom:"0px"}}>

            {is900?

            <>

<Grid sx={{ width: "100%", paddingBottom: "180px", paddingTop: "151px", display: "flex", justifyContent: "center" }}>

<Grid
    sx={{
        display: "flex",
        background: "#666666",
        position: "absolute",
        width: "100%",
        maxHeight: "1400px",
        height: "100%", 
        borderRadius: "36px",
        right: 0,
    }}
>
    
</Grid>

<Box sx={{ display: "flex", alignItems: "center",justifyContent:"center", position: "relative", width: "100%", height: "777px", maxWidth: "1440px", maxHeight: "777px" ,zIndex: 50 }}>
    <Grid height={"100%"} sx={{ display: "flex", alignItems: "center",  }} container spacing={0}>
        
        <Grid sx={{ background: "#666666;", display:"flex", paddingTop:"48px", paddingBottom:"48px", paddingInline:"10px", borderRadius:"20px", justifyContent:"center" }} item xs={12}>


            <Box sx={{ width: "100%", display: "flex", background: "", maxWidth: "800px", marginInline:"6%" }}>
                <Box sx={{ background: "", display: "flex", flexDirection: "column" }}>

                    <Typography data-aos="fade" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="200" sx={{textAlign:"center", marginBottom: "21px", color: "#EBEBEB", fontFamily: "Ubuntu", fontSize: "40px", fontWeight: "700", lineHeight: "normal" }}>
                    ACERCA DE MD GLOBAL
                    </Typography>

                    <div data-aos="fade-right" data-aos-offset="-30" data-aos-duration={800}  data-aos-delay="200" style={{display:"flex", alignItems:"center"}}>
                                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                                       • 
                                    </Typography>

                                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                                    Fue establecido con el objetivo de complementar las operaciones de comercio exterior de nuestros clientes a través de un servicio integral, eficiente y personalizado.                                    </Typography>
                                    </div>

                                    <div data-aos="fade-right" data-aos-offset="-30" data-aos-duration={800}  data-aos-delay="400" style={{display:"flex", alignItems:"center"}}>
                                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                                       • 
                                    </Typography>

                                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                                    LLevamos más de 20 años despachando y clasificando mercancías, evolucionando para resolver cualquier necesidad logística.</Typography>
                                    </div>

                    <Box data-aos="fade" data-aos-offset="-30" data-aos-duration={1500}  data-aos-delay="200" sx={{marginBottom:"31px", marginTop:"31px"}}>
                    <img src={DoctorImg} style={{  maxWidth: "100%", height: '100%', objectFit: 'cover' }}>

                    </img>
                    </Box>

                    {/* <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box data-aos="zoom-in" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="300" sx={{ width: "93px" }}>
                                <div style={{ textAlign: 'center' }}>
                                    <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>+40</Typography>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>years in practice</Typography>
                                </div>
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            
                            <div data-aos="zoom-in" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="400" style={{ textAlign: 'center', margin:"" }}>
                                <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>+1250</Typography>
                                <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>patients per year</Typography>
                            </div>
                        </Grid>

                        <Grid sx={{ display: "flex", justifyContent: "flex-end" }} item xs={4}>
                            <Box data-aos="zoom-in" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="500" sx={{ width: "93px" }}>
                                <div style={{ textAlign: 'center' }}>
                                    <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>+40</Typography>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>Diplomas of Excellence</Typography>
                                </div>
                            </Box>
                        </Grid>
                    </Grid> */}

                    {/* <Typography data-aos="fade" data-aos-offset="0" data-aos-duration={1000}  data-aos-delay="300" sx={{marginBottom:"10px", marginTop:"31px",color:"#EBEBEB", fontFamily:"Ubuntu",fontSize:"24px",fontWeight:"700", lineHeight:"normal"}}>
                    CERTIFICATION AND EXPERIENCE
                    </Typography>

                    <div data-aos="fade-right" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="400" style={{display:"flex", alignItems:"center"}}>
                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                       • 
                    </Typography>

                    <Typography  sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                       President, American Academy of Orthopedic Medicine.
                    </Typography>
                    </div> */}


                    {/* <div data-aos="fade-right" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="500" style={{display:"flex", }}>
                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                       • 
                    </Typography>

                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                    Director, AAOM International Hands-On Workshops in Mexico, Ecuador, Argentina, and Peru.
                    </Typography>
                    </div> */}


                    {/* <div data-aos="fade-right" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="600" style={{display:"flex", alignItems:"center"}}>
                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                       • 
                    </Typography>

                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                    Founder and Director, Prolotherapy Centers of the Americas.
                    </Typography>
                    </div> */}


                    {/* <div data-aos="fade-right" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="700" style={{display:"flex", alignItems:"center"}}>
                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                       • 
                    </Typography>

                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                    Board of Directors Member, Florida Academy of Pain Medicine.
                    </Typography>
                    </div> */}

                    {/* <div data-aos="fade-right" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="800" style={{display:"flex", alignItems:"center"}}>
                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                       • 
                    </Typography>

                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                    Medical Advisory Board Member, Regenestem, USA.
                    </Typography>
                    </div> */}
                    {/* <Link to="/about" style={{ textDecoration: 'none' }}> 
                    <Typography sx={{cursor:"pointer",marginleft:"11px", marginTop:"8px",color:"#209D9F", fontSize:"16px", fontFamily:"Rubik", fontWeight:"400"}}>
                        Read More
                    </Typography>
                    </Link> */}

                    <Link to="/form" style={{ textDecoration: 'none' }}> 
                    <Box sx={{display:"flex", width:"100%", justifyContent:"center", marginTop:"14px"}}>
                      <Button data-aos="fade" data-aos-offset="" data-aos-duration={1500}  data-aos-delay="800" sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}} variant="outlined" color="primary">
                      CONTACTAR
                     </Button>
                    </Box>
                    </Link> 

                </Box>

            </Box>
        </Grid>
    </Grid>
</Box>
</Grid>

            </>
            
            :
            
            <>

        


<Box sx={{width:"100%", marginTop:"130px"}}>
<Grid sx={{ width: "100%",background:"", paddingBottom: "20vh", paddingTop: "", display: "flex", justifyContent: "center",position: "relative" }}>
        <Box sx={{background:"",display:"flex"}}>
                <Grid data-aos="fade" data-aos-offset="-30" data-aos-duration={250}  data-aos-delay="100"
                    sx={{
                        display: "flex",
                        background: "#423E3F",
                        position: "absolute",
                        width: is1440?"87.6%":"82%",
                        //maxHeight: "1090px",
                        height: "100%", // Cambiamos 777px a 100vh
                        borderRadius: "64px 0px 0px 64px",
                        right: 0,
                        
                    }}
                >
                    {/* Contenido del Grid */}
                    {/* Puedes colocar aquí lo que desees */}
                </Grid>

                <Box sx={{ display: "flex", alignItems: "center", position: "relative", width: "100%", height: "200px", maxWidth: "1440px", maxHeight: "777px" }}>
                    <Grid height={"100%"} sx={{ display: "flex", alignItems: "center" }} container spacing={12}>
                        {/* Primer elemento que ocupará la mitad del espacio */}
                        <Grid item xs={6} >
                            
                                <img   src={DoctorImg} data-aos="fade-down-left" data-aos-offset="-30" data-aos-duration={500}  data-aos-delay="100"
                                style={{
                                    animationDelay: '2s', 
                                animation:  "fadeIn 0.8s ease", 
                                '@keyframes fadeIn': {
                                '0%': { opacity: 0 ,
                                        filter: "blur(20px)"
                                        },
                                        
                                '10%':{
                                opacity: 1,
                                filter: "brightness(2) blur(10px)"
                                    }
                                }, 
                                maxWidth: is1024?"94%":'100%',
                                height: '30vh', 
                                width:"100%",
                                marginLeft:"-70px",
                                objectFit: 'cover' }}>
                                </img>
                            
                        </Grid>

                        {/* Segundo elemento que ocupará la otra mitad del espacio */}
                        <Grid sx={{ background: "" }} item xs={6}>


                            <Box sx={{ width: "100%", display: "flex", background: "", maxWidth: "564px", marginTop:"5%" }}>
                                <Box sx={{ background: "", display: "flex", flexDirection: "column" }}>

                                    <Typography data-aos="fade" data-aos-offset="-30" data-aos-duration={2500}  data-aos-delay="200" sx={{width:"100%", marginBottom: "0px", color: "#EBEBEB", fontFamily: "Ubuntu", fontSize: "40px", fontWeight: "700", lineHeight: "normal" }}>
                                    ACERCA DE MD GLOBAL
                                    </Typography>

                    

                                    <div data-aos="fade-right" data-aos-offset="-30" data-aos-duration={800}  data-aos-delay="200" style={{display:"flex", alignItems:"center"}}>
                                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                                       • 
                                    </Typography>

                                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                                    Fue establecido con el objetivo de complementar las operaciones de comercio exterior de nuestros clientes a través de un servicio integral, eficiente y personalizado.                                    </Typography>
                                    </div>


                                    <div data-aos="fade-right" data-aos-offset="-30" data-aos-duration={800}  data-aos-delay="400" style={{display:"flex", alignItems:"center"}}>
                                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                                       • 
                                    </Typography>

                                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                                    LLevamos más de 20 años despachando y clasificando mercancías, evolucionando para resolver cualquier necesidad logística.</Typography>
                                    </div>
                                    
                                    

                                    <Link to="/about" style={{ textDecoration: 'none' }}> 
                                    <Box sx={{display:"flex", width:"100%", justifyContent:"center", marginTop:"36px"}}>
                                    <Button data-aos="" data-aos-duration={1400} data-aos-delay="500" variant="contained" sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Rubik", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}}>
                    ADUANAS
                    </Button>
                                    </Box>
                                    </Link> 

                                </Box>

                            </Box>
                        </Grid>
                        
                    </Grid>
                    </Box>
                </Box>
            </Grid>
            </Box>
            </>
            }
            
        </div>
    );
};






