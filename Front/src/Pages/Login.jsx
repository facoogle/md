import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from "yup";
import "./Login.css"
import { 
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  
  Paper,
  Box,
  Grid,
  Typography,
  
  
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { logIn } from '../state/actions/user';

import { Link } from 'react-router-dom';
//-------------------- Assets --------------------------
//import BgImage from '../../assets/BG1.png'
//import GoogleVector from '../../assets/Social Icons.png'
//const imageLogin = "https://definicion.de/wp-content/uploads/2009/06/producto.png"

import imageLogin from "../assets/LogoLogin.png"
// components

import { Footer } from '../components/Footer/Footer';




function Copyright(props) {

  
  

  return (
    <Typography variant="body2" color="black" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.consulado.com/">
        Genlife Panel
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const initialValuesLogin = {
  email: '',
  password: '',
}


const loginSchema = Yup.object().shape({
  email : Yup.string().email('mail inválido').required('Debes colocar un email'),
  password: Yup.string().required('Debes colocar la contraseña')
})



export function LogInForm() {

  const theme = useTheme();
  const loginFont = theme.palette.primary.loginFont
  const loginbackground = theme.palette.background.login
  const logininput = theme.palette.background.logininput
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  

  const handleFormSubmit = (values) => {
    setLoading(true)
    const data = new FormData();
    for(let value in values){
      data.append(value, values[value])
    }
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
    
    let email = data.get('email')
    let password = data.get('password')

    
     dispatch(logIn({email,password}))
    
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    
      
  };

  return (
    <div>
      
    <Grid container component="main" sx={{   alignItems:"center", background:"#D9D9D9", display:"flex", justifyContent:"center"}}>
      


      <Grid item xs={12} sm={12} md={12}  elevation={6} square sx={{justifyContent:"center", display:"flex"}}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            
            maxWidth:"250px",
            
            height:"800px"
            
          }}
        >
          
          
          <Typography component="h1" variant="h5" sx={{fontSize:"30px", fontWeight:"600", color:loginFont, marginBottom:"18px", textAlign:"center"}}>
          Inicio Sesión
          </Typography>
          
          <Box  sx={{ mt: 1 }}>
          <Formik 
                onSubmit={handleFormSubmit}
                initialValues={initialValuesLogin}
                validationSchema={loginSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                  resetForm
                }) =>  (
                  <Box component='form' onSubmit={handleSubmit}>
                    
                    <TextField
                      sx={{marginBottom:"27px", background:"white", borderRadius:"5px"}}
                      
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      autoComplete="email"
                      error={
                        Boolean(touched.email) && Boolean(errors.email)
                      }
                      helperText={touched.email && errors.email}
                      InputProps={{
                        disableUnderline: true, // Quita los bordes predeterminados
                        borderRadius:"5px"
                      }}
                      InputLabelProps={{
                        style: { color: "black" }, // Cambia el color aquí
                      }}
                    
                    />
                    
                    <TextField
                      sx={{marginBottom:"22px", background:"white",borderRadius:"5px"}}
                      required
                      fullWidth
                      name="password"
                      label="Contraseña"
                      InputLabelProps={{
                        style: { color: "black" }, // Cambia el color aquí
                      }}
                      type="password"
                      id="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      autoComplete="current-password"
                      
                      error={
                        Boolean(touched.password) && Boolean(errors.password)
                      }
                      helperText={touched.password && errors.password}
                    />
                    {/* <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Recuerdame"
                    /> */}
                    {/* <Grid sx={{display:"flex",justifyContent:"center", marginTop:"6px", marginBottom:"20px"}}>
                      <Link to='/login' style={{textDecoration: 'underline', color: '#00D5FA'}}>
                      ¿Olvidaste tu contraseña?
                      </Link>
                    </Grid> */}
                    {/* <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                    <Typography component="h1" variant="h5" sx={{fontSize:"14px", fontWeight:"400", color:loginFont, lineHeight:"20px", marginBottom:"18px", textAlign:"center"}}>
          ¿No tienes una cuenta? 
            
          </Typography><Link to="/register" style={{textDecoration: 'none', color: '#171E23', textAlign:"center"}}>
            REGISTRATE</Link></Box> */}
            <Box sx={{display:"flex", justifyContent:"center", width:"100%"}}>
            <Box sx={{maxWidth:"192px", width:"100%"}}>
                    <Button
                      type="submit"
                      fullWidth
                      variant='outlined'
                      

                      sx={{color:"#FFFFFF", fontSize:"13px", fontWeight:"400", marginTop:"8px", marginBottom:"24px", background:"#0B9246", textTransform: "none"}}
                      
                      
                    >
                      Iniciar
                    </Button>
                    </Box></Box>

                    {loading?
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                      <CircularProgress />
                    </Box>:<></>}


                    <Copyright sx={{ mt: 5 }} />
                  </Box>
                )}
              </Formik>
          </Box>
        </Box>
      </Grid>
    </Grid>
    <Footer/>
    </div>
  );
}


