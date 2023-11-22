import React, { useState } from 'react';
import { Grid, Button, Paper, Typography } from '@mui/material';
import { Footer } from '../../components/Footer/Footer';

function Maps() {
  let fronterizas = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.2710734015527!2d-110.9630808237569!3d31.323886056822175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d6acdae4c61485%3A0xfd97691a9d637800!2sMD%20GLOBAL%20TRADE%20SERVICES%2C%20S.C!5e0!3m2!1ses-419!2sar!4v1697570305089!5m2!1ses-419!2sa";
  let maritimas = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7444157.168046125!2d-94.74281523160943!3d24.351983075531702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f1032277809767%3A0x4061678d86094852!2sGolfo%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2sar!4v1697570879612!5m2!1ses-419!2sar";
  let aereas = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.451728557129!2d-99.0744832240215!3d19.43608124056816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc77bd93229f%3A0x2d07ef561bad244!2sAeropuerto%20Internacional%20de%20la%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2sar!4v1697570976514!5m2!1ses-419!2sar";

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
            <Grid item xs={4}>
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
                MARITIMAS
              </Button>
              <Button
                variant={selectedMap === aereas ? 'contained' : 'outlined'}
                color="error"
                onClick={() => handleMapChange(aereas)}
                fullWidth
                style={{marginTop:"28px",fontSize:"28px",  backgroundColor: selectedMap === aereas ? '#912327' : 'transparent' }}
              >
                AEREAS
              </Button>
            </Grid>

            {/* Mapa */}
            <Grid item xs={8} md={8}>
              <Paper style={{ height: '400px', background: 'lightgray' }}>
                <div>
                  <iframe src={selectedMap} width="850" height="600" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
