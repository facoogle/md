import React from 'react';
import 'react-quill/dist/quill.snow.css'; // Importar los estilos de Quill desde el módulo
import './Preview.css'; // Importar tus estilos personalizados para Preview
import { Box, Typography, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import igsharedImg from "../../../assets/igshared.svg"
import fbsharedImg from "../../../assets/fbshared.svg"

import { format } from 'date-fns';
import { useState, useEffect } from 'react';
// Components




const Preview = ({ initialValues }) => {
  const is1024 = useMediaQuery('(max-width:1024px)');
  const is800 = useMediaQuery('(max-width:800px)');

  const [fechaMes, setFechaMes] = useState("")

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    setFechaMes(format(date, "MMMM d',' yyyy")) 
  };

  useEffect(() => {
    if (initialValues?.createdAt) {
      formatDate(initialValues.createdAt);
    }
  }, [initialValues]);


  return (
    <>
    <div className="preview-container">
      
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ color: "#151023", fontFamily: "Ubuntu", fontSize: "48px", fontWeight: "500", lineHeight: "normal", marginBottom: "22px" }}>
          {initialValues?.titulo}
          
          {is1024?null:
          <Box data-aos="fade-right" data-aos-offset="-100" data-aos-duration={1100} data-aos-easing="ease-in-sine" data-aos-delay="300"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"70%":"85%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"61px"
                  }}
                />}
          
        </Typography>

        

        <Typography sx={{ color: "#151023", fontFamily: "Rubik", fontSize: "24px", fontWeight: "400", lineHeight: "32px", marginBottom: "32px", marginTop:"12px" }}>
          {initialValues?.description}
        </Typography>

        <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
          <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <img style={{ width: "100%", height: "auto", maxWidth: "676px", height: "", borderRadius: "32px" }} src={initialValues?.imageFile} alt="Imagen de portada" />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <div style={{marginInline:"10%",color:"#161122", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:"300", fontStyle:"italic", lineHeight:"32px"}}>
              {initialValues?.descriptionImg}
              </div>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", marginTop:"30px" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap", // Permite que las etiquetas se envuelvan en filas adicionales
                gap: "24px", // Espaciado entre las etiquetas
                justifyContent: "center", // Alinea las etiquetas en el centro horizontal
              }}
            >
              {initialValues?.tags?.map((el, index) => (
                <Typography
                  key={index}
                  sx={{
                    display: "flex",
                    height: "32px",
                    padding: "8px 32px",
                    background: "#9FE2E3",
                    borderRadius: "24px",
                    alignItems: "center",
                  }}
                >
                  {el}
                </Typography>
              ))}
            </Box>
            




          </Box>
          {is800?null:<Grid sx={{ display: 'flex', alignItems: 'center' }} container spacing={3}>
            <Grid item xs={6}>
              <Box sx={{display:"flex", flexDirection:"column", width:"316px", marginTop:"36px"}}>
                  <Typography sx={{marginBottom:"6px",color:"#1A202C",fontFamily:"Ubuntu", fontSize:"24px",fontWeight:"normal"}}>
                    SHARE
                    
                  </Typography>
                  <Box data-aos="fade-right" data-aos-offset="-100" data-aos-duration={1100} data-aos-easing="ease-in-sine" data-aos-delay="300"
                  component="span"
                  sx={{
                    position: "",
                    
                    left: 0,
                    width: "100%",
                    height: "3px",
                    background: "#6252A3",
                    
                    
                  }}
                />

                <Box sx={{display:"flex", alignItems:"center", marginTop:"21px", marginBottom:"62px"}}>
                <a href={`https://www.instagram.com/share?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                  <img style={{width:"32px", marginRight:"82px", cursor:"pointer"}} src={igsharedImg} alt="instagramShared" />
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                  <img style={{width:"32px", cursor:"pointer"}} src={fbsharedImg} alt="facebookShared" />
                  </a>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
                  <Box sx={{display:"flex", width:"100%", background:"", justifyContent:"end"}}>
                      <Box sx={{width:"140px", background:"", width:"337px", height:"70px", alignItems:"center"}}>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                          <img style={{width:"70px", height:"70px", borderRadius:"70px", marginRight:"23px", border:"1px solid rgba(0, 0, 0, 0.10)"}} src={initialValues?.user?.imgPerfil} alt="Image perfil" />
                          <Typography sx={{color:"#151023", fontFamily:"Rubik", fontSize:"18px",fontWeight:"400", lineHeight:"26px"}}>
                          {initialValues?.user?.username} | {fechaMes}
                          </Typography>
                        </Box>
                      </Box>
                  </Box>
            </Grid>
          </Grid>}
          
        </Box>

      </Box>
      <div style={{marginTop:is800?"24px":0, marginBottom:is800?"75px":"130px"}}>
      <div className="ql-editor" dangerouslySetInnerHTML={{ __html: initialValues?.content }} />

    </div>
    </div>
    
    </>
  );
};

export default Preview;