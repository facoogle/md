import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FormikForm from "../../../components/Contact/FormContact";
import useMediaQuery from '@mui/material/useMediaQuery';

import LocationImg from "../../../assets/Location.svg"
import TimeImg from "../../../assets/time.svg"
import PhoneImg from "../../../assets/Phone.svg"

export const Contact = () => {
  const is1440 = useMediaQuery('(max-width:1440px)');
  const is1024 = useMediaQuery('(max-width:1024px)');
  const is1000 = useMediaQuery('(max-width:1000px)');
  const is860 = useMediaQuery('(max-width:860px)');
  const is395 = useMediaQuery('(max-width:395px)');

  return (
    <div style={{marginTop:"160px"}}>
        {is860?
        <>
        <Box data-aos="fade" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="200" sx={{margin:"6%"}}>
            <FormikForm/>
        </Box>
        <Box sx={{margin:"6%", marginTop:"80px", background:"", display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <Box data-aos="fade-right" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="200" sx={{display:"flex", width:"100%", justifyContent:"center"}}>
          <Box sx={{width:"500px"}}>
          <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            
            <Box sx={{background:""}}>
          <img src={LocationImg} alt="LocationImg" />
            </Box>

            <Box  sx={{background:"", width:is395?"83%":"73%", display:"flex", flexDirection:"column"}}>
              <Typography sx={{color:"#1A202C", fontFamily:"Rubik", fontSize:"20px", fontWeight:"400", lineHeight:"32px"}}>
              2601 SW 37th Ave, Suite 503 
              </Typography>
              <Typography sx={{color:"#1A202C", fontFamily:"Rubik", fontSize:"18px", fontWeight:"400", lineHeight:"26px"}}>
             Coral Gables Medical Plaza
              </Typography>
              <Typography sx={{color:"#1A202C", fontFamily:"Rubik", fontSize:"18px", fontWeight:"400", lineHeight:"26px"}}>
              Coral Gables, FL 33133
              </Typography>
            </Box>
          </Box>

          <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            
            <Box sx={{background:""}}>
          <img src={TimeImg} alt="TimeImg" />
            </Box>

            <Box sx={{background:"", width:is395?"83%":"73%", marginTop:"11px", display:"flex", flexDirection:"column"}}>
             
              <Typography sx={{color:"#1A202C", fontFamily:"Rubik", fontSize:"18px", fontWeight:"400", lineHeight:"26px"}}>
              Mon - Thu | 9:00 to 16:30 </Typography>
              
            </Box>
          </Box>


          <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            
            <Box sx={{background:""}}>
          <img src={PhoneImg} alt="LocationImg" />
            </Box>

            <Box sx={{background:"", width:is395?"83%":"73%", marginTop:"11px", display:"flex", flexDirection:"column"}}>
             
              <Typography sx={{color:"#1A202C", fontFamily:"Rubik", fontSize:"18px", fontWeight:"400", lineHeight:"26px"}}>
              Telephone: +1 305-332-7234
              </Typography>
              <Typography sx={{color:"#1A202C", fontFamily:"Rubik", fontSize:"18px", fontWeight:"400", lineHeight:"26px"}}>
              Cellphone: +1 305-427-2287
              </Typography>
              <Typography sx={{color:"#1A202C", fontFamily:"Rubik", fontSize:"18px", fontWeight:"400", lineHeight:"26px"}}>
              Fax: +1 305-402-8537
              </Typography>
              
            </Box>
          </Box>

          <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            
            <Box sx={{background:""}}>
          <img src={TimeImg} alt="TimeImg" />
            </Box>

            <Box sx={{background:"", width:is395?"83%":"73%", marginTop:"11px", display:"flex", flexDirection:"column"}}>
             
              <Typography sx={{color:"#1A202C", fontFamily:"Rubik", fontSize:"18px", fontWeight:"400", lineHeight:"26px"}}>
              info@genlifemed.com 
              </Typography>
              
            </Box>
          </Box>

</Box>


</Box>
        </Box>
        </>:
        <>
        <Box
                  component="span"
                  sx={{
                    position: "absolute",
                    
                    left: 0,
                    width: is1024?"40%":"35%",
                    height: "3px",
                    background: "#6252A3",
                    zIndex: -1,
                    marginTop:"110px"
                  }}
                />
      <Grid container spacing={3}>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box  sx={{ display: "flex", width: "100%", maxWidth: "1440px" }}>
            <Grid data-aos="fade-right" data-aos-offset="-50" data-aos-duration={1000}  data-aos-delay="200" sx={{ background: "" }} item xs={12} sm={5.3}>
              <Box sx={{ width: "100%", display: "flex", flexDirection:"column", marginLeft: "14%", background: "", paddingRight: "16px", position: "relative" }}>
                
                <Typography sx={{ marginTop:"50px", fontSize: "32px", fontFamily: "Ubuntu", fontWeight: "500", color: "#1A202C" }}>
                  CONTACT DR. MAHL
                </Typography>

                <Typography sx={{ marginTop:"50px", fontSize: "24px", fontFamily: "Ubuntu", fontWeight: "500", color: "#1A202C" }}>
                2601 SW 37th Ave, Suite 503
                </Typography>
                <Typography sx={{ marginTop:"", fontSize: "20px", lineHeight:"32px", fontFamily: "Rubik", fontWeight: "400", color: "#1A202C" }}>
                Coral Gables Medical Plaza
                </Typography>

                <Typography sx={{ marginTop:"", fontSize: "24px", lineHeight:"32px", fontFamily: "Rubik", fontWeight: "400", color: "#1A202C" }}>
                Coral Gables, FL 33133
                </Typography>

                <Typography sx={{ marginTop:"40px", fontSize: "20px", lineHeight:"32px", fontFamily: "Rubik", fontWeight: "400", color: "#1A202C" }}>
                Mon - Thu | 9:00 to 16:30
                </Typography>

                <Typography sx={{ marginTop:"40px", fontSize: "24px", lineHeight:"32px", fontFamily: "Rubik", fontWeight: "400", color: "#1A202C" }}>
                Telephone: +1 305-332-7234
                </Typography>
                <Typography sx={{ marginTop:"", fontSize: "24px", lineHeight:"32px", fontFamily: "Rubik", fontWeight: "400", color: "#1A202C" }}>
                Cellphone: +1 305-427-2287
                </Typography>
                <Typography sx={{ marginTop:"", fontSize: "24px", lineHeight:"32px", fontFamily: "Rubik", fontWeight: "400", color: "#1A202C" }}>
                Fax: +1 305-402-8537
                </Typography>

                <Typography sx={{ marginTop:"29px", fontSize: "24px", lineHeight:"32px", fontFamily: "Rubik", fontWeight: "400", color: "#6252A3" }}>
                info@genlifemed.com
                </Typography>
                
              </Box>
            </Grid>

            <Grid sx={{ background: "" }} item xs={12} sm={6.7}>
              <Box  data-aos="fade" data-aos-offset="-50" data-aos-duration={1500}  data-aos-delay="200" sx={{ marginRight: is1440 ? (is1000 ? "3.5%" : "7.5%") : "0" }}>
                <FormikForm />
              </Box>
            </Grid>
          </Box>
        </Box>
      </Grid>
      </>}
        
    </div>
  );
};
