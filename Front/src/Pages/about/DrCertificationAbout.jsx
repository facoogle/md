import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from "react-router-dom"
import DoctorImg from "../../assets/DoctorHome.png"
import zIndex from '@mui/material/styles/zIndex';

import frameimg from "../../assets/services/frame.png"




export const DrCertificationAbout = () => {
    const is1440 = useMediaQuery('(max-width:1440px)');
    const is1024 = useMediaQuery('(max-width:1024px)');
    const is900 = useMediaQuery('(max-width:900px)');

    



    return (
        <div >

            {is900?

            <>

<Grid sx={{ width: "100%", paddingBottom: "130px", paddingTop: "151px", display: "flex", justifyContent: "center" }}>

<Grid
    sx={{
        display: "flex",
        background: "#151023",
        position: "absolute",
        width: "100%",
        maxHeight: "1400px",
        height: "100%", 
        borderRadius: "0px",
        right: 0,
    }}
>
    
</Grid>

<Box sx={{ display: "flex", alignItems: "center",justifyContent:"center", position: "relative", width: "100%", height: "777px", maxWidth: "1440px", maxHeight: "777px" ,zIndex: 50 }}>
    <Box height={"100%"} sx={{ display: "flex", alignItems: "center",  }} >
        
        <Box sx={{ background: "", display:"flex", paddingTop:"48px", paddingBottom:"48px", paddingInline:"0", borderRadius:"20px", justifyContent:"center" }} item xs={12}>


            <Box sx={{ width: "100%", display: "flex", background: "", maxWidth: "800px", marginInline:"" }}>
                <Box sx={{ background: "", display: "flex", flexDirection: "column" }}>

                    <Typography data-aos="fade" data-aos-offset="-30" data-aos-duration={300}  data-aos-delay="100" sx={{textAlign:"start", marginBottom: "21px", color: "#EBEBEB", fontFamily: "Ubuntu", fontSize: "32px", fontWeight: "500", lineHeight: "normal" }}>
                    EDUCATION
                    </Typography>

                    <Typography data-aos="fade" data-aos-offset="-30" data-aos-duration={300}  data-aos-delay="100" sx={{ marginBottom: "31px", color: "#EBEBEB", fontSize: "16px", fontWeight: "400", fontFamily: "Rubik", lineHeight: "normal" }}>
                        Dr. Charles F. Mahl is a renowned expert in Regenerative Orthopedic and Sports Medicine. He trains doctors worldwide, conducts clinical trials, and runs Platelet Rich Plasma Labs in South American hospitals. He treats over 150 physicians and high-profile individuals, specializing in orthobiologics and sports injuries.
                    </Typography>

                    <Box data-aos="fade" data-aos-offset="-30" data-aos-duration={350}  data-aos-delay="100" sx={{marginBottom:"31px"}}>
                    <img src={DoctorImg} style={{  maxWidth: "100%", height: '100%', objectFit: 'cover' }}>

                    </img>
                    </Box>

                    <Grid container spacing={2}>
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
                    </Grid>

                    <Typography data-aos="fade" data-aos-offset="0" data-aos-duration={1000}  data-aos-delay="300" sx={{marginBottom:"10px", marginTop:"31px",color:"#EBEBEB", fontFamily:"Ubuntu",fontSize:"24px",fontWeight:"700", lineHeight:"normal"}}>
                    CERTIFICATION AND EXPERIENCE
                    </Typography>

                    <div data-aos="fade-right" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="400" style={{display:"flex", alignItems:"center"}}>
                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                       • 
                    </Typography>

                    <Typography  sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                       President, American Academy of Orthopedic Medicine.
                    </Typography>
                    </div>


                    <div data-aos="fade-right" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="500" style={{display:"flex", }}>
                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                       • 
                    </Typography>

                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                    Director, AAOM International Hands-On Workshops in Mexico, Ecuador, Argentina, and Peru.
                    </Typography>
                    </div>


                    <div data-aos="fade-right" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="600" style={{display:"flex", alignItems:"center"}}>
                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                       • 
                    </Typography>

                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                    Founder and Director, Prolotherapy Centers of the Americas.
                    </Typography>
                    </div>


                    <div data-aos="fade-right" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="700" style={{display:"flex", alignItems:"center"}}>
                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                       • 
                    </Typography>

                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                    Board of Directors Member, Florida Academy of Pain Medicine.
                    </Typography>
                    </div>

                    <div data-aos="fade-right" data-aos-offset="" data-aos-duration={1000}  data-aos-delay="800" style={{display:"flex", alignItems:"center"}}>
                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                       • 
                    </Typography>

                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                    Medical Advisory Board Member, Regenestem, USA.
                    </Typography>
                    </div>
                    <Link to="/about" style={{ textDecoration: 'none' }}> 
                    <Typography sx={{cursor:"pointer",marginleft:"11px", marginTop:"8px",color:"#209D9F", fontSize:"16px", fontFamily:"Rubik", fontWeight:"400"}}>
                        Read More
                    </Typography>
                    </Link>

                    <Link to="/about" style={{ textDecoration: 'none' }}> 
                    <Box sx={{display:"flex", width:"100%", justifyContent:"center", marginTop:"14px"}}>
                      <Button data-aos="fade" data-aos-offset="" data-aos-duration={1500}  data-aos-delay="800" sx={{color:"#EBEBEB",fontFamily:"Rubik", fontWeight:"400",fontSize:"16px",textTransform:"none", height:"48px", width:"100%",maxWidth:"370px", paddingInline:""}} variant="outlined" color="primary">
                      Contact Dr Mahl
                     </Button>
                    </Box>
                    </Link> 

                </Box>

            </Box>
        </Box>
    </Box>
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
                        background: "#151023",
                        position: "absolute",
                        width: is1440?"87.6%":"82%",
                        //maxHeight: "1090px",
                        height: "100%", // Cambiamos 777px a 100vh
                        borderRadius: "0px 0px 0px 64px",
                        right: 0,
                        
                    }}
                >
                    {/* Contenido del Grid */}
                    {/* Puedes colocar aquí lo que desees */}
                </Grid>

                <Box sx={{ display: "flex", alignItems: "center", position: "relative", width: "100%", height: "777px", maxWidth: "1440px", maxHeight: "777px" }}>
                    <Grid height={"100%"} sx={{ display: "flex", alignItems: "center" }} container spacing={0}>
                        {/* Primer elemento que ocupará la mitad del espacio */}
                        <Grid item xs={6}>
                            <Grid data-aos="fade-right" data-aos-offset="-300" data-aos-duration={500}  data-aos-delay="100" sx={{ marginLeft: is1440 ? "8%" : "0" }}>
                                <img   src={DoctorImg} 
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
                                maxWidth: is1024?"94%":'80%',
                                height: '100%', 
                                objectFit: 'cover' }}>
                                </img>
                            </Grid>
                        </Grid>

                        {/* Segundo elemento que ocupará la otra mitad del espacio */}
                        <Grid sx={{ background: "" }} item xs={6}>


                            <Box sx={{ width: "100%", display: "flex", background: "", maxWidth: "564px", marginTop:"5%" }}>
                                <Box sx={{ background: "", display: "flex", flexDirection: "column" }}>

                                    <Typography data-aos="fade" data-aos-offset="-30" data-aos-duration={2500}  data-aos-delay="200" sx={{width:"434px", marginBottom: "28px", color: "#EBEBEB", fontFamily: "Ubuntu", fontSize: "40px", fontWeight: "700", lineHeight: "normal" }}>
                                        DR. CHARLES F. MAHL MD FACS FICS
                                    </Typography>

                                    <Typography data-aos="fade" data-aos-offset="-30" data-aos-duration={2500}  data-aos-delay="300" sx={{ marginBottom: "56px", color: "#EBEBEB", fontSize: "16px", fontWeight: "400", fontFamily: "Rubik", lineHeight: "normal" }}>
                                        Dr. Charles F. Mahl is a renowned expert in Regenerative Orthopedic and Sports Medicine. He trains doctors worldwide, conducts clinical trials, and runs Platelet Rich Plasma Labs in South American hospitals. He treats over 150 physicians and high-profile individuals, specializing in orthobiologics and sports injuries.
                                    </Typography>

                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <Box sx={{ width: "124px" }}>
                                                <div data-aos="zoom-in" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="300" style={{ textAlign: 'center' }}>
                                                    <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>+40</Typography>
                                                    <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>years in practice</Typography>
                                                </div>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <div data-aos="zoom-in" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="400" style={{ textAlign: 'center' }}>
                                                <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>+1250</Typography>
                                                <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>patients per year</Typography>
                                            </div>
                                        </Grid>

                                        <Grid sx={{ display: "flex", justifyContent: "flex-end" }} item xs={4}>
                                            <Box sx={{ width: "124px" }}>
                                                <div data-aos="zoom-in" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="500" style={{ textAlign: 'center' }}>
                                                    <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>+40</Typography>
                                                    <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>Diplomas of Excellence</Typography>
                                                </div>
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    <Typography data-aos="fade" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="500" sx={{marginBottom:"24px", marginTop:"64px",color:"#EBEBEB", fontFamily:"Ubuntu",fontSize:"24px",fontWeight:"700", lineHeight:"normal"}}>
                                    AWARDS & RECONGNITIONS
                                    </Typography>

                                    <img src={frameimg} alt="" style={{ width: "100%" }} />

                                    <Typography data-aos="fade" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="500" sx={{marginBottom:"24px", marginTop:"64px",color:"#EBEBEB", fontFamily:"Ubuntu",fontSize:"24px",fontWeight:"700", lineHeight:"normal"}}>
                                    CERTIFICATION AND EXPERIENCE
                                    </Typography>

                                    <div data-aos="fade-right" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="600" style={{display:"flex", alignItems:"center"}}>
                                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                                       • 
                                    </Typography>

                                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                                       President, American Academy of Orthopedic Medicine.
                                    </Typography>
                                    </div>


                                    <div data-aos="fade-right" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="700" style={{display:"flex", }}>
                                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                                       • 
                                    </Typography>

                                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                                    Director, AAOM International Hands-On Workshops in Mexico, Ecuador, Argentina, and Peru.
                                    </Typography>
                                    </div>


                                    <div data-aos="fade-right" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="800" style={{display:"flex", alignItems:"center"}}>
                                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                                       • 
                                    </Typography>

                                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                                    Founder and Director, Prolotherapy Centers of the Americas.
                                    </Typography>
                                    </div>


                                    <div data-aos="fade-right" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="900" style={{display:"flex", alignItems:"center"}}>
                                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                                       • 
                                    </Typography>

                                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                                    Board of Directors Member, Florida Academy of Pain Medicine.
                                    </Typography>
                                    </div>

                                    <div data-aos="fade-right" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="1000" style={{display:"flex", alignItems:"center"}}>
                                    <Typography style={{color:"white", marginInline:"6px", marginRight:"6px"}}>
                                       • 
                                    </Typography>

                                    <Typography sx={{color:"#EBEBEB", fontSize:"16px", fontFamily:"Rubik",fontWeight:"400", lineHeight:"normal"}}>
                                    Medical Advisory Board Member, Regenestem, USA.
                                    </Typography>
                                    </div>
                                    
                                    <Link to="/about" style={{ textDecoration: 'none' }}> 
                                    <Typography sx={{cursor:"pointer",marginleft:"11px", marginTop:"8px",color:"#209D9F", fontSize:"16px", fontFamily:"Rubik", fontWeight:"400"}}>
                                        Read More
                                    </Typography>
                                    </Link>

                                    <Link to="/about" style={{ textDecoration: 'none' }}> 
                                    <Box sx={{display:"flex", width:"100%", justifyContent:"center", marginTop:"36px"}}>
                                      <Button data-aos="fade" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="1200" sx={{color:"#EBEBEB",fontFamily:"Rubik", fontWeight:"400",fontSize:"16px",textTransform:"none", height:"48px", width:"100%",maxWidth:"316px", paddingInline:""}} variant="outlined" color="primary">
                                      Contact Dr Mahl
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






