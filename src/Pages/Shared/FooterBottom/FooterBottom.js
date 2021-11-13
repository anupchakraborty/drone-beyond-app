import React from 'react';
import {Box, Typography} from '@mui/material';
const FooterBottom = () => {
    return (
        <Box
            style={{ background: '#02636F' }}
            sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            color: 'white'
            }}
        >
            <Typography sx={{ mx:4, fontSize: 12, fontWeight: 'normal' }} variant="body1" gutterBottom component="div">
                CopyRight by Anup Chakraborty | 2021
            </Typography>
        </Box>
    );
};

export default FooterBottom;