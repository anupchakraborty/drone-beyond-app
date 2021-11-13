import React from 'react';
import {Grid, Box, Typography, Container, Paper} from '@mui/material';
import avater from '../../../images/avatar-icon.png';

const Reviews = () => {
    return (
        <Container sx={{ my: 3 }}>
        <Box>
            <Typography variant="h4" sx={{ color: '#C2511D' }}>
                Our Satiesfied Client
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#C2511D' }}>
                Says there Opinions
            </Typography>
        </Box>
        <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
                <Paper variant="outlined">
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', px: 2, pb: 3 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mx: 2 }}>
                        <Box md={6}>
                            <img src={avater} style={{ width: '100px', height: '70px' }} alt="" />
                        </Box>
                        <Box md={6}>
                            <Typography variant="body1" sx={{ textAlign: 'left'}}>
                                Anup Chakraborty
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left'}}>
                                3 days ago
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper variant="outlined">
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', px: 2, pb: 3 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mx: 2 }}>
                        <Box md={6}>
                            <img src={avater} style={{ width: '100px', height: '70px' }} alt="" />
                        </Box>
                        <Box md={6}>
                            <Typography variant="subtitle1" sx={{ textAlign: 'left'}}>
                                Anup Chakraborty
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left'}}>
                                3 days ago
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper variant="outlined">
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', px: 2, pb: 3 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mx: 2 }}>
                        <Box md={6}>
                            <img src={avater} style={{ width: '100px', height: '70px' }} alt="" />
                        </Box>
                        <Box md={6}>
                            <Typography variant="body1" sx={{ textAlign: 'left'}}>
                                Anup Chakraborty
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left'}}>
                                3 days ago
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </Container>
    );
};

export default Reviews;