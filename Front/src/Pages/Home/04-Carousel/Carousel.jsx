import React from 'react';
import Slider from 'react-slick';

import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import "./Carousel.css"



  // Componente personalizado para el botón ">"
  

 

export const Carousel = () => {
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
    <div style={{background:"", paddingTop:is900?"600px":300, margin:is600?(is520?"0%":"5%"):0, marginLeft:is520?"3%":0, paddingBottom:is1024?170:"130px"}}>
      <Box sx={{display:"flex", justifyContent:"center"}}>
        <Box sx={{display:"flex",width:"100%",maxWidth:"1440px", flexDirection:"column"}}>
      <Typography data-aos="fade-right" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="200" sx={{color:"#1A202C", textAlign:"center",display:"flex",marginLeft:is1440?"3.9%":"0", fontFamily:"Ubuntu", fontSize:"36px", fontWeight:"500",lineHeight:"normal",textTransform:"uppercase"}}>
            PATIENTS TESTIMONIAL
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
      Hear what our patients are saying...
        </Typography>

        </Box>
        </Box>

      <Box sx={{display:"flex", justifyContent:"center", marginTop:"48px", marginLeft:is600?"6%":0}}>
      
      
      <Box data-aos="fade" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="800" sx={{maxWidth:is1440?(is1024?(is600?"100%":"93%"):"77%"):"1091px",}}>


        
        
      <Slider {...settings} >

        <div style={{}}>
          <Box style={{background:"", display:"flex", justifyContent:"center", width:"100%", paddingInline:"8px"}}>
            <Box sx={{display:"flex", paddingTop:"56px", paddingBottom:"56px", alignItems:"center", justifyContent:"center",background:"rgba(98, 82, 163, 0.40)", width:"353px",  borderRadius:is1024?"32px 32px 32px 0px":"32px", height:"100%", maxHeight:"600px", }}>
              <Box sx={{width:"100%", marginInline:"16px", background:"green"}}>

                <Typography sx={{color:"#151023",fontFamily:"Rubik", fontSize:"16px", fontWeight:"400", lineHeight:"normal", height:"100%", minHeight:"400px"}}>
                Dr Mahl has incredible knowledge of regenerative practices and his execution makes him the very best.
He has saved me from having at least 2 surgeries and cured my awful pain by his continuous healing, I have been seeing him for maintenance and have been so happy with the results.
Dr Mahl explains simply, with detail and assurance, but will not hesitate to say if the issue has to be dealt with by another specialist. There is no waiting for an appointment, and I hardly wait after I arrive at his office I cannot thank him enough for what he does, how he does it and for making sure his staff are an asset to his practice.
                </Typography>

                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontSize:"18px", fontWeight:"700", lineHeight:"normal", marginTop:"10px"}}>
                Garce Lang
                </Typography>

                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontSize:"16px", fontWeight:"300", lineHeight:"normal", marginTop:"10px"}}>
                Miami FL
                </Typography>

              </Box>
            </Box>
            </Box>
        </div>

        <div >
          <Box style={{background:"", display:"flex", justifyContent:"center", width:"100%", paddingInline:"8px"}}>
            <Box sx={{display:"flex", paddingTop:"56px", paddingBottom:"56px", alignItems:"center", justifyContent:"center",background:"rgba(98, 82, 163, 0.40)", width:"353px",  borderRadius:is1024?"32px 32px 32px 0px":"32px", height:"100%", maxHeight:"600px" }}>
              <Box sx={{width:"100%", marginInline:"16px", background:""}}>

                <Typography sx={{color:"#151023",fontFamily:"Rubik", fontSize:"16px", fontWeight:"400", lineHeight:"normal", height:"100%", minHeight:"400px"}}>
                Dr. Charlie Mahl is an individual I have trusted for years. He has
that rare combination of talent, compassion, and intellectual know-
how that is needed in medicine today. He has been essential in
helping me with low back pain and is an expert in PRP, Prolotherapy,
and Cellular Regenerative Medicine. I have personally trained and
taught as a colleague with Dr. Mahl, not only in this country but
internationally for years, and unequivocally recommend him
for your regenerative medical needs!
                </Typography>

                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontSize:"18px", fontWeight:"700", lineHeight:"normal", marginTop:"10px"}}>
                Michael Carlson, D.O.
                </Typography>

                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontSize:"16px", fontWeight:"300", lineHeight:"normal", marginTop:"10px"}}>
                Knoxville, TN
                </Typography>

              </Box>
            </Box>
            </Box>
        </div>

        <div >
          <Box style={{background:"", display:"flex", justifyContent:"center", width:"100%", paddingInline:"8px"}}>
            <Box sx={{display:"flex", paddingTop:"56px", paddingBottom:"56px", alignItems:"center", justifyContent:"center",background:"rgba(98, 82, 163, 0.40)", width:"100%", maxWidth:"353px", borderRadius:is1024?"32px 32px 32px 0px":"32px", height:"100%", maxHeight:"600px" }}>
              <Box sx={{width:"100%", marginInline:"16px", background:""}}>

                <Typography sx={{color:"#151023",fontFamily:"Rubik", fontSize:"16px", fontWeight:"400", lineHeight:"normal", height:"100%", minHeight:"400px"}}>
                Dr. Charlie Mahl is an individual I have trusted for years. He has
that rare combination of talent, compassion, and intellectual know-
how that is needed in medicine today. He has been essential in
helping me with low back pain and is an expert in PRP, Prolotherapy,
and Cellular Regenerative Medicine. I have personally trained and
taught as a colleague with Dr. Mahl, not only in this country but
internationally for years, and unequivocally recommend him
for your regenerative medical needs!
                </Typography>

                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontSize:"18px", fontWeight:"700", lineHeight:"normal", marginTop:"10px"}}>
                Michael Carlson, D.O.
                </Typography>

                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontSize:"16px", fontWeight:"300", lineHeight:"normal", marginTop:"10px"}}>
                Knoxville, TN
                </Typography>

              </Box>
            </Box>
            </Box>
        </div>


        <div >
          <Box style={{background:"", display:"flex", justifyContent:"center", width:"100%", paddingInline:"8px"}}>
            <Box sx={{display:"flex", paddingTop:"56px", paddingBottom:"56px", alignItems:"center", justifyContent:"center",background:"rgba(98, 82, 163, 0.40)", width:"100%", maxWidth:"353px", borderRadius:is1024?"32px 32px 32px 0px":"32px", height:"100%", maxHeight:"600px" }}>
              <Box sx={{width:"100%", marginInline:"16px", background:""}}>

                <Typography sx={{color:"#151023",fontFamily:"Rubik", fontSize:"16px", fontWeight:"400", lineHeight:"normal", height:"100%", minHeight:"400px"}}>
                Dr. Charlie Mahl is an individual I have trusted for years. He has
that rare combination of talent, compassion, and intellectual know-
how that is needed in medicine today. He has been essential in
helping me with low back pain and is an expert in PRP, Prolotherapy,
and Cellular Regenerative Medicine. I have personally trained and
taught as a colleague with Dr. Mahl, not only in this country but
internationally for years, and unequivocally recommend him
for your regenerative medical needs!
                </Typography>

                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontSize:"18px", fontWeight:"700", lineHeight:"normal", marginTop:"10px"}}>
                Michael Carlson, D.O.
                </Typography>

                <Typography sx={{color:"#151023", fontFamily:"Rubik", fontSize:"16px", fontWeight:"300", lineHeight:"normal", marginTop:"10px"}}>
                Knoxville, TN
                </Typography>

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


