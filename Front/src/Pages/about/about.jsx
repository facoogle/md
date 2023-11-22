import React from "react"
import {Box,Grid,Typography,Button} from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
import DoctorImg from "../../assets/portadaAbout.png"
import {DrCertificationAbout} from "./DrCertificationAbout"
import {DrCertificationAboutDesktop} from "./DrCertificationAboutDesktop"
import { CarouselAbout } from "./04-Carousel/Carousel";
import {Contact} from "../Home/06-Contact/Contact"
import {Footer} from "../../components/Footer/Footer"

import ab1 from "../../assets/ab1.png"
import ab2 from "../../assets/ab2.png"
import ab3 from "../../assets/ab3.png"
import ab4 from "../../assets/ab4.png"

import p1 from "../../assets/p1.png"
import p2 from "../../assets/p2.png"
import p3 from "../../assets/p3.png"
import p4 from "../../assets/p4.png"

import p5 from "../../assets/p5.png"
import p6 from "../../assets/p6.png"
import p7 from "../../assets/p7.png"
import p8 from "../../assets/p8.png"

import p9 from "../../assets/p9.svg"
import p10 from "../../assets/p10.svg"
import p11 from "../../assets/p11.png"

export const About = ()=>{

  const is1440 = useMediaQuery('(max-width:1440px)');
  const is1024 = useMediaQuery('(max-width:1024px)');
  const is900 = useMediaQuery('(max-width:900px)');
  const is800 = useMediaQuery('(max-width:800px)');
  const is620 = useMediaQuery('(max-width:620px)');
  const is440 = useMediaQuery('(max-width:440px)');

    return(<>
 { is900?<>

  <Box sx={{display:"flex", flexDirection:"column"}}>

 
  <Box sx={{display:"flex", justifyContent:"center", background:"#C0AD9E", paddingBottom:"42px"}}>
                <Box sx={{display:"flex", width:"100%", maxWidth:"1440px", marginInline:is1440?(is1024?"32px":"60px"):"5%", background:"", flexDirection:"column"}}>
        <Box sx={{display:"flex", width:"100%", marginTop:"130px"}}>
        <Grid container spacing={2}>
      
      <Grid item xs={12}>

        <Box sx={{display:"flex", width:"100%", background:"", flexDirection:"column"}}>
            <Box sx={{display:"flex", width:"100%", justifyContent:"start"}}>
            <Typography sx={{color:"#1A202C",fontFamily:"Ubuntu", fontSize:"38px",fontWeight:"700",width:"100%", maxWidth:"509px", marginBottom:"88px"}}>
            SOBRE NOSOTROS
            </Typography>
            </Box>

            <Box
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?(is900?"95%":"49.5%"):"49.5%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: 99,
                    marginTop:is440?"180px":"120px"
                  }}
          />

          <Typography sx={{fontFamily:"Rubik", color:"#151023", fontSize:"18px", lineHeight:"26px", fontWeight:"400", marginBottom:"26px"}}>
          Dr. Charles F. Mahl is a physician/surgeon who specializes in the practice of Regenerative Orthopedics & Sport Medicine with an unwavering passion for physical well-being. With extensive experience in the field, Dr. Mahl is dedicated to providing innovative and personalized solutions for sports injuries and enhancing the quality of life for his patients.
          </Typography>

          <Typography sx={{fontFamily:"Rubik", color:"#151023", fontSize:"16px", lineHeight:"normal", fontWeight:"600",marginBottom:"26px"}}>
          His comprehensive approach, combined with his commitment and medical expertise, makes him a prominent authority in orthopedic care.
          </Typography>

          <Typography sx={{fontFamily:"Rubik", color:"#151023", fontSize:"18px", lineHeight:"26px", fontWeight:"400",marginBottom:"50px"}}>
          With Dr. Mahl, you are in the hands of a professional who is dedicated to your recovery and optimal performance, combining his knowledge of regenerative medicine with that of age management medicine, he can now help and guide many people to lead a long healthy life with vitality and energy and productivity.
          </Typography>
          <a href="#dr-mahl" style={{textDecoration:"none"}}>
          <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
          
          <Button data-aos="fade" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="300" sx={{color:"#EBEBEB", background:"#6252A3",fontFamily:"Rubik",borderRadius:"8px", fontWeight:"400",fontSize:"16px",textTransform:"none", height:"48px", width:"100%",maxWidth:"426px"}} variant="outlined" color="primary">
          Contact Dr. Mahl
                     </Button>  
                     
          </Box>
          </a>


        </Box>
        
      </Grid>
    </Grid>
        </Box>
        </Box>
        </Box>

        <Box sx={{display:"flex", justifyContent:"center", background:"#151023", paddingBottom:"42px", paddingTop:"84px"}}>
                <Box sx={{display:"flex", width:"100%", maxWidth:"1440px", marginInline:is1440?(is1024?"32px":"60px"):"5%", background:"", flexDirection:"column"}}>

       

        </Box>
        </Box>

      
      </Box>
      
      </>

      
      
      :


<Box sx={{display:"flex", flexDirection:"column"}}>

  <Box sx={{display:"flex", justifyContent:"center", background:"#C0AD9E"}}>
                <Box sx={{display:"flex", width:"100%", maxWidth:"1440px", marginInline:is1440?(is1024?"32px":"60px"):"5%", background:"", flexDirection:"column"}}>
        <Box sx={{display:"flex", width:"100%", marginTop:"130px"}}>
        <Grid container spacing={2}>
      <Grid sx={{display:"flex", justifyContent:"flex-end"}} item xs={6}>
        <img src={DoctorImg} alt="Doctor Charles"  style={{width:"100%", maxWidth:"737px"}}/>
      </Grid>
      <Grid item xs={6}>

        <Box sx={{display:"flex", width:"100%", background:"", flexDirection:"column"}}>
            <Box sx={{display:"flex", width:"100%", justifyContent:"end"}}>
            <Typography sx={{color:"#1A202C",fontFamily:"Ubuntu", fontSize:"48px",fontWeight:"700",width:"100%", maxWidth:"509px", marginBottom:"88px"}}>
            SOBRE NOSOTROS
            </Typography>
            </Box>

            <Box
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    right: 0,
                    width: is1024?"49.5%":"49.5%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: 99,
                    marginTop:"150px"
                  }}
          />

          <Typography sx={{fontFamily:"Rubik", color:"#151023", fontSize:"18px", lineHeight:"26px", fontWeight:"400", marginBottom:"26px"}}>
          La Agencia Aduanal MD Global Trade Services SC surge con el objetivo de proporcionar un servicio de primer nivel, que garantice la certidumbre de nuestros clientes, en sus operaciones de comercio exterior, contando con tecnología de punta y personal capacitado, que ayuden al cumplimiento de las exigencias delcliente.

          </Typography>

          <Typography sx={{fontFamily:"Rubik", color:"#151023", fontSize:"16px", lineHeight:"normal", fontWeight:"600",marginBottom:"26px"}}>
          Empresa Joven, pero con personal competitivo, con ideas nuevas y en busca de la mejora continua. Empresa formada en el 2002, por el agente aduanal Ing. Maria Elena Moreno Durazo, Patente nacional 3849, con aduana de adscripción en Nogales Sonora y con operaciones en la Cd. De Hermosillo, por la aduana de Guaymas Sonora.
          </Typography>

          
