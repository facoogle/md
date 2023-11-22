import React, { useEffect, useState } from "react";
import { Box, TextField, Pagination, Grid, Typography,InputAdornment} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer } from "../../../components/Footer/Footer";
import { SectionBlog } from "../../Home/05-Blog/SectionBlog";
import { getPaginatedBlogs } from "../../../state/actions/blog";
import { CardBlog } from "../../../components/Cards/CardBlog";
import SearchIcon from "@mui/icons-material/Search"

export const BlogHome = () => {
  const is1440 = useMediaQuery('(max-width:1440px)');
  const is1024 = useMediaQuery('(max-width:1024px)');
  const is800 = useMediaQuery('(max-width:800px)');
  const is520 = useMediaQuery('(max-width:520px)');
  const dispatch = useDispatch();
  const { id } = useParams();

  const [searchQuery, setSearchQuery] = useState(""); // Estado para la búsqueda

  const { blogAll } = useSelector((state) => state.blogAll);

  const [activeFilter, setActiveFilter] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la página al principio cuando el componente se monta
  }, []);


  const handleFilterChange = (filter) => {
    setActiveFilter(filter); // Actualiza el filtro activo
    setSearchQuery(""); // Restablece la búsqueda
    dispatch(getPaginatedBlogs(page, is1024?3:6, filter === "All" ? "" : filter)); // Aplica el filtro al obtener los blogs
    setPage(1);
  };

  useEffect(() => {
    // Llama a la acción para obtener los blogs paginados
    dispatch(getPaginatedBlogs(page,is1024?3:6,searchQuery));
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Actualiza el estado de búsqueda
    dispatch(getPaginatedBlogs(page,is1024?3:6,event.target.value));
    setPage(1)
  };

  

  const handlePageChange = (event, value) =>{
    dispatch(getPaginatedBlogs(value,is1024?3:6,searchQuery?searchQuery:""))
    setPage(value)
  }

  console.log(blogAll)

  const [page, setPage] = useState(1)
  const [paginado, setPaginado] =useState({})
//console.log(blogAll, "a")

  return (
    <div style={{ paddingTop: "154px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", background: "", width: "100%", maxWidth: "1250px", marginInline: is1440 ? (is1024 ? "32px" : "60px") : "5%", flexDirection: "column" }}>

        <Typography  data-aos="fade-right" data-aos-offset="-100" data-aos-duration={800}  data-aos-delay="300" sx={{color:"#1A202C", fontFamily:"Ubuntu", fontSize:"48px",  fontWeight:"500",lineHeight:"normal",}}>
            Blog
        </Typography> 
        
        <Box data-aos="fade-right" data-aos-offset="-100" data-aos-duration={1100} data-aos-easing="ease-in-sine" data-aos-delay="300"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"70%":"58.5%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"82px"
                  }}
                />


        <Typography sx={{marginTop:"65px", display:"flex", maxWidth:"750px", fontFamily:"Rubik", fontSize:"18px", fontWeight:"400",lineHeight:"32px", color:"#161122"}}>
        Explore the world of pain relief with Dr. Mahl's blogs. Discover expert advice and solutions to address injuries and chronic conditions. Join our community of well-being and empowerment.
        </Typography>







<Box sx={{width:"100%", display:"flex", justifyContent:"center", paddingTop:"48px", paddingBottom:"130px" }}>
  <TextField
                label="Find answers and solutions here"
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{border:"#6252A3 2px solid", borderRadius:"6px",width:"100%", maxWidth:"683px"}}
                InputLabelProps={{
                  style:{color:"#94969A", marginTop:"-3px"}
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  style: { background: "rgba(235, 235, 235, 0.63)", height: "50px" }
                }}
              />
