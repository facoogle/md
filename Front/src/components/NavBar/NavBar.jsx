import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LogoBost from "../../assets/logoMDGlobal.png";
import LogoSearch from "../../assets/search.svg";
import Menu from "../../assets/Menu.svg"
import Close from "../../assets/Close.svg"
import { Link } from 'react-router-dom';
import { Box } from "@mui/material";



export const NavBarGlobal = ({handleLetsChatClick, handleLetsPricingClick, handleLetsWorkClick, handleLetsLogoClick}) => {
  const is600 = useMediaQuery('(max-width:600px)');
  const is1024 = useMediaQuery('(max-width:1000px)');

const BoxWrapper = styled("div")({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  position: "fixed",
  zIndex: "9999",
  fontFamily:"Rubik"
});

const DivNavbarWrapper = styled("div")({
  //border: "0px none",
  height: "80px",
  width: "100%",
});

const DivNavbar = styled("div")({
  backgroundColor: "#EFEFEF",
  //opacity:"0.9",
  boxShadow: "0px 0px 20px #2929291a",
  height: is1024?"80px":"80px",
  left: 0,
  position: "fixed",
  top: 0,
  width: "100%",
  display:"flex",
  justifyContent:"center",
});

const Frame = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginInline:is1024?"":"60px",
  maxWidth: "1440px",
  padding: "14px 0",
  width: "100%",
});

const ElementLogoTurquesaSin = styled("img")({
  height: is600?"48px":"48px",
  marginLeft:is1024?"16px":"",
  minWidth: is600?"25px":"34px",
  
  marginTop:is600?"4px":"3px"

});

const Div = styled("div")({
  alignItems: "center",
  display: "flex",
  gap: "24px",
  position: "relative",
  width: "fit-content",
});

const TextWrapper = styled(Typography)({
  color: "#912327",
  textAlign:"center",
  fontSize: "20px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "normal",
  fontFamily:"Poppins", 
 
  width: '120%',
  //position: "relative",
  
  textTransform: 'none',
  '&:hover': {
    // Estilos aplicados al hacer hover
    // Ejemplo: cambiar el color de fondo
    textAlign:"center",
    height: '-8px',
    borderBottom: '2px solid #6252A3', // Subrayado al hacer hover
    width: '120%',
    color:"#6252A3",
    fontWeight: 400,
    //lineHeight: "initial",
    
  },
});

const RoundButton = styled("div")({});

const ButtonStyled = styled(Button)({
  width: "100%",
  textTransform: "none",
  maxWidth: "239px",
  minHeight: "42px",
  maxHeight: "42px",
  paddingInline:"24px",
  borderRadius:"8px",
  background:"#209D9F"
   
});

const SignUp = styled("div")({
  color: "#ffffff",
  fontFamily:"Rubik",
  fontSize:"16px",
  lineHeight:"normal",
  fontWeight:"400",
  fontStyle:"normal",
  variant:"text"
  
});

const MobileButton = styled(Button)({
  marginTop:"-4px",
  color: "#ffffff",
  "&:hover": {
    background: "transparent",
  },
});



const DropdownMenu = styled("div")({
  position: "absolute",
  top: "80px",
  backgroundColor: "#1A1526",
  width: "100%",
  boxShadow: "0px 0px 20px #2929291a",
  display: "flex",
  
});

const DropdownMenuServices = styled("div")({
  position: "absolute",
  top: "80px",
  backgroundColor: "#1A1526",
  width: "100%",
  boxShadow: "0px 0px 20px #2929291a",
  display: "flex",
  
});

const DropdownContentServices = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection:"column",
  margin: "0 auto",
  marginTop:"40px",
  maxWidth: "1440px",
  padding: "0",
  width: "100%",
  paddingBottom:"16px"
});

const DropdownContent = styled(Container)({
  display: "flex",
  justifyContent: "center",
  flexDirection:"column",
  margin: "0 auto",
  marginTop:"48px",
  maxWidth: "1440px",
  padding: "0",
  width: "100%",
  paddingBottom:"16px"
});

const MobileTextWrapper = styled(Typography)({
  color: "#EBEBEB",
  fontSize: "20px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "normal",
  fontFamily:"Poppins",
  width: "fit-content",
  textTransform: "none",
  display:"flex",
  textAlign:"center",
  justifyContent:"center",
  width:"100%",
  marginBottom:"34px",
});

