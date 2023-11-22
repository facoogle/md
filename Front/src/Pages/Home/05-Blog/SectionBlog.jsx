import React, { useEffect } from "react";
import { Grid, Box, Typography, Button, Pagination } from "@mui/material";
import { CardBlog } from "../../../components/Cards/CardBlog";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";

import { getPaginatedBlogs } from "../../../state/actions/blog";



export const SectionBlog = ({blogpublic, home}) => {
  const is1440 = useMediaQuery('(max-width:1440px)');
  const is1180 = useMediaQuery('(max-width:1180px)');
  const is1024 = useMediaQuery('(max-width:1024px)');
  const is600 = useMediaQuery('(max-width:600px)');
  const is520 = useMediaQuery('(max-width:520px)');
  const is400 = useMediaQuery('(max-width:400px)');

  const dispatch = useDispatch();

  // const { blogAll } = useSelector((state) => state.blogAll);

  // const [searchQuery, setSearchQuery] = useState("");
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   // Llama a la acción para obtener los blogs paginados
  //   dispatch(getPaginatedBlogs(page,6,searchQuery));
  // }, [dispatch]);

  const [lengthCards, setLengthCars] = useState(3)

  useEffect(()=>{
    if(blogpublic?.length === 1 ){
      setLengthCars(12)
    }
    if(blogpublic?.length === 2 ){
      setLengthCars(6)
    }
    if(blogpublic?.length > 2 ){
      setLengthCars(4)
    }
    
  },[blogpublic])

  

  return (
    <div style={{ marginTop: "", display: "flex", justifyContent: "center", width: "100%" , background:""}}>
     
       
        
      {is1180?
    <Box sx={{width:"100%"}}>
      <Box sx={{ justifyContent: "center", overflowX: "auto", }}>

        {is600?<>
        {home?<>
        <Box sx={{display:"flex", justifyContent:"center"}}>
        <Box sx={{display:"flex",width:"100%",maxWidth:"1440px", flexDirection:"column"}}>
      <Typography data-aos="fade-right" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="200" sx={{color:"#1A202C", textAlign:"center",display:"flex",marginLeft:is1440?"7.5%":"0", fontFamily:"Ubuntu", fontSize:"36px", fontWeight:"500",lineHeight:"normal",textTransform:"uppercase"}}>
      From our BLOG 
        </Typography>

        </Box>
        </Box>
        <Box
        data-aos="fade-right" data-aos-offset="-50" data-aos-duration={1000}  data-aos-delay="200"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"95%":"49.5%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"8px"
                  }}
          />
        </>:null}
        
        
          
        </>
        :<>
        {home?<><Box sx={{display:"flex", justifyContent:"center"}}>
        <Box sx={{display:"flex",width:"100%",maxWidth:"1440px", flexDirection:"column"}}>
      <Typography data-aos="zoom-in" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="200" sx={{color:"#1A202C", background:"",display:"flex", justifyContent:"flex-end",marginRight:is1440?"4%":"0", fontFamily:"Ubuntu", fontSize:"36px", fontWeight:"500",lineHeight:"normal",textTransform:"uppercase"}}>
      From our BLOG 
        </Typography>

        </Box>
        </Box>
        <Box
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    right: 0,
                    width: is1024?"95%":"49.5%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"8px"
                  }}
          /></>:null}
        
        

          
        </>}






        {/* Agregamos overflowX: "auto" al contenedor Box para habilitar el scroll horizontal */}
        
        <Box sx={{ marginInline: "4.5%" , marginTop:"24px"}}>
          <Grid container spacing={2} sx={{ width: is520?(is400?"300%":"1100px"):"1440px",  }}>
            {/* Establecemos un ancho máximo solo para el contenedor Grid */}

            {blogpublic?.map((el)=>{
              return(
                <Grid  data-aos="fade" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="200" item xs={4}>
                <CardBlog id={el.id} image={el.imageFile} tags={el.tags} titulo={el.titulo} description={el.description} user={el.user} time={el.createdAt}/>
                </Grid>
              )
            })}
            
          </Grid>
{is1180?<></>:<>
{home?
  <Link to="/blog" style={{ textDecoration: 'none' }}> 
<Box sx={{display:"flex", justifyContent:"center", background:"", marginTop:"40px"}}>
                <Button data-aos="fade" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="300" sx={{color:"#EBEBEB", background:"#209D9F",fontFamily:"Rubik",borderRadius:"8px", fontWeight:"400",fontSize:"16px",textTransform:"none", height:"48px", width:"100%",maxWidth:"426px", border:"1px solid var(--verde-o-celeste, #209D9F)"}} variant="outlined" color="primary">
                More articless
                     </Button>
  </Box>
  </Link>

  :null}
  </>}
          
        </Box>

        

      </Box>
      {home?
      <Link to="/blog" style={{ textDecoration: 'none' }}> 
      <Box sx={{display:"flex", justifyContent:"center", background:"", marginTop:"40px"}}>
                <Button data-aos="fade" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="300" sx={{color:"#EBEBEB", background:"#209D9F",fontFamily:"Rubik",borderRadius:"8px", fontWeight:"400",fontSize:"16px",textTransform:"none", height:"48px", width:"100%",maxWidth:"426px", border:"1px solid var(--verde-o-celeste, #209D9F)"}} variant="outlined" color="primary">
                More articles
                     </Button>
  </Box>
  </Link>
  :null}
      
</Box>
      :

      <Box sx={{ justifyContent: "center", overflowX: "auto" }}>
      {home?
      <>
      <Box sx={{display:"flex", justifyContent:"center"}}>
        <Box sx={{display:"flex",width:"100%",maxWidth:"1440px", flexDirection:"column"}}>
      <Typography data-aos="zoom-in" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="200" sx={{color:"#1A202C", background:"",display:"flex", justifyContent:"flex-end",marginRight:is1440?"4%":"0", fontFamily:"Ubuntu", fontSize:"36px", fontWeight:"500",lineHeight:"normal",textTransform:"uppercase"}}>
      From our BLOG 
        </Typography>

        </Box>
        </Box>
        
        <Box
        data-aos="fade-right" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="200"
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    right: 0,
                    width: is1024?"95%":"49.5%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"8px"
                  }}
          />
          </>
         :
        null}
        <Box data-aos="fade" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="200" sx={{ marginInline: "4.5%" , marginInline:is1440?"5%":"0%", marginTop:"57px", background:"",}}>
         

          
          <Grid container spacing={2} sx={{ width: "100%", maxWidth:"1440px", margin:"2px" }}>
            {/* Establecemos un ancho máximo solo para el contenedor Grid */}

            {blogpublic?.map((el)=>{
              return(
                <Grid item xs={lengthCards}>
                <CardBlog id={el.id} image={el.imageFile} tags={el.tags} titulo={el.titulo} description={el.description} user={el.user} time={el.createdAt}/>
                </Grid>
              )
            })}
            
          </Grid>
        </Box>
{is1024?<></>:<>{home?
  <Link to="/blog" style={{ textDecoration: 'none' }}> 
<Box sx={{display:"flex", justifyContent:"center", background:"", marginTop:"40px"}}>
                <Button data-aos="fade" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="400" sx={{color:"#EBEBEB", background:"#209D9F",fontFamily:"Rubik",borderRadius:"8px", fontWeight:"400",fontSize:"16px",textTransform:"none", height:"48px", width:"100%",maxWidth:"426px", border:"1px solid var(--verde-o-celeste, #209D9F)"}} variant="outlined" color="primary">
                More articles
                     </Button>
  </Box>
  </Link>
  :null}</>}
        

      </Box>
      
    }
      
      
    </div>
  );
};



