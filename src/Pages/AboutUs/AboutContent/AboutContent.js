import React from 'react';
import {Grid, Typography, Container} from '@mui/material';
import about from '../../../images/fixing-drone-maintenance-shop_1098-13791.jpg';

const AboutContent = () => {
    return (
        <Container>
            <Grid container spacing={2} sx={{ my: 3 }}>
                <Grid item xs={12} md={6}>
                    <img src={about} style={{ width: '100%' }} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ color: '#C2511D' }}>
                        Why Chooses Us
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, textAlign: 'left' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis, aliquid optio sint sunt doloremque assumenda corporis nam? Ratione, veritatis fugiat neque eaque tempore placeat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis, aliquid optio sint sunt doloremque assumenda corporis nam? Ratione, veritatis fugiat neque eaque tempore placeat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis, aliquid optio sint sunt doloremque assumenda corporis nam? Ratione, veritatis fugiat neque eaque tempore placeat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium eum eaque adipisci officiis nobis, aliquid optio sint sunt doloremque assumenda corporis nam? Ratione, veritatis fugiat neque eaque tempore placeat.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutContent;