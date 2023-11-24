import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Grid, Box, Typography } from '@mui/material';

const LogisticaForm = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      correo: '',
      telefono: '',
      origen: '',
      destino: '',
      tipoMercancia: '',
      volumen: '',
      otrasEspecificaciones: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('Campo requerido'),
      correo: Yup.string().email('Correo electrónico no válido').required('Campo requerido'),
      telefono: Yup.string().required('Campo requerido'),
      origen: Yup.string().required('Campo requerido'),
      destino: Yup.string().required('Campo requerido'),
      tipoMercancia: Yup.string().required('Campo requerido'),
      volumen: Yup.string().required('Campo requerido'),
      otrasEspecificaciones: Yup.string(),
    }),
    onSubmit: (values) => {
        // Handle form submission logic here
        console.log(values);
        Swal.fire(
          'Thank you for contacting!',
          'your message has been sent successfully!',
          'success'
        )
      },
  });

  

  return (
    <Container sx={{ paddingTop: "20px" }}>
      <Typography sx={{fontSize:"32px", marginBottom:"32px"}}>
        PERSONALIZAR COTIZACIÓN
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="nombre"
              name="nombre"
              label="Nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              error={formik.touched.nombre && Boolean(formik.errors.nombre)}
              helperText={formik.touched.nombre && formik.errors.nombre}
              InputProps={{
                style: {
                  color: "black", // Cambiar el color del texto a blanco
                  fontFamily: "Rubik", // Cambiar la fuente a Rubik
                  borderBottom: "1px solid black", // Color y grosor del borde inferior
               
                }
                
              }}
              InputLabelProps={{
                style:{
                    color:"#912327"
                }
              }}
              sx={{label: { fontFamily:"Rubik", fontSize:"16px",  } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="correo"
              name="correo"
              label="Correo Electrónico"
              value={formik.values.correo}
              onChange={formik.handleChange}
              error={formik.touched.correo && Boolean(formik.errors.correo)}
              helperText={formik.touched.correo && formik.errors.correo}
              InputProps={{
                style: {
                  color: "black", // Cambiar el color del texto a blanco
                  fontFamily: "Rubik", // Cambiar la fuente a Rubik
                  borderBottom: "1px solid black", // Color y grosor del borde inferior
                }
                
              }}
              InputLabelProps={{
                style:{
                    color:"#912327"
                }
              }}
              sx={{label: { fontFamily:"Rubik", fontSize:"16px",  } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="telefono"
              name="telefono"
              label="Teléfono"
              value={formik.values.telefono}
              onChange={formik.handleChange}
              error={formik.touched.telefono && Boolean(formik.errors.telefono)}
              helperText={formik.touched.telefono && formik.errors.telefono}
              InputProps={{
                style: {
                  color: "black", // Cambiar el color del texto a blanco
                  fontFamily: "Rubik", // Cambiar la fuente a Rubik
                  borderBottom: "1px solid black", // Color y grosor del borde inferior
                }
                
              }}
              InputLabelProps={{
                style:{
                    color:"#912327"
                }
              }}
              sx={{label: { fontFamily:"Rubik", fontSize:"16px",  } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="origen"
              name="origen"
              label="Origen"
              value={formik.values.origen}
              onChange={formik.handleChange}
              error={formik.touched.origen && Boolean(formik.errors.origen)}
              helperText={formik.touched.origen && formik.errors.origen}
              InputProps={{
                style: {
                  color: "black", // Cambiar el color del texto a blanco
                  fontFamily: "Rubik", // Cambiar la fuente a Rubik
                  borderBottom: "1px solid black", // Color y grosor del borde inferior
                }
                
              }}
              InputLabelProps={{
                style:{
                    color:"#912327"
                }
              }}
              sx={{label: { fontFamily:"Rubik", fontSize:"16px",  } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="destino"
              name="destino"
              label="Destino"
              value={formik.values.destino}
              onChange={formik.handleChange}
              error={formik.touched.destino && Boolean(formik.errors.destino)}
              helperText={formik.touched.destino && formik.errors.destino}
              InputProps={{
                style: {
                  color: "black", // Cambiar el color del texto a blanco
                  fontFamily: "Rubik", // Cambiar la fuente a Rubik
                  borderBottom: "1px solid black", // Color y grosor del borde inferior
                }
                
              }}
              InputLabelProps={{
                style:{
                    color:"#912327"
                }
              }}
              sx={{label: { fontFamily:"Rubik", fontSize:"16px",  } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="tipoMercancia"
              name="tipoMercancia"
              label="Tipo de Mercancía"
              value={formik.values.tipoMercancia}
              onChange={formik.handleChange}
              error={formik.touched.tipoMercancia && Boolean(formik.errors.tipoMercancia)}
              helperText={formik.touched.tipoMercancia && formik.errors.tipoMercancia}
              InputProps={{
                style: {
                  color: "black", // Cambiar el color del texto a blanco
                  fontFamily: "Rubik", // Cambiar la fuente a Rubik
                  borderBottom: "1px solid black", // Color y grosor del borde inferior
                }
                
              }}
              InputLabelProps={{
                style:{
                    color:"#912327"
                }
              }}
              sx={{label: { fontFamily:"Rubik", fontSize:"16px",  } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="volumen"
              name="volumen"
              label="Volumen"
              value={formik.values.volumen}
              onChange={formik.handleChange}
              error={formik.touched.volumen && Boolean(formik.errors.volumen)}
              helperText={formik.touched.volumen && formik.errors.volumen}
              InputProps={{
                style: {
                  color: "black", // Cambiar el color del texto a blanco
                  fontFamily: "Rubik", // Cambiar la fuente a Rubik
                  borderBottom: "1px solid black", // Color y grosor del borde inferior
                }
                
              }}
              InputLabelProps={{
                style:{
                    color:"#912327"
                }
              }}
              sx={{label: { fontFamily:"Rubik", fontSize:"16px", } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="otrasEspecificaciones"
              name="otrasEspecificaciones"
              label="Otras Especificaciones"
              multiline
              rows={3}
              value={formik.values.otrasEspecificaciones}
              onChange={formik.handleChange}
              InputProps={{
                style: {
                  color: "black", // Cambiar el color del texto a blanco
                  fontFamily: "Rubik", // Cambiar la fuente a Rubik
                  borderBottom: "1px solid black", // Color y grosor del borde inferior
                }
                
              }}
              InputLabelProps={{
                style:{
                    color:"#912327"
                }
              }}
              sx={{label: { fontFamily:"Rubik", fontSize:"16px", } }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
              <Button sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}} type="submit" variant="contained" color="primary">
              Enviar
            </Button>
            </Box>
            
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LogisticaForm;
