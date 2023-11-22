import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email Address is required"),
  moreDetails: Yup.string().required("More Details is required"),
  consultationPreference: Yup.string().required("Consultation Preference is required"),
});

const initialValues = {
  name: "",
  phone: "",
  email: "",
  moreDetails: "",
  consultationPreference: "",
};

const FormikForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{width:"100%", background:"#151023", borderRadius:"64px", paddingTop:"26px", paddingBottom:"20px"}}>
      <Box sx={{ background: "#151023", borderRadius: "64px", width: "100%", maxWidth: "535px", margin: "0 auto", padding: "32px" }}>
        <Grid container spacing={2} direction="column">
        <Grid item>
        <Typography sx={{ textAlign:"center",fontFamily:"Ubuntu", color:"#EBEBEB", fontSize:"24px", fontWeight:"500", textTransform:"uppercase"}}>
            APPLY FOR A CONSULTATION
        </Typography>
        </Grid>

          <Grid item>
            <TextField
              id="name"
              name="name"
              
              label="Name*"
              variant="standard"
              fullWidth
              //color="white"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              InputProps={{
                style: {
                  color: "white", // Cambiar el color del texto a blanco
                  fontFamily: "Rubik", // Cambiar la fuente a Rubik
                  borderBottom: "1px solid white", // Color y grosor del borde inferior
                }
                
              }}
              sx={{label: { fontFamily:"Rubik", fontSize:"16px", fontWeight:"800" } }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="phone"
              name="phone"
              label="Phone*"
              variant="standard"
              fullWidth
              //color="white"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              InputProps={{
                style: {
                  color: "white", // Cambiar el color del texto a blanco
                  fontFamily: "Rubik", // Cambiar la fuente a Rubik
                  borderBottom: "1px solid white", // Color y grosor del borde inferior
                }
                
              }}
              sx={{label: { fontFamily:"Rubik", fontSize:"16px", fontWeight:"800" } }}
              
            />
          </Grid>
          <Grid item>
            <TextField
              id="email"
              name="email"
              label="Email Address*"
              variant="standard"
              fullWidth
              //color="white"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                style: {
                  color: "white", // Cambiar el color del texto a blanco
                  fontFamily: "Rubik", // Cambiar la fuente a Rubik
                  borderBottom: "1px solid white", // Color y grosor del borde inferior
                }
                
              }}
              sx={{label: { fontFamily:"Rubik", fontSize:"16px", fontWeight:"800" } }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="moreDetails"
              name="moreDetails"
              label="More Details"
              
              variant="standard"
              fullWidth
              //color="white"
              multiline
              rows={4}
              value={formik.values.moreDetails}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.moreDetails && Boolean(formik.errors.moreDetails)}
              helperText={formik.touched.moreDetails && formik.errors.moreDetails}
              InputProps={{
                style: {
                  color: "white", // Cambiar el color del texto a blanco
                  fontFamily: "Rubik", // Cambiar la fuente a Rubik
                  borderBottom: "1px solid white", // Color y grosor del borde inferior

                },
                
    
                
              }}
              sx={{label: { fontFamily:"Rubik", fontSize:"16px", fontWeight:"800" } }}
            />
          </Grid>
          <Grid item>
            <Typography sx={{color:"#EBEBEB", fontFamily:"Plus Jakarta Sans", fontSize:"18px", fontWeight:"800", textTransform:"capitalize"}}>
            Consultation Preffered
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{color:"#EBEBEB", fontFamily:"Plus Jakarta Sans", fontSize:"16px", fontWeight:"400", textTransform:"capitalize"}}>
            if requesting a consultation
            </Typography>
          </Grid>
          <Grid item>
            <FormControl component="fieldset">
              <RadioGroup name="consultationPreference" value={formik.values.consultationPreference} onChange={formik.handleChange}>
                <FormControlLabel value="In-Person" control={<Radio />} label="In-Person" color="white"/>
                <FormControlLabel value="Virtual/Online" control={<Radio />} label="Virtual/Online" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <Box sx={{ textAlign: "center", marginTop:"36px" }}>
            <Button type="submit" sx={{color:"#6252A3",border: "1px solid #6252A3",fontFamily:"Rubik", fontWeight:"400",fontSize:"16px",textTransform:"none", height:"48px", width:"100%",maxWidth:"316px", paddingInline:""}} variant="outlined" color="primary">
                      Contact Dr Mahl
                     </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default FormikForm;





