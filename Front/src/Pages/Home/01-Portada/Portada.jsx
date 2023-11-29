import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Link } from 'react-router-dom';
//import imgPortada from "../../../assets/portada.png";
import imgPortadaTablet1 from "../../../assets/Rectangle.svg";
import imgPortadaMobile1 from "../../../assets/Rectangle.svg";

import imgPortada1 from "../../../assets/Rectangle.svg";
import imgPortada2 from "../../../assets/Rectangle.svg"
import imgPortada3 from "../../../assets/Rectangle.svg"
import { useState, useEffect } from "react";

export const Portada = () => {
    const is1440 = useMediaQuery("(max-width: 1440px)");
  const is1024 = useMediaQuery("(max-width: 1024px)");
  const is600 = useMediaQuery("(max-width: 600px)");
  const is300 = useMediaQuery("(max-width: 300px)");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [imgPortada1, imgPortada2, imgPortada3];
  const imagesTablet = [imgPortadaTablet1, imgPortada2, imgPortada3];
  const imagesMobile = [imgPortadaMobile1, imgPortada2, imgPortada3];

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(changeImage, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  const imgPortada = images[currentImageIndex];


  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesTablet.length);
    };

    const intervalId = setInterval(changeImage, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imagesTablet]);

  const imgPortadaTablet = imagesTablet[currentImageIndex];

const imgPortadaMobile = imagesTablet[currentImageIndex];




  

  return (
    <div style={{   }}>
      <Box position="relative">
        <Box
          sx={{
            display: "flex",
            
            alignItems: "center",
            height: is1024 ? "768px" : is600 ? "785px" : "930px", // Ajusta la altura deseada
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.50) 49.48%, rgba(0, 0, 0, 0.00) 100%), url(${
                is1024 ? (is600 ? imgPortadaMobile : imgPortadaTablet) : imgPortada
              })`,
            backgroundSize:"cover",
            backgroundPosition: "right", // Ajusta la posición inicial hacia la derecha
            animation: "fadeIn 0.8s ease", 
            '@keyframes fadeIn': {
              '0%': { opacity: 0 ,
                  filter: "blur(20px)"
              },
              '10%':{
                opacity: 1,
                filter: "brightness(2) blur(10px)"
              }
              
},
          }}
        >
            {is1024?(is600?
            <>
        {/* Titulo MOBILE */}
        <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
            <Box sx={{display:"flex", width:"1440px"}}>

                <Box sx={{marginInline:is1440?"32px":"", marginTop:"-85px",width:"100%",maxWidth:"312px", flexDirection:"column"}}>
                    
                <Typography data-aos="fade-right" data-aos-duration={1000} data-aos-delay="300" sx={{color:"#EBEBEB", fontSize:"32px", fontFamily:"Ubuntu", fontWeight:500, lineHeight:"normal",marginBottom:"16px"}}>
                UNA AGENCIA
               </Typography>
               
                    
                    <Typography data-aos="fade-right" data-aos-duration={1500} data-aos-delay="200" sx={{color:"white", fontSize:is300?"30px":"40px", fontWeight:400, lineHeight:"normal",marginBottom:"12px", width:"100%", maxWidth:"312px"}}>
                    ALIADOS DE TUS OPERACIONES DE COMERCIO EXTERIOR.
                    </Typography>

                    <Typography data-aos="fade-right" data-aos-duration={1500} data-aos-delay="300" sx={{width:"100%",maxWidth:"472px",color:"#EBEBEB", fontFamily:"Rubik", fontSize:"14px", fontWeight:400,lineHeight:"normal",marginBottom:"24px", maxWidth:"264px"}}>
                    En MD Global Trade Services somos un equipo de trabajo que encuentra soluciones aduaneras para su cadena logística.
                    </Typography>

                    <Link to="/services" style={{ textDecoration: 'none' }}>
                    <Button data-aos="fade" data-aos-duration={1400} data-aos-delay="500" variant="contained" sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}}>
                    Servicios
                    </Button>
                    </Link>

                </Box>
            </Box>
        </Box>
            </>:
            
            <>
        {/* Titulo TABLET */}
        <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
            <Box sx={{display:"flex", width:"1440px"}}>

                <Box sx={{marginInline:is1440?"32px":"", marginTop:"-120px",width:"100%",maxWidth:"594px", flexDirection:"column"}}>
                   
                <Typography data-aos="fade-right" data-aos-duration={1000} data-aos-delay="300" sx={{color:"#EBEBEB", fontSize:"32px", fontFamily:"Ubuntu", fontWeight:500, lineHeight:"normal",marginBlock:"32px"}}>
                UNA AGENCIA
               </Typography>
                   
                    <Typography data-aos="fade-right" data-aos-duration={1000} data-aos-delay="300" sx={{color:"#EBEBEB", fontSize:"40px", fontWeight:400, lineHeight:"normal",marginBlock:"32px"}}>
                    ALIADOS DE TUS OPERACIONES DE COMERCIO EXTERIOR.
                    </Typography>

                    <Typography data-aos="fade-right" data-aos-duration={1000} data-aos-delay="400" sx={{width:"100%",maxWidth:"472px",color:"#EBEBEB", fontFamily:"Rubik", fontSize:"16px", fontWeight:400,lineHeight:"normal",marginBottom:"32px"}}>
                    En MD Global Trade Services somos un equipo de trabajo que encuentra soluciones aduaneras para su cadena logística.
                    </Typography>
                    {/* <Link to="/about" style={{ textDecoration: 'none' }}>
                    <Button data-aos="fade" data-aos-duration={1400} data-aos-delay="500" variant="contained" sx={{width:"100%",background:"#209D9F", color:"#EBEBEB",fontFamily:"Rubik", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}}>
                    Contact Us
                    </Button>
                   </Link> */}

                </Box>
            </Box>
        </Box>
            
            </>)
            :
            <>

        {/* Titulo DESKTOP */}
        <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
            <Box sx={{display:"flex", width:"1440px"}}>

                <Box sx={{marginInline:is1440?"64px":"", marginTop:"",width:"100%",maxWidth:"648px", flexDirection:"column", }}>
                    
                <Typography data-aos="fade-right" data-aos-duration={1000} data-aos-delay="300" sx={{color:"#EBEBEB", fontSize:"42px", fontFamily:"Poppins", fontWeight:700, lineHeight:"normal"}}>
                UNA AGENCIA
               </Typography>
                    
                   

                    <Typography data-aos="fade-right" data-aos-duration={1000} data-aos-delay="300" sx={{color:"#912327", fontSize:"80px", fontWeight:700, fontFamily:"Poppins", lineHeight:"1"}}>
                    ALIADOS DE TUS OPERACIONES DE COMERCIO EXTERIOR.
                    </Typography>

                    <Typography data-aos="fade-right" data-aos-duration={1000} data-aos-delay="400" sx={{width:"100%",color:"#EBEBEB", fontFamily:"Poppins", fontSize:"20px", fontWeight:400,lineHeight:"normal",marginBottom:"16px"}}>
                    En MD Global Trade Services somos un equipo de trabajo que encuentra soluciones aduaneras para su cadena logística.
                    </Typography>

                    <Link to="/services" style={{ textDecoration: 'none' }}>
                    <Button data-aos="fade" data-aos-duration={1400} data-aos-delay="500" variant="contained" sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}}>
                    SERVICIOS
                    </Button>
                    </Link>

                </Box>
            </Box>
        </Box>
            </>}





            

        
          
        </Box>
      </Box>
    </div>
  );
};