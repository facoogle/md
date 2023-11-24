import React, { useEffect, useState } from "react";
import { Box,Typography,TextField,InputAdornment, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { Footer } from "../../../components/Footer/Footer";
import { MiniCardFinal } from "../../../components/Cards/MiniCardFinal";
import { CardBlog } from "../../../components/Cards/CardBlog";
import i1 from "../../../assets/services/1.jpg"
import i2 from "../../../assets/services/2.jpeg"
import i3 from "../../../assets/services/3.png"
import i4 from "../../../assets/services/4.jpeg"
import i5 from "../../../assets/services/5.png"
import i6 from "../../../assets/services/6.jpg"
import i7 from "../../../assets/services/7.jpeg"
import i8 from "../../../assets/services/8.png"
import i9 from "../../../assets/services/9.jpeg"


export const OurHome = ()=> {

    const is1440 = useMediaQuery('(max-width:1440px)');
    const is1024 = useMediaQuery('(max-width:1024px)');
    const is800 = useMediaQuery('(max-width:800px)');
    const is600 = useMediaQuery('(max-width:600px)');

    useEffect(() => {
      window.scrollTo(0, 0); // Mueve la página al principio cuando el componente se monta
    }, []);
    

    

      const items2 = [
        { id: 1, text: 'DESPACHO ADUANAL MX/USA' ,img:i1,name:""},
        { id: 2, text: 'WAREHOUSING',img:i2,name:"" },
        { id: 3, text: 'AUDITORIAS PREVENTIVAS',img:i3,name:"" },
        {id:4, text:"PERMISOS NOMS/RRNA",img:i4,name:""},
        {id:5, text:"COMERCIALIZADORA",img:i5,name:""},
        {id:6, text:"CLASIFICACION ARANCELARIA",img:i6,name:""},
        {id:7, text:"ATENCION PERSONALIZADA",img:i7,name:""},
        {id:8, text:"FRANQUICIAS",img:i8,name:""},
        {id:8, text:"SEGURIDAD JURIDICA",img:i9,name:""},
        
      ];

      

    const [searchTerm, setSearchTerm] = useState('');
  
  
  const filteredItems2 = items2.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

let mar = true

    return(
        <><div style={{ paddingTop: "154px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", background: "", width: "100%", maxWidth: "1250px", marginInline: is1440 ? (is1024 ? "32px" : "60px") : "5%", flexDirection: "column" }}>
  
          <Typography  data-aos="fade-right" data-aos-offset="-100" data-aos-duration={800}  data-aos-delay="300" sx={{color:"#1A202C", fontFamily:"Ubuntu", fontSize:"48px",  fontWeight:"500",lineHeight:"normal",}}>
              Nuestros Servicios
          </Typography> 
          
          <Box data-aos="fade-right" data-aos-offset="-100" data-aos-duration={1100} data-aos-easing="ease-in-sine" data-aos-delay="300"
                    component="span"
                    sx={{
                      position: "absolute",
                      
                      left: 0,
                      width: is1024?"90%":"58.5%",
                      height: "3px",
                      background: "#6252A3",
                      zIndex: -1,
                      marginTop:is600?"116px":"82px"
                    }}
                  />
  
          <Typography sx={{marginTop:"65px", display:"flex", maxWidth:"750px", fontFamily:"Rubik", fontSize:"18px", fontWeight:"400",lineHeight:"32px", color:"#161122"}}>
          Conoce todos nuestros servicios, texto de ejemplo para completar
          </Typography>
  
  {/* <Box sx={{width:"100%", display:"flex", justifyContent:"center", paddingTop:"48px", paddingBottom:"130px" }}>
    <TextField
                  label="Perform search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
  </Box>       */}
      </Box>
        </Box>



        <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", background: "", width: "100%", maxWidth: "1250px", marginInline: is1440 ? (is1024 ? "32px" : "60px") : "5%", flexDirection: "column" }}>


        
        {!searchTerm?
        <>
        {/* REGENERATIVE MEDICINE */}



        <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", background: "", width: "100%", maxWidth: "1250px", marginInline: is1440 ? (is1024 ? "32px" : "10px") : "5%", flexDirection: "column" }}>

        
          
          

        <Grid container spacing={2} sx={{marginTop:"32px"}}>

        {filteredItems2.map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <div style={{padding:"16px 24px", display:"flex", alignItems:"center", gap:"16px"}}>
            <Link to={`/ouservices/page/${item.name}`} style={{ textDecoration: 'none' }}>
                <div>
                    <img src={item.img} alt="img"  style={{borderRadius:"50%", width:"70px", height:"70px"}}/>
                </div>
              </Link>
              <div>
              <Link to={`/ouservices/page/${item.name}`} style={{ textDecoration: 'none' }}>
                <Typography component="div" sx={{fontSize:is600?"16px":"24px", color:"#423E3F", fontWeight:"400", textTransform:"uppercase",cursor:"pointer"}}>
                  {item.text}
                </Typography>
              </Link>
                {/* Agrega aquí el contenido de tus tarjetas */}
              </div>
            </div>
          </Grid>
        ))}

        </Grid>

        </Box>
        </Box>
  

        </>
        :null
        // <Box sx={{ display: "flex", background: "", width: "100%", maxWidth: "1250px", marginInline: is1440 ? (is1024 ? "32px" : "60px") : "5%", flexDirection: "column",marginTop:"-50px" }}>
        // <Grid  container spacing={2}>

        // {filteredItems.map((item) => (
        //   <Grid item xs={12} sm={6} key={item.id}>
        //     <div style={{padding:"16px 24px", display:"flex", alignItems:"center", gap:"16px"}}>
        //     <Link to={`/ouservices/page/${item.name}`} style={{ textDecoration: 'none' }}>
        //         <div>
        //             <img src={item.img} alt="img"  style={{borderRadius:"50%"}}/>
        //         </div>
        //         </Link>
        //       <div>
        //       <Link to={`/ouservices/page/${item.name}`} style={{ textDecoration: 'none' }}>
        //         <Typography component="div" sx={{fontSize:"24px", color:"#209D9F", fontWeight:"400", textDecoration:"underline", textTransform:"uppercase",cursor:"pointer"}}>
        //           {item.text}
        //         </Typography>
        //         </Link>
        //         {/* Agrega aquí el contenido de tus tarjetas */}
        //       </div>
        //     </div>
        //   </Grid>
          
        // ))}

        // </Grid>
        // </Box>
}

        
        </Box>
        </Box>



        <div style={{display:"flex", justifyContent:"center", paddingBottom:is600?"":"140px",paddingTop:"140px"}}>
      <div style={{ backgroundImage:is800? "linear-gradient(to top, #ff0844 0%, #ffb199 100%)":"", marginInline:is800?"":"64px", maxWidth:"1440px"}}>
        <MiniCardFinal mar={mar}/>
      </div>
    </div>

        
        
        <Footer />
      </div></>
    )
}