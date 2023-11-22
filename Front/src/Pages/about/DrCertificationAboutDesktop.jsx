import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from "react-router-dom"
import DoctorImg from "../../assets/DoctorHome.png"
import zIndex from '@mui/material/styles/zIndex';

import frameimg from "../../assets/services/frame.png"




export const DrCertificationAboutDesktop = () => {
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
<Box sx={{display:"flex", width:"100%", justifyContent:"center", marginBottom:"24px"}}>
                    <Box sx={{display:"flex",width:"100%" ,maxWidth:"1440px", flexDirection:"column"}}>
            <Typography  data-aos="fade-right" data-aos-offset="-100" data-aos-duration={800}  data-aos-delay="300" sx={{marginLeft:"5%",color:"#1A202C", fontFamily:"Ubuntu", fontSize:"36px", fontWeight:"500",lineHeight:"normal",textTransform:"uppercase", marginBottom:"48px"}}>
            EDUCATION
        </Typography> 
        
        <Box data-aos="fade-right" data-aos-offset="-100" data-aos-duration={1100} data-aos-easing="ease-in-sine" data-aos-delay="300"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"70%":"49.5%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"50px"
                  }}
                />

        </Box>
        </Box>
<Grid sx={{ width: "100%",background:"", paddingBottom: "20vh", paddingTop: "", display: "flex", justifyContent: "center",position: "" }}>
        
        
        <Box sx={{background:"",display:"flex"}}>
                

                <Grid data-aos="fade" data-aos-offset="-30" data-aos-duration={250}  data-aos-delay="100"
                    sx={{
                        display: "flex",
                        background: "#151023",
                        position: "absolute",
                        width: is1440?"40%":"40%",
                        height: "100%", // Cambiamos 777px a 100vh
                        maxHeight: "800px",
                        
                        borderRadius: "64px 0px 0px 64px",
                        right: 0,
                        
                    }}
                >
                    {/* Contenido del Grid */}
                    {/* Puedes colocar aquí lo que desees */}
                </Grid>
                

                <Box sx={{ display: "flex", alignItems: "center", width: "100%", height: "777px", maxWidth: "1440px", maxHeight: "777px" }}>
                    <Grid   container spacing={2}>
                        {/* Primer elemento que ocupará la mitad del espacio */}
                        <Grid item xs={7}>
                            
                        <Grid data-aos="fade-right" data-aos-offset="-300" data-aos-duration={500}  data-aos-delay="100" sx={{ marginLeft: is1440 ? "2%" : "0", position:"relative" }}>
                            <Box sx={{width:"100%",marginInline:"5%",background:"",paddingRight:"10%"}}>
                                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontWeight:"400",fontSize:"18px", lineHeight:"26px", marginBottom:"26px",marginTop:"58px"}}>
                                Dr. Mahl was mentored in the art and science of <span style={{fontWeight:"500"}}>Prolotherapy, PRP, Regenerative Medicine</span>  and  <span style={{fontWeight:"500"}}>Non-surgical Orthopedics</span> for 3 years by Dr. Alvin Stein, one of the foremost prolotherapists and well-respected orthopedists in the United States.
                                </Typography>
                                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontWeight:"400",fontSize:"18px", lineHeight:"26px", marginBottom:"26px"}}>
                                Dr. Mahl now <span style={{fontWeight:"500"}}>lectures, teaches</span>  and <span style={{fontWeight:"500"}}>trains</span> other physicians throughout the world in <span style={{fontWeight:"500"}}>Regenerative Medicine and stem cell procedures</span> from peripheral blood, bone marrow, and adipose tissues. He has been an active member of the Interventional Orthopedic Foundation, participating in the Wounded Warriors Program for soldiers and veterans.
                                </Typography>
                                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontWeight:"400",fontSize:"18px", lineHeight:"26px", marginBottom:"45px"}}>
                                As a member of the American Association of Orthopedic Medicine (AAOM) , he has participated in their medical missions with the American Osteopathic Association of Prolotherapy and Regenerative Medicine (AOAPRM), he has lectured and proctored other physicians in Regenerative Medicine. Dr. Mahl is a member of numerous other professional organizations within the fields of <span style={{fontWeight:"500"}}>pain management, regenerative medicine, and anti-aging medicine</span>, and serves on the medical Advisory Board of numerous Stem Cell companies, assessing in developing new products and techniques.
                                </Typography>

                                <Typography sx={{color:"#151023", fontFamily:"Ubuntu", fontWeight:"700",fontSize:"24px", lineHeight:"normal", marginBottom:"24px"}}>
                                CERTIFICATION AND EXPERIENCE
                                </Typography>

                                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontWeight:"400",fontSize:"18px", lineHeight:"26px", marginBottom:"4px"}}>
                                • Board Certified Integrative Medicine
                                </Typography>
                                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontWeight:"400",fontSize:"18px", lineHeight:"26px", marginBottom:"4px"}}>
                                • Certified Age Management Medicine
                                </Typography>
                                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontWeight:"400",fontSize:"18px", lineHeight:"26px", marginBottom:"4px"}}>
                                • FACS Fellow, American College of Surgeons
                                </Typography>
                                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontWeight:"400",fontSize:"18px", lineHeight:"26px", marginBottom:"4px"}}>
                                • FICS Fellow, International College of Surgeons
                                </Typography>
                                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontWeight:"400",fontSize:"18px", lineHeight:"26px", marginBottom:"4px"}}>
                                • President Elect American Academy of Orthopedic Medicine
                                </Typography>
                                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontWeight:"400",fontSize:"18px", lineHeight:"26px", marginBottom:"4px"}}>
                                • Certified IROM (Interventional Regenerative Orthopedic Medicine)
                                </Typography>
                                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontWeight:"400",fontSize:"18px", lineHeight:"26px", marginBottom:"6px"}}>
                                • Dr. Charles Mahl GenLife Regenerative Medicine Miami
                                </Typography>
                                

                            </Box>
                            </Grid>
                        </Grid>

                        {/* Segundo elemento que ocupará la otra mitad del espacio */}
                        <Grid  item xs={5}>


                            <Box sx={{ width: "100%", display: "flex", background: "", maxWidth: "564px", marginTop:"5%" }}>
                                <Box sx={{width:"100%", display:"flex", justifyContent:"end", background:"", height:"800px",alignItems:"center"}}>
                                    <Box sx={{width:"80%", background: "", display: "flex", flexDirection: "column" }}>
                                
                                    <Typography data-aos="fade" data-aos-offset="-30" data-aos-duration={2500}  data-aos-delay="200" sx={{width:"auto", marginBottom: "28px", color: "#EBEBEB", fontFamily: "Ubuntu", fontSize: "24px", fontWeight: "700", lineHeight: "normal", textAlign:"center",marginTop:"-52px" }}>
                                    NUMBERS AND  DATES
                                    </Typography>

                                    

                                    <Grid container sx={{marginBottom:"52px"}}>
                                        <Grid item xs={6}>
                                            <Box sx={{ width: "100%" }}>
                                                <div data-aos="zoom-in" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="300" style={{ textAlign: 'center' }}>
                                                    <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>+40</Typography>
                                                    <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>years in practice</Typography>
                                                </div>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <div data-aos="zoom-in" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="400" style={{ textAlign: 'center' }}>
                                                <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>99%</Typography>
                                                <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>Success Rate in Treatments</Typography>
                                            </div>
                                        </Grid>

                                        
                                    </Grid>

                                    <Grid container sx={{marginBottom:"52px"}}>
                                        <Grid item xs={6}>
                                            <Box sx={{ width: "100%" }}>
                                                <div data-aos="zoom-in" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="300" style={{ textAlign: 'center' }}>
                                                    <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>+40</Typography>
                                                    <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>Awards and Recognitions</Typography>
                                                </div>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <div data-aos="zoom-in" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="400" style={{ textAlign: 'center' }}>
                                                <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>+1250</Typography>
                                                <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>patients per year</Typography>
                                            </div>
                                        </Grid>

                                        
                                    </Grid>

                                    <Grid container  sx={{marginBottom:"52px"}}>
                                        <Grid item xs={6}>
                                            <Box sx={{ width: "100%" }}>
                                                <div data-aos="zoom-in" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="300" style={{ textAlign: 'center' }}>
                                                    <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>+25</Typography>
                                                    <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>Scientific Publications</Typography>
                                                </div>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <div data-aos="zoom-in" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="400" style={{ textAlign: 'center' }}>
                                                <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>+300</Typography>
                                                <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>Conferences and Talks</Typography>
                                            </div>
                                        </Grid>

                                        
                                    </Grid>


                                    

                                    



                                    <Grid   >
                                        <Grid item xs={12}>
                                            <Box sx={{ width: "100%" }}>
                                                <div data-aos="zoom-in" data-aos-offset="-30" data-aos-duration={1000}  data-aos-delay="300" style={{ textAlign: 'center' }}>
                                                    <Typography sx={{ marginBottom: "6px", fontSize: '24px', fontFamily: "Ubuntu", fontWeight: '500', textTransform: "uppercase", lineHeight: "normal", color: "#EBEBEB" }}>+800</Typography>
                                                    <Typography sx={{ fontSize: "16px", fontFamily: "Rubik", fontWeight: "400", lineHeight: "normal", color: "#EBEBEB" }}>Continuing Education Hours</Typography>
                                                </div>
                                            </Box>
                                        </Grid>

                                        

                                        
                                    </Grid>


                                    

                                    
                                    
                                    

                                    
                                    </Box>
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






