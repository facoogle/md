import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import axios from 'axios';
import theme from '../src/theme/theme';
import TablaCostosAduana from "./Pages/Cotizador/Prices"

// Admin Component and Pages
import { HomeAdmin } from './PagesAdmin/Home';
import { LogInForm } from './Pages/Login';
import { NavBar } from './components/NavNoLogin/navBar';
import { NavBarLogin } from './components/NavLogin/NavLogin';

import ListBlogs from './PagesAdmin/ListBlogs/ListBlogs';
import BlogCreator from './PagesAdmin/Blog/BlogCreator';
import BlogEditor from "./PagesAdmin/Blog/BlogEditor"

//Component Global
import { NavBarGlobal } from './components/NavBar/NavBar';
import { Home } from './Pages/Home/Home';
import { BlogDetail } from './Pages/Blog/BlogDetail/BlogDetail';
import { DetailOurServices } from './Pages/OurServices/BlogDetail/DetailOurServices';
import { BlogHome } from './Pages/Blog/BlogHome/BlogHome';
import { OurHome } from './Pages/OurServices/OurHome/OurHome';
import { About } from './Pages/about/about';
import { Cotizador } from './Pages/Cotizador/Cotizador';

import LogisticaForm from "./Pages/Cotizador/Form"


import Maps from './Pages/Maps/Maps';


import './App.css';
import "aos/dist/aos.css";
import AOS from "aos";


const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const navigate = useNavigate();
  const [decodedToken, setDecodedToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    const token = userData ? JSON.parse(userData).user : null;
    const decoded = token ? JSON.parse(atob(token.split('.')[1])) : null;
    const decodedUser = decoded?.user;

    const validateToken = async () => {
      try {
        // Hacer una llamada al servidor para verificar la validez del token
        const response = await axios.get(`${apiUrl}/user/protected`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.user) {
          console.log(response.data);
          // El token es válido, continuar con la sesión
          setDecodedToken(decodedUser);
          
        } else {
          // El token ha expirado o no es válido, redirigir a la página de inicio de sesión
          localStorage.removeItem('userData'); // Eliminar el token del localStorage
          navigate('/');
        }
      } catch (error) {
        // Error al validar el token, redirigir a la página de inicio de sesión
        localStorage.removeItem('userData'); // Eliminar el token del localStorage
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };

    if (decodedUser && decodedUser.username) {
      // El token es válido, continuar con la sesión
      validateToken();
    } else {
      // No hay un token válido, redirigir a la página de inicio de sesión
      localStorage.removeItem('userData'); // Eliminar el token del localStorage
      setIsLoading(false);
     
    }
  }, []);

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       
        
        
        {isLoading ? (
          <div>Cargando...</div> // Muestra un indicador de carga mientras se verifica el token
        ) : (
          <>
          
           
          <Routes>
          <Route path='/' element={<><NavBarGlobal/><Home/></>} />
          <Route path='/home' element={<><NavBarGlobal/><Home/></>} />
          <Route path='/price/:tipo/:opcion' element={<><NavBarGlobal/><TablaCostosAduana/></>} />
          <Route path='/ouservices/page/:name' element={<><NavBarGlobal/><DetailOurServices/></>} />
          <Route path='/admin/blogcreator' element={<><NavBarLogin/><BlogCreator/></>} />
          <Route path='/admin/editor' element={<><NavBarLogin/><ListBlogs/></>} />
          <Route path='/admin/blogeditor/:id' element={<><NavBarLogin/><BlogEditor/></>} />
          <Route path='/blog/blogPage/:id' element={<><NavBarGlobal/><BlogDetail/></>} />
          <Route path='/blog' element={<><NavBarGlobal/><BlogHome/></>} />
          <Route path='/services' element={<><NavBarGlobal/><OurHome/></>} />
          <Route path='/about' element={<><NavBarGlobal/><About/></>} />
          <Route path='/aduanas' element={<><NavBarGlobal/><Maps/></>} />
          <Route path='/cotizador' element={<><NavBarGlobal/><Cotizador/></>} />
          <Route path='/form' element={<><NavBarGlobal/><LogisticaForm/></>} />
              
            
            {decodedToken && decodedToken.username?(
              <>
              
            
            <Route path='/admin' element={<><NavBarLogin/><BlogCreator/></>} />
            
              
            </>
            ):
            <>
            <Route path='/admin' element={<><NavBar/><LogInForm /></>} />
            <Route path='/admin/account' element={<><NavBar/><LogInForm /></>} />
            <Route path='/admin/login' element={<><NavBar/><LogInForm /></>} /></>}
           
            <Route path='/*' element={<Navigate to="/" />} /> 
          </Routes>
          </>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