</Box>

      <Box>
        <Grid container spacing={0}>
        {is1024?<></>
        :
        <Grid item xs={10} sx={{borderRadius:"0px 32px 32px 0px", border:"1px solid rgba(0, 0, 0, 0.01)",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} >
          <Grid container spacing={0}>
          <Grid item xs={6}>
          <Box sx={{display:"flex", justifyContent:"center", alignItems:"center",padding:"16px 24px"}}>
              <img style={{width:"100%" ,height:"313px", borderRadius:"16px"}} src={blogAll?.posts?.[0]?.imageFile} alt="imagen" />
          </Box>
          </Grid>
          <Grid item xs={6}>
          <Box
              sx={{
                display: "flex",
                width: "100%",
                overflowX: "auto", // Agregamos overflowX: "auto" para habilitar el scroll horizontal
                paddingTop:"16px",
                paddingBottom:"16px",
                flexDirection:"column"
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
                {blogAll?.posts?.[0]?.tags?.map((el)=>{
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
                    borderRadius: "8px",
                    textAlign:"center",
                    flexGrow: 1, // Los elementos se expandirán para ocupar el espacio necesario
                    
                  }}
                >
                  {el}
                </Typography>
                    )
                })}
                
               
                
              </Box>

             
              
            </Box>
            <Box>
                <Typography sx={{padding:"16px", color:"#151023", fontFamily:"Ubuntu", fontSize:"24px", fontWeight:"500",textTransform:"uppercase"}}>
                  {blogAll?.posts?.[0]?.titulo}
                </Typography>
                </Box>

                <Box>
                <Typography sx={{marginLeft:"16px", height:"57px", color:"#151023", fontSize:"16px", fontFamily:"Rubik", fontWeight:"400", lineHeight:"normal", // Ajustar el espaciado entre líneas si es necesario
              overflow: "hidden", // Ocultar cualquier texto que exceda la altura máxima
              //display: "-webkit-box", // Establecer la caja de texto como contenedor flexible
              "-webkit-line-clamp": "3", // Número de líneas a mostrar
              "-webkit-box-orient": "vertical", }}>

{blogAll?.posts?.[0]?.description.length < 200 ? (
    <React.Fragment>
      {blogAll?.posts?.[0]?.description + "..."} 
      {Array(1000 - blogAll?.posts?.[0]?.description.length + 1).join("\u00a0")}
    </React.Fragment>
  ) : (
    blogAll?.posts?.[0]?.description 
  )}
                
              </Typography>
                </Box>
          </Grid>
          </Grid>

          </Grid>}
          

          {is1024?<Grid item xs={12}>
          <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}> 
          <Box sx={{display:"flex",width:"100%" ,justifyContent:"center"}}>
            <Box sx={{width:"100%", maxWidth:"1300px" , display:"flex", flexDirection:"column"}}>
             
              <Typography sx={{width:"100%", color:"black", fontFamily:"Ubuntu", fontSize:"24px", fontWeight:"500", textTransform:"uppercase"}}>
              featured 
