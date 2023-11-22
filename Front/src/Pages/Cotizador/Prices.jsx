import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, ButtonGroup } from '@mui/material';
import { useParams } from 'react-router-dom';
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

const TablaCostosAduana = () => {
  
  
  const { tipo, opcion } = useParams();
  const [tipoAduana, setTipoAduana] = useState(opcion);
  const [tipoEnvio, setTipoEnvio] = useState(tipo)

  const costos = data[tipoAduana];

  return (
    <div style={{paddingTop:"130px", marginInline:"5%"}}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => setTipoAduana('maritima')}>Marítima</Button>
        <Button onClick={() => setTipoAduana('aerea')}>Aérea</Button>
        <Button onClick={() => setTipoAduana('terrestre')}>Terrestre</Button>
      </ButtonGroup>
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
    </div>
  );
};

export default TablaCostosAduana;