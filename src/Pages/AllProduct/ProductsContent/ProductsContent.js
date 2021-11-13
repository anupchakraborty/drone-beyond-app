import React, { useEffect, useState } from 'react';
import {Grid, Box, Typography, Container} from '@mui/material';
import photography from '../../../images/photography.jpg'
import blood from '../../../images/blood.png';
import food from '../../../images/food.png';
import productdelivery from '../../../images/product-delivery.png';
import surveilanc from '../../../images/surveilanc.jpg';
import secruity from '../../../images/secruity.jpg';
import SingleProduct from '../SinglePorduct/SingleProduct';

const ProductsContent = () => {
    const [allProduct, setAllProduct] = useState([]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setAllProduct(data));
    } ,[]);
    return (
        <Container sx={{ my: 3 }}>
        <Box>
            <Typography variant="h4" sx={{ color: '#C2511D' }}>
                Our Product
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#C2511D' }}>
                Our are provide 24/7 services
            </Typography>
        </Box>
        <Grid container spacing={2} sx={{ mt: 2 }}>
            {
                allProduct.map(product => <SingleProduct key={product.key} product={product}/>)
            }
        </Grid>
    </Container>
    );
};

export default ProductsContent;