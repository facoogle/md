import React, { useState } from 'react';
import {Typography,Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, ButtonGroup } from '@mui/material';
import { useParams, Link } from 'react-router-dom';

// Define tus datos de aduana aquí
const data = {
  maritima: {
    honorarios: "$5.000,00",
    gastosComplementarios: "$3.000,00",
    validacion: "$200,00",
    cove: "$500,00",
    previo: "$2.000,00",
    mvYHc: "$500,00",
    contrapestacion: "$50,00",
    sellos: "$200,00",
    gastosTerminal: "AL COSTO",
    total: "$11.450,00"
  },
  aerea: {
    honorarios: "$5.000,00",
    validacion: "$200,00",
    cove: "$500,00",
    revalidacion: "$500,00",
    gastosTerminal: "$2.000,00",
    mvYHc: "$500,00",
    contrapestacion: "$50,00",
    sellos: "$200,00",
    total: "$8.950,00"
  },
  terrestre: {
    honorarios: "$5.000,00",
    gastosComplementarios: "$3.000,00",
    validacion: "$200,00",
    cove: "$500,00",
    mvYHc: "$500,00",
    contrapestacion: "$50,00",
    sellos: "$200,00",
    total: "$9.450,00"
  }
};

const data2 = {
  maritima: {
    honorarios: "$4.000,00",
    gastosComplementarios: "$2.000,00",
    validacion: "$200,00",
    cove: "$500,00",
    previo: "$2.000,00",
    mvYHc: "$500,00",
    contrapestacion: "$50,00",
    sellos: "$200,00",
    gastosTerminal: "AL COSTO",
    total: "$9.450,00"
  },
  aerea: {
    honorarios: "$4.500,00",
    validacion: "$200,00",
    cove: "$500,00",
    revalidacion: "$500,00",
    gastosTerminal: "$2.000,00",
    mvYHc: "$500,00",
    contrapestacion: "$50,00",
    sellos: "$200,00",
    total: "$8.450,00"
  },
  terrestre: {
    honorarios: "$4.000,00",
    gastosComplementarios: "$2.000,00",
    validacion: "$200,00",
    cove: "$500,00",
    mvYHc: "$500,00",
    contrapestacion: "$50,00",
    sellos: "$200,00",
    total: "$7.450,00"
  }
};

const TablaCostosAduana = () => {
  
  
  const { tipo, opcion } = useParams();
  const [tipoAduana, setTipoAduana] = useState(opcion);
  const [tipoEnvio, setTipoEnvio] = useState(tipo)

  const costos = tipoEnvio==="IMPORTAR"?data[tipoAduana]:data2[tipoAduana]

  return (
    <div style={{paddingTop:"130px", marginInline:"5%"}}>
      <ButtonGroup  variant="contained" aria-label="outlined primary button group">
        <Button sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}} onClick={() => setTipoAduana('maritima')}>Marítima</Button>
        <Button sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}} onClick={() => setTipoAduana('aerea')}>Aérea</Button>
        <Button sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none",}} onClick={() => setTipoAduana('terrestre')}>Terrestre</Button>
      </ButtonGroup>
      <Typography style={{fontSize:"32px"}}>
    Costos de {tipoEnvio} via {tipoAduana}
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Concepto</TableCell>
              {tipoEnvio==="IMPORTAR"?<TableCell align="right">Importación</TableCell>:
              <TableCell align="right">Exportación</TableCell>
              }
              
              
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(costos).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                {tipoEnvio==="IMPORTAR"?<TableCell align="right">{value}</TableCell>:
                <TableCell align="right">{value}</TableCell>
                }
                
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{display:"flex", width:"100%", justifyContent:"center"}}>
        <Link to="/form" style={{ textDecoration: 'none' }}>
                    <Button data-aos="fade" data-aos-duration={600} data-aos-delay="500" variant="contained" sx={{width:"100%",background:"#912327", color:"#EBEBEB",fontFamily:"Poppins", fontSize:"16px",fontWeight:400, maxWidth:"316px", textTransform: "none", marginTop:"16px"}}>
                    Personalizar Cotización
                    </Button>
                    </Link>
      </Box>
      
    </div>
  );
};

export default TablaCostosAduana;