const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
    setMenuOpen(!menuOpen);
  };

  

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
    if (window.location.hash === "#dr-mahl") {
      const targetElement = document.querySelector("#dr-mahl");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  

  const isMobile = windowWidth <= 600;
  const isTablet = windowWidth <= 1000;

  return (
    <BoxWrapper>
      <DivNavbarWrapper>
        <DivNavbar>
          <Frame>
          <div style={{ cursor: "pointer", display:"flex"}}>
            <a href="/">
            <ElementLogoTurquesaSin
              alt="Element logo turquesa sin"
              src={LogoBost}
              onClick={handleLetsLogoClick}
              cursor="pointer"
              // width={is600?"25px":"140px"}
              // height={is600?"40px":"48px"}
            /></a>
            </div>
            
            
            
            {isTablet ? (
              <>
                <MobileButton onClick={handleToggleMenu}>
                  {showMenu ? <img src={Close} alt="MenuButton" style={{filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 1))',}} /> : <img src={Menu} alt="MenuButton" style={{filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 1))',}}/>}
                  
                </MobileButton>
                {showMenu && (
                  <DropdownMenu>
                    <DropdownContent>
                    <Link to="/home" onClick={handleToggleMenu} style={{ textDecoration: 'none' }}>
                      <MobileTextWrapper onClick={() => { handleLetsWorkClick(); handleToggleMenu(); }} pointer>
                        Home</MobileTextWrapper>
                        </Link>
                        <Link to="/about" onClick={handleToggleMenu}  style={{ textDecoration: 'none' }}>
                      <MobileTextWrapper onClick={ ()=> {handleLetsPricingClick() ; handleToggleMenu()}}>
                        Nosotros 
                        </MobileTextWrapper>
                        </Link>
                        <Link to="/services" onClick={handleToggleMenu}  style={{ textDecoration: 'none' }}>
                        <MobileTextWrapper onClick={ ()=> {handleLetsPricingClick() ; handleToggleMenu()}}>
                        Servicios
                        </MobileTextWrapper>
                        </Link>
                        <Link to="/cotizador" onClick={handleToggleMenu}  style={{ textDecoration: 'none' }}>
                        <MobileTextWrapper onClick={ ()=> {handleLetsPricingClick() ; handleToggleMenu()}}>
                        Cotizador
                        </MobileTextWrapper>
                        </Link>
                        <Link to="/aduanas" onClick={handleToggleMenu}  style={{ textDecoration: 'none' }}>
                        <MobileTextWrapper onClick={ ()=> {handleLetsPricingClick() ; handleToggleMenu()}}>
                        Aduanas
                        </MobileTextWrapper>
                        </Link>
                      
                    </DropdownContent>
                  </DropdownMenu>
                )}
              </>
            ) : (
              <Div>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                <div style={{ cursor: "pointer" }}>
                <TextWrapper onClick={handleLetsWorkClick}>
                  Home
                  </TextWrapper>
                  </div>
                  </Link>
                  


                  <div style={{ cursor: "pointer" }}><div style={{ cursor: "pointer" }} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <div style={{height:"82px", display:"flex", alignItems:"center", width:"120%"}}>
                <Link to="/services" style={{ textDecoration: 'none' }}>
                <TextWrapper onClick={handleLetsWorkClick}>
                  Servicios
                  </TextWrapper>
                  </Link>
                        </div>
                  
{/* {showDropdown && (<DropdownMenuServices sx={{width:"373px", marginTop:"-14px"}}>
                    <DropdownContentServices>
                      <Box sx={{display:"flex",width:"100%", background:"", justifyContent:"center"}}>
                        <Box sx={{display:"flex", flexDirection:"column"}}>
                        <Box sx={{display:"flex",width:"100%", background:"", width:"341px", flexDirection:"column", paddingBottom:"40px"}}>
                          <Typography sx={{color:"#EBEBEB",fontSize:"24px", fontFamily:"Rubik", fontWeight:400,lineHeight:"32px"}}>
                          SERVICIOS 1
                          </Typography>

                          <hr style={{width:"100%", height:"1px",border: "none", background:"white", marginTop:"6px"}}></hr>

                          <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
                              <Box sx={{display:"flex", background:"", width:"293px", flexDirection:"column"}}>
                              
                              <Link to="/ouservices/page/prolotherapy" style={{ textDecoration: 'none' }}>
                                <Typography sx={{fontFamily:"Rubik", fontSize:"16px", marginBottom:"4px", fontWeight:400, lineHeight:"normal", color:"#EBEBEB", '&:hover': {textDecoration: "underline"},}}>
                                Ejemplo 1
                                </Typography>
                                </Link>

                                <Link to="/ouservices/page/stem" style={{ textDecoration: 'none' }}>
                                <Typography sx={{fontFamily:"Rubik", fontSize:"16px",marginBottom:"4px", fontWeight:400, lineHeight:"normal", color:"#EBEBEB", '&:hover': {textDecoration: "underline"},}}>
                                Ejemplo 2
                                </Typography>
                               </Link>

                                <Link to="/ouservices/page/prp" style={{ textDecoration: 'none' }}>
                                <Typography sx={{fontFamily:"Rubik", fontSize:"16px",marginBottom:"4px", fontWeight:400, lineHeight:"normal", color:"#EBEBEB", '&:hover': {textDecoration: "underline"},}}>
                                Ejemplo 3
                                </Typography>
                                </Link>

                                
                              </Box>
                          </Box>
                        </Box>

                        <Box sx={{display:"flex",width:"100%", background:"", width:"341px", flexDirection:"column", paddingBottom:"40px"}}>
                          <Typography sx={{color:"#EBEBEB",fontSize:"24px", fontFamily:"Rubik", fontWeight:400,lineHeight:"32px"}}>
                          Servicios 2 
                          </Typography>

                          <hr style={{width:"100%", height:"1px",border: "none", background:"white", marginTop:"6px"}}></hr>

                          <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
                              <Box sx={{width:"100%",display:"flex", background:"", width:"293px", flexDirection:"column"}}>
                              
                              <Link to="/ouservices/page/epat" style={{ textDecoration: 'none' }}>
                                <Typography sx={{fontFamily:"Rubik", fontSize:"16px",marginBottom:"4px", fontWeight:400, lineHeight:"normal", color:"#EBEBEB", '&:hover': {textDecoration: "underline"},}}>
                                Ejemplo 4
                                </Typography>
                                </Link>

                                <Link to="/ouservices/page/entrapment" style={{ textDecoration: 'none' }}>
                                <Typography sx={{fontFamily:"Rubik", fontSize:"16px",marginBottom:"4px", fontWeight:400, lineHeight:"normal", color:"#EBEBEB", '&:hover': {textDecoration: "underline"},}}>
                                Ejemplo 5
                                </Typography>
                                </Link>
                                
                              </Box>
                          </Box>
                        </Box>

                        </Box>


                      </Box>
                    </DropdownContentServices>
                  </DropdownMenuServices>)} */}
                  
                  </div>
                
                  </div>
                  <Link to="/cotizador" style={{ textDecoration: 'none' }}>
                  <div style={{ cursor: "pointer" }}>         
                <TextWrapper onClick={handleLetsWorkClick}>
                  Cotizar
                  </TextWrapper>
                  </div>
                  </Link>

                  <Link to="/aduanas" style={{ textDecoration: 'none' }}>
                  <div style={{ cursor: "pointer" }}>         
                <TextWrapper onClick={handleLetsWorkClick}>
                  Aduanas
                  </TextWrapper>
                  </div>
                  </Link>
                  <Link to="/about" style={{ textDecoration: 'none' }}>
                  <div style={{ cursor: "pointer" }}>
                <TextWrapper  onClick={handleLetsPricingClick}>
                  Nosotros
                  </TextWrapper></div>
                  </Link>
                  {/* <Link to="/blog" style={{ textDecoration: 'none' }}>
                  <div style={{ cursor: "pointer" }}>
                    <img src={LogoSearch} style={{marginTop:"6px", marginInline:"30px"}} alt="search" />
                  </div>
</Link> */}


{/* <a href="/about#dr-mahl" style={{textDecoration:"none"}}>
                <RoundButton >
                  <ButtonStyled  onClick={handleLetsChatClick}>
                    <SignUp>Apply for a consultation</SignUp>
                  </ButtonStyled>
                </RoundButton>
  </a> */}




                {/* <Button sx={{color:"white", height:"43px"}} variant="outlined" color="primary">
                    EN
              </Button> */}



              
              </Div>
            )}
          </Frame>
        </DivNavbar>
      </DivNavbarWrapper>
    </BoxWrapper>
  );
};

