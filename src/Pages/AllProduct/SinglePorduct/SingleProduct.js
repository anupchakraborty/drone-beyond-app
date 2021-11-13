import React from 'react';
import {Grid, Box, Typography, Paper, Button} from '@mui/material';

const SingleProduct = (props) => {
    const {name, img, wholePrice} = props.product;
    return (
        <Grid item xs={12} md={4}>
        <Paper variant="outlined">
            <Box>
                <img src={ img } style={{ width: '150px', height: '150px' }} alt="" />
            </Box>
            <Typography variant="h6" sx={{ mt: 2, color: '#C2511D' }}>
                {name}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', px: 2, pb: 3 }}>
                {wholePrice}
            </Typography>
            <Button variant="contained">Buy Now</Button>
        </Paper>
    </Grid>
    );
};

export default SingleProduct;