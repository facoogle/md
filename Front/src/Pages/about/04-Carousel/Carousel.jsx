import React from 'react';
import Slider from 'react-slick';

import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import "./Carousel.css"

import pg1 from "../../../assets/one.jpg"
import pg2 from "../../../assets/two.jpg"
import pg3 from "../../../assets/tree.jpg"
import pg4 from "../../../assets/four.jpeg"



  // Componente personalizado para el botón ">"
  

 

export const CarouselAbout = () => {
  const is1440 = useMediaQuery('(max-width:1440px)');
  const is1024 = useMediaQuery('(max-width:1024px)');
  const is900 = useMediaQuery('(max-width:900px)');
  const is800 = useMediaQuery('(max-width:800px)');
  const is700 = useMediaQuery('(max-width:700px)');
  const is600 = useMediaQuery('(max-width:600px)');
  const is520 = useMediaQuery('(max-width:520px)');
  const is400 = useMediaQuery('(max-width:400px)');



  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="custom-next-arrow"
      style={{
        position: 'absolute',
        top: is1024?"120%":'50%',
        left: is1024?(is400?"25%":"35%"):'-90px',
        transform: 'translateY(-50%)',
        backgroundColor: '#ff0000', // Cambia el color aquí
        borderRadius: '50%',
        backgroundColor: '#6252A3',
        fontFamily:"Rubik",
        width: '48px',
        height: '48px',
        zIndex: 1,
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        
      }}
    >
      {'<'}
    </button>
  );


  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="custom-next-arrow"
      style={{
        position: 'absolute',
        top: is1024?"120%":'50%',
        right: is1024?(is400?"25%":"35%"):'-90px',
        transform: 'translateY(-50%)',
        backgroundColor: '#6252A3', // Cambia el color aquí
        borderRadius: '50%',
        fontFamily:"Rubik",
        width: '48px',
        height: '48px',
        zIndex: 1,
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      }}
    >
      {'>'}
    </button>
  );

  const settings = {
    
    dots: true,
    infinite: true,
    
    speed: 1000,
    slidesToShow: is1024?(is700?(is600?1.0283:2):2):3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />,
    autoplay: true,         // Habilitar autoplay
    autoplaySpeed: 5000, 
    position:"relative",
    
     // Habilitar el modo centrado
    
     
    right:0,
    centerMode: is1024?(is800?false:true):false, // Habilitar el modo centrado
    centerPadding: 60, // Establece el padding en 0 para no ocultar tarjetas
    
  };

 
  

  
 

  return (
    <div style={{background:"", paddingTop:0, margin:is600?(is520?"0%":"5%"):0, marginLeft:is520?"3%":0, paddingBottom:is1024?170:"130px"}}>
      <Box sx={{display:"flex", justifyContent:"center"}}>
        <Box sx={{display:"flex",width:"100%",maxWidth:"1440px", flexDirection:"column"}}>
      <Typography data-aos="fade-right" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="200" sx={{color:"#1A202C", textAlign:"center",display:"flex",marginLeft:is1440?"3.9%":"0", fontFamily:"Ubuntu", fontSize:"36px", fontWeight:"500",lineHeight:"normal",textTransform:"uppercase"}}>
      PHOTO GALLERY
        </Typography>

        </Box>
        </Box>
        <Box data-aos="fade-right" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="300"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"95%":"49.5%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"8px",
                    
                  }}
          />

<Box sx={{display:"flex", justifyContent:"center", marginTop:"18px"}}>
        <Box data-aos="fade-right" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="800"  sx={{display:"flex",width:"100%",maxWidth:"1440px", flexDirection:"column"}}>
      <Typography sx={{color:"#1A202C",display:"flex",marginLeft:is1440?"3.9%":"2%", fontFamily:"Rubik", fontSize:"20px", fontWeight:"400",lineHeight:"normal"}}>
      
        </Typography>

        </Box>
        </Box>

      <Box sx={{display:"flex", justifyContent:"center", marginTop:"48px", marginLeft:is600?"6%":0}}>
      
      
      <Box data-aos="fade" data-aos-offset="-50" data-aos-duration={500}  data-aos-delay="200" sx={{maxWidth:is1440?(is1024?(is600?"100%":"93%"):"77%"):"1091px",}}>


        
        
      <Slider {...settings} >

      <div style={{}}>
          <Box style={{background:"", display:"flex", justifyContent:"center", width:"100%", paddingInline:"8px"}}>
            <Box sx={{display:"flex", paddingTop:"56px", paddingBottom:"56px", alignItems:"center", justifyContent:"center", width:"353px",  borderRadius:is1024?"32px 32px 32px 0px":"32px", height:"100%", maxHeight:"316px", }}>
              <Box sx={{width:"100%", marginInline:"16px", background:""}}>

                <img src={pg1} alt="pg1" style={{width:"314px", height:"200px"}} />

              </Box>
            </Box>
            </Box>
        </div>

        <div style={{}}>
          <Box style={{background:"", display:"flex", justifyContent:"center", width:"100%", paddingInline:"8px"}}>
            <Box sx={{display:"flex", paddingTop:"56px", paddingBottom:"56px", alignItems:"center", justifyContent:"center", width:"353px",  borderRadius:is1024?"32px 32px 32px 0px":"32px", height:"100%", maxHeight:"316px", }}>
              <Box sx={{width:"100%", marginInline:"16px", background:""}}>

                <img src={pg2} alt="pg1" style={{width:"314px", height:"200px"}} />

              </Box>
            </Box>
            </Box>
        </div>

        <div style={{}}>
          <Box style={{background:"", display:"flex", justifyContent:"center", width:"100%", paddingInline:"8px"}}>
            <Box sx={{display:"flex", paddingTop:"56px", paddingBottom:"56px", alignItems:"center", justifyContent:"center", width:"353px",  borderRadius:is1024?"32px 32px 32px 0px":"32px", height:"100%", maxHeight:"316px", }}>
              <Box sx={{width:"100%", marginInline:"16px", background:""}}>

                <img src={pg3} alt="pg1" style={{width:"314px" , height:"200px"}} />

              </Box>
            </Box>
            </Box>
        </div>


        <div style={{}}>
          <Box style={{background:"", display:"flex", justifyContent:"center", width:"100%", paddingInline:"8px"}}>
            <Box sx={{display:"flex", paddingTop:"56px", paddingBottom:"56px", alignItems:"center", justifyContent:"center", width:"353px",  borderRadius:is1024?"32px 32px 32px 0px":"32px", height:"100%", maxHeight:"316px", }}>
              <Box sx={{width:"100%", marginInline:"16px", background:""}}>

                <img src={pg4} alt="pg1" style={{width:"314px", height:"200px"}} />

              </Box>
            </Box>
            </Box>
        </div>

       

      </Slider>
    </Box>
  </Box>
    </div>
  );
};


