import React from 'react';
import 'react-quill/dist/quill.snow.css'; // Importar los estilos de Quill desde el módulo
import './Preview.css'; // Importar tus estilos personalizados para Preview
import { Box, Typography, Grid } from '@mui/material';

 
// Components

import { MiniCardFinal } from '../../components/Cards/MiniCardFinal';

const Preview = ({ initialValues, content }) => {
  return (
    <>
    <div className="preview-container">
      <h3>Vista previa:</h3>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ color: "#151023", fontFamily: "Ubuntu", fontSize: "48px", fontWeight: "500", lineHeight: "normal", marginBottom: "22px" }}>
          {initialValues.titulo}
        </Typography>

        <Typography sx={{ color: "#151023", fontFamily: "Rubik", fontSize: "24px", fontWeight: "400", lineHeight: "32px", marginBottom: "30px" }}>
          {initialValues.description}
        </Typography>

        <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
          <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <img style={{ width: "100%", height: "auto", maxWidth: "676px", height: "", borderRadius: "32px" }} src={initialValues.imageFile} alt="Imagen de portada" />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <div style={{marginInline:"10%",color:"#161122", textAlign:"center", fontFamily:"Rubik", fontSize:"16px", fontWeight:"300", fontStyle:"italic", lineHeight:"32px"}}>
              {initialValues?.descriptionImg}
              </div>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", marginTop:"40px" }}>
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

        </Box>

      </Box>
      <div className="ql-editor" dangerouslySetInnerHTML={{ __html: content }} />
      <MiniCardFinal/>
    </div>
    </>
  );
};

export default Preview;