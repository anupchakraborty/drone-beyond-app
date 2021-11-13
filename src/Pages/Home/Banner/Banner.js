import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import bg from '../../../images/drone-surveillance-concept-illustration_114360-4931.jpg';



const bannerBg = {
    background: `url(${bg})`,
    height: 400,
    backgroundRepeat: 'no-repeat'
}

const verticalCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: 400,
}

const Banner = () => {
    return (
        <Container style={ bannerBg } sx={{ flexGrow: 1, mt: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    
                </Grid>
                <Grid item xs={12} md={6} style={{  ...verticalCenter }}>
                    <Typography variant="h3" sx={{ color: '#C2511D', my: 2 }}>
                        Grow Your Business
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#C2511D' }}>
                        Using Our Drone
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: '14px', color: 'gray', my: 4 }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, praesentium omnis.
                    </Typography>
                    <Button variant="contained" style={{ color: '#5CE7ED' }}>Learn More</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;