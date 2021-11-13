import React from 'react';
import {Box, Typography} from '@mui/material';
import {Facebook, Twitter, YouTube} from '@mui/icons-material';

const Topbar = () => {
    return (
        <Box
            style={{ background: '#02636F' }}
            sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            color: 'white'
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} xs={12} md={6}>
                <Box xs={6} md={4}>
                    <Typography sx={{ mx:4, fontSize: 12, fontWeight: 'normal' }} variant="body1" gutterBottom component="div">
                        Opening Hours
                    </Typography>
                    <Typography sx={{ mx:4, fontSize: 12, fontWeight: 'normal' }} variant="body1" gutterBottom component="div">
                        09.00 AM - 05.00 PM
                    </Typography>
                </Box>
                <Box xs={6} md={4}>
                    <Typography sx={{ mx:4, fontSize: 12, fontWeight: 'normal' }} variant="body1" gutterBottom component="div">
                        Visit Our Location
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 'normal' }} variant="body1" gutterBottom component="div">
                        Brokklyn, NY 10036, USA
                    </Typography>
                </Box>
                <Box xs={6} md={4}>
                    <Typography sx={{ mx:4, fontSize: 12, fontWeight: 'normal' }} variant="body1" gutterBottom component="div">
                        Contact Us
                    </Typography>
                    <Typography sx={{ mx:4, fontSize: 12, fontWeight: 'normal' }} variant="body1" gutterBottom component="div">
                        +123-456-789
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', ml: 3}}>
                <Facebook sx={{ mr: 2}} />
                <Twitter sx={{ mr: 2}} />
                <YouTube sx={{ mr: 2}} />
            </Box>
      </Box>
    );
};

export default Topbar;