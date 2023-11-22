import React from 'react';
import { Box, Grid,Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Contact } from '../../Home/06-Contact/Contact';

export const OurServicesCards = () => {
const is1440 = useMediaQuery('(max-width:1440px)');
const is1110 = useMediaQuery('(max-width:1110px)');
const is1024 = useMediaQuery('(max-width:1024px)');
const is600 = useMediaQuery('(max-width:600px)');
  return (
    <Box sx={{marginTop:is600?"66px":"130px"}}>
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

    <Grid item xs={12} md={6} lg={3} sx={{width:"100%",  height:"320px", marginInline:"10px", marginBottom:"8px"}}>
    <div data-aos="fade-right" data-aos-offset="0" data-aos-duration={1000}  data-aos-delay="150" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: '100%', height: "320px", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.02)", boxShadow: "0px 0px 8px 0px rgba(21, 15, 36, 0.60)" }}>
        <Typography sx={{marginTop:"64px",marginBottom:"24px", maxWidth:"284px",textAlign:"center", color:"#1A202C", fontFamily:"Ubuntu", fontSize:"24px",fontWeight:500,lineHeight:"normal",textTransform:"uppercase"}}>
        REGENERATIVE MEDICINE
        </Typography>
        <Typography sx={{marginBottom:"24px", maxWidth:"284px",color:"#1A202C", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Cutting-edge therapy using stem cells to regenerate and repair damaged tissues for improved health
        </Typography>

        <Typography position={"absolute"} sx={{ textAlign:"center",marginTop:"240px",cursor:"pointer",color:"#209D9F", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal", maxWidth:is1110?"180px":"230px"}}>
        Explore Regenerative Medicine
        </Typography>
    </div>
    </Grid>

    <Grid item xs={12} md={6} lg={3} sx={{width:"100%",  height:"320px",marginInline:"10px", marginBottom:"8px"}}>
    <div data-aos="fade-right" data-aos-offset="0" data-aos-duration={1000}  data-aos-delay="150" style={{ display: "flex", flexDirection: "column",  alignItems: "center", width: '100%', height: "320px", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.02)", boxShadow: "0px 0px 8px 0px rgba(21, 15, 36, 0.60)" }}>
    <Typography sx={{marginTop:"64px",marginBottom:"24px", maxWidth:"284px",textAlign:"center", color:"#1A202C", fontFamily:"Ubuntu", fontSize:"24px",fontWeight:500,lineHeight:"normal",textTransform:"uppercase"}}>
    PAIN MANAGEMENT
        </Typography>
        <Typography sx={{marginBottom:"24px", maxWidth:"284px",color:"#1A202C", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Regenerative treatment using injections to stimulate tissue repair and relieve pain in joints and ligaments
        </Typography>

        <Typography position={"absolute"} sx={{marginTop:"240px",cursor:"pointer",color:"#209D9F", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Explore Pain Management
        </Typography>
    </div>
    </Grid>

    

    <Grid item xs={12} md={6} lg={3} sx={{width:"100%",  height:"320px" ,marginInline:"10px", marginBottom:"8px"  }}>
    <div data-aos="fade-right" data-aos-offset="0" data-aos-duration={1000}  data-aos-delay="150" style={{ display: "flex", flexDirection: "column",  alignItems: "center", width: '100%', height: "320px", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.02)", boxShadow: "0px 0px 8px 0px rgba(21, 15, 36, 0.60)" }}>
    <Typography sx={{marginTop:"64px",marginBottom:"24px", maxWidth:"284px",textAlign:"center", color:"#1A202C", fontFamily:"Ubuntu", fontSize:"24px",fontWeight:500,lineHeight:"normal",textTransform:"uppercase"}}>
        AGE MANAGEMENT
        </Typography>
        <Typography sx={{marginBottom:"24px", maxWidth:"284px",color:"#1A202C", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Comprehensive approach to enhance wellness and slow aging, optimizing vitality and overall well-being
        </Typography>

        <Typography position={"absolute"} sx={{marginTop:"240px",cursor:"pointer",color:"#209D9F", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Explore Age Management
        </Typography>
    </div>
    </Grid>

    <Grid item xs={12} md={6} lg={3} sx={{width:"100%",  height:"320px",marginInline:"10px", marginBottom:"8px" }}>
    <div data-aos="fade-right" data-aos-offset="0" data-aos-duration={1000}  data-aos-delay="150" style={{ display: "flex", flexDirection: "column",  alignItems: "center", width: '100%', height: "320px", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.02)", boxShadow: "0px 0px 8px 0px rgba(21, 15, 36, 0.60)" }}>
    <Typography sx={{marginTop:"64px",marginBottom:"24px", maxWidth:"284px",textAlign:"center", color:"#1A202C", fontFamily:"Ubuntu", fontSize:"24px",fontWeight:500,lineHeight:"normal",textTransform:"uppercase"}}>
    WELLNESS
        </Typography>
        <Typography sx={{marginBottom:"24px", maxWidth:"284px",color:"#1A202C", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Regenerative treatment using injections to stimulate tissue repair and relieve pain in joints and ligaments
        </Typography>
        
        <Typography position={"absolute"} sx={{marginTop:"240px",cursor:"pointer",color:"#209D9F", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Explore Wellness
        </Typography>
        
    </div>
    </Grid>

  </Grid>
  </Box>
  </Box>


  </Grid>

  {/* <Box sx={{display:"flex", justifyContent:"center", background:"", marginTop:"40px"}}>
                <Button data-aos="fade" data-aos-offset="0" data-aos-duration={1500}  data-aos-delay="150"  sx={{color:"#209D9F",marginInline:"7.5%",boxShadow:"0px 4px 28px 0px rgba(0, 0, 0, 0.13)",borderRadius:"10px",fontFamily:"Rubik", fontWeight:"400",fontSize:"16px",textTransform:"none", height:"48px", width:"100%",maxWidth:"426px", border:"1px solid var(--verde-o-celeste, #209D9F)"}} variant="outlined" color="primary">
                      More Services
                     </Button>
  </Box> */}

        </Box></>
        :
        <>


        {/* -------------------TABLET TABLET TABLET------------ */}
            <Box>
            <Box sx={{display:"flex", width:"100%", justifyContent:"center", marginBottom:"24px"}}>
                    <Box sx={{display:"flex",width:"100%" ,maxWidth:"1440px", flexDirection:"column"}}>
            <Typography data-aos="fade-right" data-aos-offset="-100" data-aos-duration={800}  data-aos-delay="300" sx={{marginLeft:"5%",color:"#1A202C", fontFamily:"Ubuntu", fontSize:"36px", fontWeight:"500",lineHeight:"normal",textTransform:"uppercase"}}>
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
                />
        
        </Box>
        </Box>

              

        <Grid sx={{display:"flex", justifyContent:"center", marginTop:"44px"}}>
    <Box sx={{display:"flex", justifyContent:"center", width:"1440px", marginInline:is1024?"3%":"4%"}}>
        <Box sx={{ width:"100%",display:"flex", justifyContent:"center",}}>
    <Grid container justifyContent="center" spacing={2} width={"100%"} maxWidth={is1440?"714px":"714px"}>
    {/* Cuatro cuadrados juntos */}

    <Grid item xs={6} md={6} lg={3} sx={{width:"100%",  height:"320px"}}>
    <div data-aos="fade-down-right" data-aos-offset="0" data-aos-duration={800}  data-aos-delay="150" style={{ display: "flex", maxWidth:"349px", flexDirection: "column", alignItems: "center", width: '100%', height: "320px", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.02)", boxShadow: "0px 0px 8px 0px rgba(21, 15, 36, 0.60)" }}>
        <Typography sx={{marginTop:"64px",marginBottom:"24px", maxWidth:"284px",textAlign:"center", color:"#1A202C", fontFamily:"Ubuntu", fontSize:"24px",fontWeight:500,lineHeight:"normal",textTransform:"uppercase"}}>
        REGENERATIVE MEDICINE
        </Typography>
        <Typography sx={{marginBottom:"24px", maxWidth:"284px",color:"#1A202C", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Cutting-edge therapy using stem cells to regenerate and repair damaged tissues for improved health
        </Typography>

        <Typography position={"absolute"} sx={{ textAlign:"center",marginTop:"240px",cursor:"pointer",color:"#209D9F", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal", maxWidth:is1110?"180px":"230px"}}>
        Explore Regenerative Medicine
        </Typography>
    </div>
    </Grid>

    <Grid item xs={6} md={6} lg={3} sx={{width:"100%",  height:"320px"}}>
    <div data-aos="fade-down-right" data-aos-offset="0" data-aos-duration={800}  data-aos-delay="300" style={{ display: "flex",maxWidth:"349px", flexDirection: "column",  alignItems: "center", width: '100%', height: "320px", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.02)", boxShadow: "0px 0px 8px 0px rgba(21, 15, 36, 0.60)" }}>
    <Typography sx={{marginTop:"64px",marginBottom:"24px", maxWidth:"284px",textAlign:"center", color:"#1A202C", fontFamily:"Ubuntu", fontSize:"24px",fontWeight:500,lineHeight:"normal",textTransform:"uppercase"}}>
    PAIN MANAGEMENT
        </Typography>
        <Typography sx={{marginBottom:"24px", maxWidth:"284px",color:"#1A202C", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Regenerative treatment using injections to stimulate tissue repair and relieve pain in joints and ligaments
        </Typography>

        <Typography position={"absolute"} sx={{marginTop:"240px",cursor:"pointer",color:"#209D9F", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Explore Pain Management
        </Typography>
    </div>
    </Grid>

    

    <Grid item xs={6} md={6} lg={3} sx={{width:"100%",  height:"320px", margin: { md: '16px 0', xs:"16px 0" }}}>
    <div data-aos="fade-down-right" data-aos-offset="0" data-aos-duration={800}  data-aos-delay="150" style={{ display: "flex",maxWidth:"349px", flexDirection: "column",  alignItems: "center", width: '100%', height: "320px", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.02)", boxShadow: "0px 0px 8px 0px rgba(21, 15, 36, 0.60)" }}>
    <Typography sx={{marginTop:"64px",marginBottom:"24px", maxWidth:"284px",textAlign:"center", color:"#1A202C", fontFamily:"Ubuntu", fontSize:"24px",fontWeight:500,lineHeight:"normal",textTransform:"uppercase"}}>
        AGE MANAGEMENT
        </Typography>
        <Typography sx={{marginBottom:"24px", maxWidth:"284px",color:"#1A202C", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Comprehensive approach to enhance wellness and slow aging, optimizing vitality and overall well-being
        </Typography>

        <Typography position={"absolute"} sx={{marginTop:"240px",cursor:"pointer",color:"#209D9F", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Explore Age Management
        </Typography>
    </div>
    </Grid>

    <Grid item xs={6} md={6} lg={3} sx={{width:"100%",  height:"320px", margin: { md: '16px 0', xs:"16px 0" } }}>
    <div data-aos="fade-down-right" data-aos-offset="0" data-aos-duration={800}  data-aos-delay="300" style={{ display: "flex",maxWidth:"349px", flexDirection: "column",  alignItems: "center", width: '100%', height: "320px", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.02)", boxShadow: "0px 0px 8px 0px rgba(21, 15, 36, 0.60)" }}>
    <Typography sx={{marginTop:"64px",marginBottom:"24px", maxWidth:"284px",textAlign:"center", color:"#1A202C", fontFamily:"Ubuntu", fontSize:"24px",fontWeight:500,lineHeight:"normal",textTransform:"uppercase"}}>
    WELLNESS
        </Typography>
        <Typography sx={{marginBottom:"24px", maxWidth:"284px",color:"#1A202C", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Regenerative treatment using injections to stimulate tissue repair and relieve pain in joints and ligaments
        </Typography>
        
        <Typography position={"absolute"} sx={{marginTop:"240px",cursor:"pointer",color:"#209D9F", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Explore Wellness
        </Typography>
        
    </div>
    </Grid>

  </Grid>
  </Box>
  </Box>
  </Grid>
  {/* <Box sx={{display:"flex", justifyContent:"center", background:"", marginTop:"40px"}}>
                <Button data-aos="fade" data-aos-offset="0" data-aos-duration={1500}  data-aos-delay="200" sx={{color:"#209D9F",fontFamily:"Rubik",boxShadow:"0px 4px 28px 0px rgba(0, 0, 0, 0.13)",borderRadius:"10px", fontWeight:"400",fontSize:"16px",textTransform:"none", height:"48px", width:"100%",maxWidth:"472px", border:"1px solid var(--verde-o-celeste, #209D9F)"}} variant="outlined" color="primary">
                      More Services
                     </Button>
  </Box> */}
       </Box> </>)
        :
        <>


        {/* -------------------DESKTOP DESKTOP DESKTOP------------ */}
            <Box>
                <Box sx={{display:"flex", width:"100%", justifyContent:"center", marginBottom:"24px"}}>
                    <Box sx={{display:"flex",width:"100%" ,maxWidth:"1440px", flexDirection:"column"}}>
            <Typography  data-aos="fade-right" data-aos-offset="-100" data-aos-duration={800}  data-aos-delay="300" sx={{marginLeft:"5%",color:"#1A202C", fontFamily:"Ubuntu", fontSize:"36px", fontWeight:"500",lineHeight:"normal",textTransform:"uppercase"}}>
            OUR SERVICES
        </Typography> 
        
        <Box data-aos="fade-right" data-aos-offset="-100" data-aos-duration={1100} data-aos-easing="ease-in-sine" data-aos-delay="300"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"70%":"60%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"50px"
                  }}
                />

        </Box>
        </Box>

        <Grid sx={{display:"flex", justifyContent:"center", marginTop:"44px"}}>
    <Box sx={{display:"flex",flexDirection:"column", justifyContent:"center", width:"1440px", marginInline:is1024?"3%":"4%"}}>
        
        
        <Box sx={{ width:"100%",display:"flex", justifyContent:"center",}}>

    <Grid container justifyContent="center" spacing={2} width={"100%"} maxWidth={is1440?"1312px":"1440px"}>
    {/* Cuatro cuadrados juntos */}
    <Grid item xs={12} md={3} lg={3} sx={{width:"100%",  height:"320px"}}>
    <div data-aos="fade-down-left" data-aos-offset="-30" data-aos-duration={800}  data-aos-delay="200" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: '100%', height: "320px", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.02)", boxShadow: "0px 0px 8px 0px rgba(21, 15, 36, 0.60)" }}>
        <Typography sx={{marginTop:"64px",marginBottom:"24px", maxWidth:"284px",textAlign:"center", color:"#1A202C", fontFamily:"Ubuntu", fontSize:"24px",fontWeight:500,lineHeight:"normal",textTransform:"uppercase"}}>
        REGENERATIVE MEDICINE
        </Typography>
        <Typography sx={{marginBottom:"24px", maxWidth:"284px",color:"#1A202C", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Cutting-edge therapy using stem cells to regenerate and repair damaged tissues for improved health
        </Typography>

        <Typography position={"absolute"} sx={{ textAlign:"center",marginTop:"240px",cursor:"pointer",color:"#209D9F", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal", maxWidth:is1110?"180px":"230px"}}>
        Explore Regenerative Medicine
        </Typography>
    </div>
    </Grid>
    <Grid item xs={12} md={3} lg={3} sx={{width:"100%",  height:"320px"}}>
    <div data-aos="fade-down-left" data-aos-offset="-30" data-aos-duration={800}  data-aos-delay="400" style={{ display: "flex", flexDirection: "column",  alignItems: "center", width: '100%', height: "320px", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.02)", boxShadow: "0px 0px 8px 0px rgba(21, 15, 36, 0.60)" }}>
    <Typography sx={{marginTop:"64px",marginBottom:"24px", maxWidth:"284px",textAlign:"center", color:"#1A202C", fontFamily:"Ubuntu", fontSize:"24px",fontWeight:500,lineHeight:"normal",textTransform:"uppercase"}}>
    PAIN MANAGEMENT
        </Typography>
        <Typography sx={{marginBottom:"24px", maxWidth:"284px",color:"#1A202C", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Regenerative treatment using injections to stimulate tissue repair and relieve pain in joints and ligaments
        </Typography>

        <Typography position={"absolute"} sx={{marginTop:"240px",cursor:"pointer",color:"#209D9F", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Explore Pain Management
        </Typography>
    </div>
    </Grid>
    <Grid item xs={12} md={3} lg={3} sx={{width:"100%",  height:"320px"}}>
    <div data-aos="fade-down-right" data-aos-offset="-30" data-aos-duration={800}  data-aos-delay="800" style={{ display: "flex", flexDirection: "column",  alignItems: "center", width: '100%', height: "320px", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.02)", boxShadow: "0px 0px 8px 0px rgba(21, 15, 36, 0.60)" }}>
    <Typography sx={{marginTop:"64px",marginBottom:"24px", maxWidth:"284px",textAlign:"center", color:"#1A202C", fontFamily:"Ubuntu", fontSize:"24px",fontWeight:500,lineHeight:"normal",textTransform:"uppercase"}}>
        AGE MANAGEMENT
        </Typography>
        <Typography sx={{marginBottom:"24px", maxWidth:"284px",color:"#1A202C", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Comprehensive approach to enhance wellness and slow aging, optimizing vitality and overall well-being
        </Typography>

        <Typography position={"absolute"} sx={{marginTop:"240px",cursor:"pointer",color:"#209D9F", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Explore Age Management
        </Typography>
    </div>
    </Grid>
    <Grid item xs={12} md={3} lg={3} sx={{width:"100%",  height:"320px"}}>
    <div data-aos="fade-down-right" data-aos-offset="-30" data-aos-duration={800}  data-aos-delay="1000" style={{ display: "flex", flexDirection: "column",  alignItems: "center", width: '100%', height: "320px", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.02)", boxShadow: "0px 0px 8px 0px rgba(21, 15, 36, 0.60)" }}>
    <Typography sx={{marginTop:"64px",marginBottom:"24px", maxWidth:"284px",textAlign:"center", color:"#1A202C", fontFamily:"Ubuntu", fontSize:"24px",fontWeight:500,lineHeight:"normal",textTransform:"uppercase"}}>
    WELLNESS
        </Typography>
        <Typography sx={{marginBottom:"24px", maxWidth:"284px",color:"#1A202C", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Regenerative treatment using injections to stimulate tissue repair and relieve pain in joints and ligaments
        </Typography>
        
        <Typography position={"absolute"} sx={{marginTop:"240px",cursor:"pointer",color:"#209D9F", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal"}}>
        Explore Wellness
        </Typography>
        
    </div>
    </Grid>
  </Grid>
  </Box>
  </Box>
  
  </Grid>
  {/* <Box sx={{display:"flex", justifyContent:"center", background:"", marginTop:"40px"}}>
                <Button data-aos="fade" data-aos-offset="0" data-aos-duration={1500}  data-aos-delay="1000" sx={{color:"#209D9F",fontFamily:"Rubik",boxShadow:"0px 4px 28px 0px rgba(0, 0, 0, 0.13)",borderRadius:"10px", fontWeight:"400",fontSize:"16px",textTransform:"none", height:"48px", width:"100%",maxWidth:"426px", border:"1px solid var(--verde-o-celeste, #209D9F)"}} variant="outlined" color="primary">
                      More Services
                     </Button>
  </Box> */}
  </Box>
        </>}
    <Contact/>
  </Box>
  );
};