topics
              </Typography>
              <Box sx={{display:"flex", width:"100%", gap:"8px",flexWrap: "wrap",}}>
              <Typography
                onClick={() => handleFilterChange("All")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "auto",
                  //maxWidth: "40px",
                  color: activeFilter === "All" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "All" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px",
                  padding:"8px 16px"
                }}
              >
                All
              </Typography>

              <Typography
                onClick={() => handleFilterChange("More")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "auto",
                  //maxWidth: "140px",
                  color: activeFilter === "More" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "More" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                Mores
              </Typography>

              <Typography
                onClick={() => handleFilterChange("Steam Cell")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "auto",
                  //maxWidth:"200px",
                  color: activeFilter === "Steam Cell" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "Steam Cell" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                Steam Cell
              </Typography>

              <Typography
                onClick={() => handleFilterChange("Neck Pain")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "auto",
                  //maxWidth: "1140px",
                  color: activeFilter === "Neck Pain" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",  
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "Neck Pain" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                Neck Pain
              </Typography>

              <Typography
                onClick={() => handleFilterChange("Hip Pain")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "auto",
                  //maxWidth: "140px",
                  color: activeFilter === "Hip Pain" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "Hip Pain" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                Hip Pain
              </Typography>

              <Typography
                onClick={() => handleFilterChange("Ankle Pain")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "auto",
                  //maxWidth: "140px",
                  color: activeFilter === "Ankle Pain" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "Ankle Pain" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                Ankle Pain
              </Typography>

              <Typography
                onClick={() => handleFilterChange("PRP")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "auto",
                  //maxWidth: "140px",
                  color: activeFilter === "PRP" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "PRP" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                PRP
              </Typography>

              
              </Box>
            </Box>
            </Box>
          </Box>
          </Grid>
          
          :


          <Grid item xs={2}>
          <Box sx={{display:"flex", width:"100%", justifyContent:"end"}}> 
          <Box sx={{display:"flex",width:"100%" ,justifyContent:"flex-end"}}>
            <Box sx={{width:"100%", maxWidth:"150px", flexDirection:"column", }}>
             
              <Typography sx={{width:"126px", color:"black", fontFamily:"Ubuntu", fontSize:"24px", fontWeight:"500", textTransform:"uppercase"}}>
              featured 
topics
              </Typography>
              <Typography
                onClick={() => handleFilterChange("All")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "100%",
                  maxWidth: "140px",
                  color: activeFilter === "All" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "All" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                All
              </Typography>

              <Typography
                onClick={() => handleFilterChange("More")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "100%",
                  maxWidth: "140px",
                  color: activeFilter === "More" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "More" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                More
              </Typography>

              <Typography
                onClick={() => handleFilterChange("Steam Cell")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "100%",
                  maxWidth: "140px",
                  color: activeFilter === "Steam Cell" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "Steam Cell" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                Steam Cell
              </Typography>

              <Typography
                onClick={() => handleFilterChange("Neck Pain")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "100%",
                  maxWidth: "140px",
                  color: activeFilter === "Neck Pain" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "Neck Pain" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                Neck Pain
              </Typography>

              <Typography
                onClick={() => handleFilterChange("Hip Pain")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "100%",
                  maxWidth: "140px",
                  color: activeFilter === "Hip Pain" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "Hip Pain" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                Hip Pain
              </Typography>

              <Typography
                onClick={() => handleFilterChange("Ankle Pain")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "100%",
                  maxWidth: "140px",
                  color: activeFilter === "Ankle Pain" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "Ankle Pain" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                Ankle Pain
              </Typography>

              <Typography
                onClick={() => handleFilterChange("PRP")} // Manejador de clic para el filtro "All"
                sx={{
                  width: "100%",
                  maxWidth: "140px",
                  color: activeFilter === "PRP" ? "white" : "#151023", // Cambio de color si está activo
                  fontFamily: "Rubik",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  height: "32px",
                  padding: "8px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "24px",
                  background: activeFilter === "PRP" ? "#151023" : "#9FE2E3", // Cambio de fondo si está activo
                  cursor: "pointer", // Cambia el cursor al pasar por encima
                  marginBottom:"8px"
                }}
              >
                PRP
              </Typography>

              
              
            </Box>
            </Box>
          </Box>
          </Grid>}
        </Grid>
      </Box>
          
    </Box>

        

        
      </Box>

      
      <SectionBlog blogpublic={blogAll?.posts} home={false}/>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop:"28px" }}>
        <Box sx={{ display: "flex", background: "", width: "100%", maxWidth: "1440px", marginInline: is1440 ? (is1024 ? "32px" : "60px") : "5%", flexDirection: "column" }}>
      <Pagination
            count={blogAll && blogAll.totalPages ? blogAll.totalPages : 0}
            page={page}
            onChange={handlePageChange}
            sx={{display:"flex", justifyContent:"center", marginBottom:"200px"}}
            /> 
            </Box>
            </Box>
      <Footer />
    </div>
  );
};