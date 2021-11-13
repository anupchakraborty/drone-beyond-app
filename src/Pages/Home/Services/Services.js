import React from 'react';
import {Grid, Box, Typography, Container, Paper} from '@mui/material';
import photography from '../../../images/photography.jpg'
import blood from '../../../images/blood.png';
import food from '../../../images/food.png';
import productdelivery from '../../../images/product-delivery.png';
import surveilanc from '../../../images/surveilanc.jpg';
import secruity from '../../../images/secruity.jpg';

const Services = () => {
    return (
    <Container sx={{ my: 3 }}>
        <Box>
            <Typography variant="h4" sx={{ color: '#C2511D' }}>
                Our Services
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#C2511D' }}>
                Your Pleasure is our goal
            </Typography>
        </Box>
        <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
                <Paper variant="outlined">
                    <Box>
                        <img src={ photography } style={{ width: '150px', height: '150px' }} alt="" />
                    </Box>
                    <Typography variant="h6" sx={{ mt: 2, color: '#C2511D' }}>
                        Photography
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', px: 2, pb: 3 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper variant="outlined">
                    <Box>
                        <img src={ blood } style={{ width: '150px', height: '150px' }} alt="" />
                    </Box>
                    <Typography variant="h6" sx={{ mt: 2, color: '#C2511D' }}>
                        Blood Delivery
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', px: 2, pb: 3 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper variant="outlined">
                    <Box>
                        <img src={ productdelivery } style={{ width: '150px', height: '150px' }} alt="" />
                    </Box>
                    <Typography variant="h6" sx={{ mt: 2, color: '#C2511D' }}>
                        Product Delivery
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', px: 2, pb: 3 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper variant="outlined">
                    <Box>
                        <img src={ surveilanc } style={{ width: '150px', height: '150px' }} alt="" />
                    </Box>
                    <Typography variant="h6" sx={{ mt: 2, color: '#C2511D' }}>
                        Surveilanc
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', px: 2, pb: 3 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper variant="outlined">
                    <Box>
                        <img src={ secruity } style={{ width: '150px', height: '150px' }} alt="" />
                    </Box>
                    <Typography variant="h6" sx={{ mt: 2, color: '#C2511D' }}>
                        Secruity Camera
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', px: 2, pb: 3 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper variant="outlined">
                    <Box>
                        <img src={ food } style={{ width: '150px', height: '150px' }} alt="" />
                    </Box>
                    <Typography variant="h6" sx={{ mt: 2, color: '#C2511D' }}>
                        Food Delivery
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', px: 2, pb: 3 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </Container>
    );
};

export default Services;