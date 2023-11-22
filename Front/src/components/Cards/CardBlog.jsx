import React  from "react";
import { Typography, Paper, Box } from "@mui/material";
import { format } from 'date-fns';
import { Link, Navigate } from 'react-router-dom';

export const CardBlog = ({id,image,tags,titulo,description,user,time})=>{

  

    return(
   
        <Paper
            key={id}
            sx={{
              borderRadius: "0px 0px 32px 32px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0px 0px 4px 0px rgba(21, 15, 36, 0.60)",
              width:"100%",
              maxWidth:"427px"
              
            }}
          >
            <Box sx={{width:"100%"}}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                overflowX: "auto", // Agregamos overflowX: "auto" para habilitar el scroll horizontal
                
              }}
            >
              <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
                <img
                  src={image}
                  alt="Imagen"
                  style={{ height: "179px", margin: "16px", borderRadius:"16px"}}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                overflowX: "auto", // Agregamos overflowX: "auto" para habilitar el scroll horizontal
              }}
            >
              <Box
                sx={{
                  marginInline: "16px",
                  display: "flex",
                  height:"40px",
                  whiteSpace: "nowrap", // Agregamos whiteSpace: "nowrap" para que los elementos no se envuelvan en varias líneas
                  "::-webkit-scrollbar": {
                    height: "0px", // Altura de la barra de desplazamiento
                    width: "0px", // Ancho de la barra de desplazamiento
                  },
                  "::-webkit-scrollbar-thumb": {
                    background: "rgba(0, 0, 0, 0.2)", // Color de la barra de desplazamiento
                    borderRadius: "0px", // Bordes redondeados
                  },
                  "::-webkit-scrollbar-thumb:hover": {
                    background: "transparent", // Color de la barra de desplazamiento al pasar el mouse
                  },
                  "::-webkit-scrollbar-thumb:active": {
                    background: "transparent", // Color de la barra de desplazamiento al hacer clic
                  },
                  overflow: "hidden", // Agregar estilo para ocultar contenido que exceda el ancho
                }}
              >
                {tags?.map((el)=>{
                    return(
                        <Typography
                        key={el.id}
                  sx={{
                    padding: "8px 16px",
                    marginInline: "8px",
                    fontSize: "16px",
                    fontFamily: "Rubik",
                    fontWeight: "400",
                    background: "#9FE2E3",
                    color: "#151023",
                    borderRadius: "24px",
                    flexGrow: 1, // Los elementos se expandirán para ocupar el espacio necesario
                    
                  }}
                >
                  {el}
                </Typography>
                    )
                })}
                
               
                
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                marginTop: "8px",
                
                height: "76px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  
                  marginInline: "16px",
                  width: "100%",
                  color: "#151023",
                  fontFamily: "Ubuntu",
                  fontSize: "24px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  lineHeight: "normal",
                }}
              >

                {titulo}

              </Typography>
            </Box>


            <Box sx={{width:"100%", height:"77px", display:"flex", alignItems:"center"}}>
              <Typography sx={{margin:"16px", height:"57px", color:"#151023", fontSize:"16px", fontFamily:"Rubik", fontWeight:"400", lineHeight:"normal", // Ajustar el espaciado entre líneas si es necesario
              overflow: "hidden", // Ocultar cualquier texto que exceda la altura máxima
              //display: "-webkit-box", // Establecer la caja de texto como contenedor flexible
              "-webkit-line-clamp": "3", // Número de líneas a mostrar
              "-webkit-box-orient": "vertical", }}>

{description.length < 200 ? (
    <React.Fragment>
      {description}
      {Array(1000 - description.length + 1).join("\u00a0")}
    </React.Fragment>
  ) : (
    description
  )}
                
              </Typography>

            </Box>

            <Box sx={{width:"100%", height:"78px", display:"flex", alignItems:"center", background:""}}>
                  <Box sx={{ background:"white", paddingInline:"16px", width:"100%", display:"flex", alignItems:"center"}}>
                    <Box>    
                    <img
                    src={user?.imgPerfil}
                    alt="Imagen"
                    style={{ height: "70px", width:"70px", borderRadius:"50%", border: "1px solid rgba(0, 0, 0, 0.10)"}}
                    />
                    </Box>

                    <Typography sx={{color:"#151023", marginLeft:"16px",fontFamily:"Rubik", fontWeight:"400", fontSize:"16px"}}>
                    {user?.username} | {format(new Date(time), 'MMMM dd, yyyy')}
                    </Typography>


                  </Box>
            </Box>


            <Box sx={{width:"100%", justifyContent:"center", marginTop:"6px"}}>
            <Link to={`/blog/blogPage/${id}`} style={{ textDecoration: 'none' }}>
                  <Typography sx={{ cursor:"pointer",color:"#209D9F", width:"100%", textAlign:"center", fontSize:"16px", fontWeight:"400", fontFamily:"Rubik"}}>
                    Read more
                  </Typography>
                  </Link>
            </Box>
           
            </Box>
          </Paper>
          
    )
}