import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams } from 'react-router-dom';

//components Home
import { Portada } from "./01-Portada/Portada";
import { OurServices } from "./02-OurServices/OurServices";
import { DrCertification } from "./03-DrCertification/DrCertification";
import { Carousel } from "./04-Carousel/Carousel";
import { SectionBlog } from "./05-Blog/SectionBlog";
import { Contact } from "./06-Contact/Contact";
import  FormikForm  from "../../components/Contact/FormContact";
import { Footer } from "../../components/Footer/Footer";
import { MiniCardFinal } from "../../components/Cards/MiniCardFinal";


import { getPaginatedBlogs } from "../../state/actions/blog";





export const Home = () => {

  const dispatch = useDispatch();
  const { blogAll } = useSelector((state) => state.blogAll);
  const is900 = useMediaQuery('(max-width:900px)');

  useEffect(() => {
    
    dispatch(getPaginatedBlogs(1,3,""));
  }, [dispatch]);
    
  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la página al principio cuando el componente se monta
  }, []);

  return (
    <div >
      <Portada/>
      <OurServices/>
      <DrCertification/>
      <div style={{marginTop:is900?"":"250px",marginBottom:"130px",display:"flex", justifyContent:"center"}}>
        <div style={{ cursor:"pointer",display:"flex", justifyContent:"center",alignItems:"center", paddingInline:"5%"}}>
       <MiniCardFinal/>
        </div>
      </div>
      
      {/* 
      
      <Carousel/>
      <SectionBlog blogpublic={blogAll?.posts} home={true}/>
      <div id="dr-mahl"></div>
      <Contact/>
      <div style={{marginBottom:"140px"}}></div>
      
       */}
      <Footer/>
      
    </div>
  );
};



