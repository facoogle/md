import React, { useState } from 'react';
import { Grid, Button, Paper, Typography } from '@mui/material';
import { Footer } from '../../components/Footer/Footer';

function Maps() {
  let fronterizas = "https://www.google.com/maps/d/u/0/embed?mid=1jiu6HtrEZ4Wrl_rnYlpc9iUiFGkZHqc&ehbc=2E312F";
  let maritimas = "https://www.google.com/maps/d/u/0/embed?mid=1IOKxKqIpCkIWYed6H1f-oK80DadUYEA&ehbc=2E312F";
  let aereas = "https://www.google.com/maps/d/u/0/embed?mid=1zhULW3mzp2nMTOJyUJ-yNZdxc5CXRJ4&ehbc=2E312F";

  const [selectedMap, setSelectedMap] = useState(fronterizas);

  const handleMapChange = (mapType) => {
    setSelectedMap(mapType);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "500px" }}>
        <div style={{ paddingTop: "230px", marginInline: "5%", width: "100%", maxWidth: "1440px" }}>
          <Grid container spacing={2}>
            {/* Botones (Desktop) */}
            <Grid item xs={12} md={4} sx={{width:"100%"}}>
            <Typography sx={{fontWeight:"600", fontSize:"36px"}}>
            ¿Sabías que en México hay 50 ADUANAS?

            </Typography>

              <Button
                variant={selectedMap === fronterizas ? 'contained' : 'outlined'}
                color="error"
                onClick={() => handleMapChange(fronterizas)}
                fullWidth
                style={{marginTop:"28px",fontSize:"28px", backgroundColor: selectedMap === fronterizas ? '#912327' : 'transparent' }}
              >
                FRONTERIZAS
              </Button>
              <Button
                variant={selectedMap === maritimas ? 'contained' : 'outlined'}
                color="error"
                onClick={() => handleMapChange(maritimas)}
                fullWidth
                style={{marginTop:"28px",fontSize:"28px",  backgroundColor: selectedMap === maritimas ? '#912327' : 'transparent' }}
              >
                MARÍTIMAS
              </Button>
              <Button
                variant={selectedMap === aereas ? 'contained' : 'outlined'}
                color="error"
                onClick={() => handleMapChange(aereas)}
                fullWidth
                style={{marginTop:"28px",fontSize:"28px",  backgroundColor: selectedMap === aereas ? '#912327' : 'transparent' }}
              >
                AÉREAS
              </Button>
            </Grid>

            {/* Mapa */}
            <Grid item xs={12} md={8}>
              <Paper style={{ height: '400px', background: 'lightgray' }}>
                <div>
                  <iframe src={selectedMap} width="100%" height="600" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Maps;
