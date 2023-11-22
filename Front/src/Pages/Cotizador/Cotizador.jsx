import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Container, Grid, Box, LinearProgress } from '@mui/material';
import primeravez from "../../assets/asesoria.png"
import experiencia from "../../assets/experiencia.svg"
import asesoria from "../../assets/asesoria.svg"
import price from "../../assets/cotizador.png"
import price2 from "../../assets/price2.svg"
import call from "../../assets/call.svg"
import boxs from "../../assets/despacho.jpg"
import boat from "../../assets/boat.svg"
import air from "../../assets/air.svg"
import importar from "../../assets/importar.svg"
import exportar from "../../assets/exportar.svg"
import reunion from "../../assets/reunion.gif"
import logistica from "../../assets/logistica.avif"
import camion from "../../assets/pngegg.png"
import LogisticaForm from './Form';
import { useNavigate } from 'react-router-dom';

export const Cotizador = () => {
  const [etapa, setEtapa] = useState(1);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState([]);

  console.log(opcionesSeleccionadas)

  const navigate = useNavigate()
  // Define el flujo del cotizador con las etapas y las opciones correspondientes
  const flujoCotizador = [
    {
      etapa: 1,
      pregunta: "",
      opciones: [
        { texto: "ASESORIA", siguienteEtapa: 2,img:primeravez },
        { texto: "COTIZAR", siguienteEtapa: 3, img:price },
      ],
      
    },
    
    {
      etapa: 2,
      pregunta: "",
      opciones: [
        { texto: "QUIERO UNA LLAMADA", siguienteEtapa: 5, img:call },
        { texto: "QUIERO UNA REUNIÓN", siguienteEtapa: 5, img:reunion },
        // Agregar más opciones o etapas según sea necesario
      ],
    },
    
    {
        etapa: 3,
        pregunta: "",
        opciones: [
          { texto: "DESPACHO ADUANAL", siguienteEtapa: 4, img:boxs },
          { texto: "LOGISTICA", siguienteEtapa: 4, img:logistica },
          // Agregar más opciones o etapas según sea necesario
        ],
      },
      {
        etapa: 4,
        pregunta: "",
        opciones: [
          { texto: "EXPORTAR", siguienteEtapa: 5, img:importar },
          { texto: "IMPORTAR", siguienteEtapa: 5, img:exportar },
          // Agregar más opciones o etapas según sea necesario
        ],
      },
      {
        etapa: 5,
        pregunta: "",
        opciones: [
          { texto: "MARÍTIMO", siguienteEtapa: 6, img:boat },
          { texto: "AÉREO", siguienteEtapa: 6, img:air },
          { texto: "TERRESTRE", siguienteEtapa: 6, img:camion },
          // Agregar más opciones o etapas según sea necesario
        ],
      },
    
    // Agregar más etapas según sea necesario
  ];

  const handleSeleccion = (opcionSeleccionada) => {

    if (opcionSeleccionada === "QUIERO UNA LLAMADA") {

      window.location.href = "tel:+1234567890"
    } else if (opcionSeleccionada === "QUIERO UNA REUNIÓN") {
     
      window.location.href = "https://calendly.com/facoogle/30min";
    }
    else if (opcionSeleccionada === "MARÍTIMO" && opcionesSeleccionadas.includes("EXPORTAR")) {
      navigate(`/price/EXPORTAR/maritima`)
    }
    else if (opcionSeleccionada === "MARÍTIMO" && opcionesSeleccionadas.includes("IMPORTAR")) {
      navigate(`/price/IMPORTAR/maritima`)
    }
    else if (opcionSeleccionada === "AÉREO" && opcionesSeleccionadas.includes("EXPORTAR")) {
      navigate(`/price/EXPORTAR/aerea`)
    }
    else if (opcionSeleccionada === "AÉREO" && opcionesSeleccionadas.includes("IMPORTAR")) {
      navigate(`/price/IMPORTAR/aerea`)
    }
    else if (opcionSeleccionada === "TERRESTRE" && opcionesSeleccionadas.includes("EXPORTAR")) {
      navigate(`/price/EXPORTAR/terrestre`)
    }
    else if (opcionSeleccionada === "TERRESTRE" && opcionesSeleccionadas.includes("IMPORTAR")) {
      navigate(`/price/IMPORTAR/terrestre`)
    }
    else if (opcionSeleccionada === "LOGISTICA") {
      setEtapa("LOGISTICA")
    }
     else {

    setOpcionesSeleccionadas([...opcionesSeleccionadas, opcionSeleccionada]);

    // Determinar la siguiente etapa en función de la opción seleccionada
    const etapaActual = flujoCotizador.find((etapaInfo) => etapaInfo.etapa === etapa);
    const opcion = etapaActual.opciones.find((opcion) => opcion.texto === opcionSeleccionada);
    setEtapa(opcion.siguienteEtapa);
  }
  };

  const handleRetroceso = () => {
    if (etapa > 1) {
      // Restar 1 a la etapa actual para retroceder
      setEtapa(etapa - 1);
    }
    setOpcionesSeleccionadas(opcionesSeleccionadas.slice(0, -1));
  };

  return (
    <Container sx={{ marginTop: "130px" }}>
      <Box display="flex" alignItems="center">
        {flujoCotizador.map((etapaInfo) => (
          <Box key={etapaInfo.etapa} sx={{ flex: 1, textAlign: 'center' }}>
            <Typography variant="body1" color={etapaInfo.etapa === etapa ? 'text.primary' : 'text.secondary'}>
              Etapa {etapaInfo.etapa}
            </Typography>
          </Box>
        ))}
      </Box>
      
      <LinearProgress variant="determinate" value={((etapa - 1) / (flujoCotizador.length - 1)) * 100} />
      {etapa <= flujoCotizador.length && etapa !== "LOGISTICA" ? (
        <Grid container spacing={2}>
          {flujoCotizador[etapa - 1].opciones.map((opcion) => (
            <Grid item xs={12 / flujoCotizador[etapa - 1].opciones.length} key={opcion.texto}>
              <Card  onClick={() => handleSeleccion(opcion.texto)} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "350px", transition: "box-shadow 0.2s", ":hover": { boxShadow: "0 4px 8px #912327", cursor:"pointer"}}}>
                <CardContent>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                    <img style={{width:"250px", }} src={opcion.img} alt="img" />
                  </Box>
                  <Typography variant="h6">{flujoCotizador[etapa - 1].pregunta}</Typography>
                  <Typography sx={{display:"flex", textAlign:"center",marginTop:"16px",justifyContent:"center"}} variant="h6">{opcion.texto}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>
          
          
          <LogisticaForm/>


        </div>
      )}
      {etapa > 1 && (
        <Button variant="outlined" onClick={handleRetroceso} style={{marginTop:"32px", color:"white", background:"red"}}>
          Retroceder
        </Button>
      )}
    </Container>
  );
};