<a href="aduanas" style={{textDecoration:"none"}}>
          <Box sx={{width:"100%", display:"flex", justifyContent:"end", marginBottom:"80px"}}>
          
          <Button data-aos="fade" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="300" sx={{color:"#EBEBEB", background:"#912327",fontFamily:"Rubik",borderRadius:"8px", fontWeight:"400",fontSize:"16px",textTransform:"none", height:"48px", width:"100%",maxWidth:"426px"}} variant="outlined" color="primary">
          Aduanas
                     </Button> 
          </Box>
 </a>

        </Box>
        
      </Grid>
    </Grid>
        </Box>


            
        
        </Box>
        
        </Box>
        
       





        </Box>
        }

















        <Box sx={{display:"flex", flexDirection:"column", marginTop:"140px"}}>

<Box sx={{display:"flex", justifyContent:"center", background:""}}>
              <Box sx={{display:"flex", width:"100%", maxWidth:"1440px", marginInline:is1440?(is1024?"32px":"60px"):"5%", background:"", flexDirection:"column", marginTop:is900?"130px":""}}>


                  <CarouselAbout/>
                  <div id="dr-mahl"></div>
                  {/* <Contact/> */}
                  <div style={{paddingBottom:"130px"}}>

                  </div>
                  <Footer/>


        </Box>
        </Box>
        </Box>


















    
    </>)
}