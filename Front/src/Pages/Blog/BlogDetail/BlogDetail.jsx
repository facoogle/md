import React, {useEffect} from "react";
import { Box } from "@mui/material";
import Preview from "./Preview"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from "react-redux";
import { getBlogDetail } from "../../../state/actions/blog";
import { useParams } from "react-router-dom";
import { MiniCardFinal } from "../../../components/Cards/MiniCardFinal";
import { Footer } from "../../../components/Footer/Footer"

export const BlogDetail = () =>{
const is1440 = useMediaQuery('(max-width:1440px)');
const is1024 = useMediaQuery('(max-width:1024px)');
const is800 = useMediaQuery('(max-width:800px)');
const dispatch = useDispatch()
const { id } = useParams();

const blogDetailSlice = useSelector((state) => state.blogDetailSlice.detail);

useEffect(() => {
    window.scrollTo(0, 0); // Mueve la página al principio cuando el componente se monta
  }, []);

useEffect(() => {
    dispatch(getBlogDetail(id));
  }, []);

  console.log("blog detail", blogDetailSlice)
    return(
        <div style={{marginTop:"154px"}}>
            <Box sx={{display:"flex", justifyContent:"center"}}>
                <Box sx={{display:"flex", width:"100%", maxWidth:"1440px", marginInline:is1440?(is1024?"32px":"60px"):"5%", background:"", flexDirection:"column"}}>
                    <Preview initialValues={blogDetailSlice}/>  
                    
                    {is800?null:<MiniCardFinal/>}
                    {is800?null:<div style={{paddingBottom:"200px"}}></div>}
                </Box>
            </Box>
            <Box sx={{background:"#9FE2E3"}}>
            {is800?<MiniCardFinal/>:null}

            </Box>
           <Footer/>
        </div>
    )
}