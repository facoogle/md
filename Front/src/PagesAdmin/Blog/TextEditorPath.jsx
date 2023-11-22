import React, { useState, useEffect } from 'react';
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import Preview from './Preview';
import CargarImagenImg from "../../assets/cargaimg.png"
import { Box, TextField, Button, Chip, Paper, Grid, } from '@mui/material';
import ImageResize from 'quill-image-resize-module-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./TextEditor.css"
import Swal from "sweetalert2"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { editBlog } from '../../state/actions/blog';
import { useParams } from "react-router-dom";
import { getBlogDetail } from '../../state/actions/blog';



const userData = localStorage.getItem('userData');
const token = userData ? JSON.parse(userData).user : null;
const decoded = token ? JSON.parse(atob(token.split('.')[1])) : null;
const decodedUser = decoded?.user;



const EditorWithPreview = () => {

const { id } = useParams();

useEffect(() => {
  dispatch(getBlogDetail(id));
}, []);

const blogDetailSlice = useSelector((state) => state.blogDetailSlice.detail);
console.log("editasss", blogDetailSlice)

useEffect(() => {
  // Actualizar el valor del título en initialValues cuando blogDetailSlice.titulo se haya cargado
  if (blogDetailSlice?.titulo) {
    formik.setFieldValue('titulo', blogDetailSlice.titulo);
    formik.setFieldValue('description', blogDetailSlice.description);
    formik.setFieldValue('descriptionImg', blogDetailSlice.descriptionImg);
    formik.setFieldValue('imageFile', blogDetailSlice.imageFile);
    setImgPortada(blogDetailSlice.imageFile)
    formik.setFieldValue('tags', blogDetailSlice.tags);
    setTags(blogDetailSlice.tags)
    formik.setFieldValue('content', blogDetailSlice.content);
    setEditorContent(blogDetailSlice.content)
    formik.setFieldValue('postId', id);
   
    
  }
}, [blogDetailSlice]);

const is800 = useMediaQuery('(max-width:800px)');
Quill.register('modules/imageResize', ImageResize); 
  const [editorContent, setEditorContent] = useState('')
  const [previewContent, setPreviewContent] = useState('');
  const [editorReady, setEditorReady] = useState(false); // Nuevo estado para indicar si el editor está listo
  const [imgPortada, setImgPortada] = useState(false)
  
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState([]);

  const [previewReady, setPreviewReady] = useState(false)

  const dispatch = useDispatch()

  const handleClickPreview = () =>{
    setPreviewReady(!previewReady)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
   
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      
      event.preventDefault(); // Evitar que se agregue una coma o salto de línea al input
      if (inputValue.trim() !== '' && tags.length < 5) {
        
        setTags((prevTags) => [...prevTags, inputValue.trim()]);
        setInputValue('');
        
        
      } else{
        Swal.fire(
          'Ups!',
          'El maximo de tags es 5!',
        )
      }
    }
  };

  useEffect(()=>{
    formik.setFieldValue('tags', tags);
  },[tags])

  console.log(tags)

  const handleTagDelete = (tagToDelete) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
  };

  const handleImageUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'lhrxavmr'); // Reemplaza por tu upload_preset

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dumk9db4g/image/upload', // Reemplaza por tu cloud_name
        formData
      );

      const imageUrl = response.data.secure_url;

      if (editorReady) {
        // Insertamos la imagen en el editor solo si está listo
        const editor = editorRef.current.getEditor();
        //const range = editor.getSelection();
        //editor.insertEmbed(range ? range.index : range.index, 'image', imageUrl, 'user');
        const selection = editor.getSelection();
        if (selection) {
       editor.insertEmbed(selection.index, 'image', imageUrl, 'user');
        } else {
        editor.insertEmbed(editor.getLength(), 'image', imageUrl, 'user');
        }
        // Obtenemos el contenido actualizado del editor en formato HTML
        const updatedContentHTML = editor.getHTML();

        // Actualizamos la vista previa con el contenido actualizado
        setPreviewContent(updatedContentHTML);
      }
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  console.log(decodedUser, "soy decoded")

  const uploadImageToCloudinary = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'lhrxavmr'); // Reemplaza con tu upload_preset
  
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dumk9db4g/image/upload', // Reemplaza con tu cloud_name
        formData
      );
  
      const imageUrl = response.data.secure_url;
  
      // Haz algo con la imageUrl, como guardarla en el estado
      // o mostrarla en algún lugar de tu componente
      console.log('Image URL:', imageUrl);

      setImgPortada(imageUrl)

      formik.setFieldValue('imageFile', imageUrl);
  
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  const handleImagePortadaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      
      uploadImageToCloudinary(file);
    }
  };

  
  

  const formik = useFormik({
    initialValues: {
      titulo:"",
      description: '',
      descriptionImg:"",
      imageFile: "",
      tags:[],
      content:"",
      userId:decodedUser?.id,
      postId:id
    },
    validationSchema: Yup.object({
      titulo: Yup.string().required('Campo requerido'),
      description: Yup.string().required('Campo requerido'),
      descriptionImg: Yup.string().required('Campo requerido'),
    }),
    onSubmit: async (values) => {
      console.log(values, "formik values")
      dispatch(editBlog(values))
    },
  });

  const handleImageInsert = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;

    handleImageUpload(file);
  };

  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], // Estilos de texto
        [{ header: 1 }, { header: 2 }], // Títulos de sección
        [{ list: 'ordered' }, { list: 'bullet' }], // Listas ordenadas y no ordenadas
        ['link'], // Enlaces e imágenes
        ['clean'], // Limpieza de formato
        [{ color: [] }, { background: [] }], // Colores de texto y de fondo
        [{ size: ['small', false, 'large', 'huge'] }], // 
        [{ align: [] }],
        ['video'],
        
        
      ],
     
   
    }, imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
     }
  };

  const handleChange = (value) => {
    setEditorContent(value);
    console.log("soy editorContent", editorContent)
    formik.setFieldValue('content', value);
  };

  const editorRef = React.useRef();

  useEffect(() => {
    // El editor está listo para ser utilizado
    setEditorReady(true);
  }, []);

  console.log(formik.values, "soy")

  return (
    <div>
      
      <form onSubmit={formik.handleSubmit}>
          <TextField
            id="titulo"
            name="titulo"
            label="Título"
            fullWidth
            InputLabelProps={{
              style: { color: 'black' } 
            }}
            value={formik.values.titulo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.titulo && Boolean(formik.errors.titulo)}
            helperText={formik.touched.titulo && formik.errors.titulo}
            sx={{marginBottom:"8px"}}
          />
          <TextField
            id="description"
            name="description"
            label="Breve Descripcion"
            fullWidth
            InputLabelProps={{
              style: { color: 'black' } 
            }}
            value={formik.values.description}
            onChange={(e) => {
              formik.handleChange(e)
              handleImagePortadaChange(e);
              }
            }
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />

<Grid sx={{display:"flex", alignItems:"center"}} container spacing={3} >
      <Grid item xs={is800?12:6}>
        <label
            className=""
            htmlFor="fileUploadButton2"
            style={{
              backgroundColor: '',
              color: 'white',
              padding: '10px 15px',
              cursor: 'pointer',
            }}
          >
            <img style={{ width: '20px' }} src={CargarImagenImg} alt="Cargar Imagen" />
          </label>
          <input
            id="fileUploadButton2"
            type="file"
            accept="image/*"
            onChange={
              handleImagePortadaChange // Manejo de cambios de la imagen
            }
            style={{ display: 'none' }}
          /><Box sx={{height:"100%", maxHeight:"200px"}}>
            {imgPortada?
            <>
            <img style={{height:"190px"}} src={imgPortada} alt="portada" />
            </>
              :
          <div>Cargar imagen de portada</div>}
          

          </Box>
      </Grid>
      <Grid sx={{display:"flex", }} item xs={is800?12:6}>
      <TextField
            id="descriptionImg"
            name="descriptionImg"
            label="Descripcion de imagen"
            fullWidth
            InputLabelProps={{
              style: { color: 'black' } 
            }}
            value={formik.values.descriptionImg}
            onChange={(e) => {
              formik.handleChange(e)
              handleImagePortadaChange(e);
              }
            }
            onBlur={formik.handleBlur}
            error={formik.touched.descriptionImg && Boolean(formik.errors.descriptionImg)}
            helperText={formik.touched.descriptionImg && formik.errors.descriptionImg}
          />
      </Grid>
    </Grid>
          

          
      
    
    
<label  class="ql-stroke" htmlFor="fileUploadButton" style={{position:"absolute", backgroundColor: '', color: 'white', marginTop:"9px",marginLeft:"18px", cursor: 'pointer' }}>
    <img style={{width:"20px"}} src={CargarImagenImg}/>
    </label>
    <input id='fileUploadButton' type="file" accept="image/*" onChange={handleImageInsert}  style={{display:"none"}}/>
    <ReactQuill  ref={editorRef} value={editorContent} onChange={handleChange} modules={modules}  style={{ height:"auto"}}/>
      
      

    
        


        <div style={{marginTop:is800?"95px":"60px"}}>

      <TextField
        label="Tags"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        InputLabelProps={{
          style: { color: 'black' } 
        }}
      />
      <Paper component="ul" sx={{ marginTop: 1, display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {tags.map((tag, index) => (
          <li key={index}>
            <Chip label={tag} onDelete={() => handleTagDelete(tag)} />
          </li>
        ))}
      </Paper>
    </div>

    <Box sx={{display:"flex",justifyContent:"end", marginTop:"0px"}}>
    <Button sx={{background:"orange", color:"white", marginRight:"16px"}} onClick={handleClickPreview}>Vista Previa</Button>
    <Button sx={{background:"green", color:"white", paddingInline:"26px"}} type="submit">Editar</Button>
      </Box>
     </form>   
     {previewReady?<Preview initialValues={formik.values} content={editorContent}  />:<></>}
      
    </div>
  );
};

export default EditorWithPreview;









