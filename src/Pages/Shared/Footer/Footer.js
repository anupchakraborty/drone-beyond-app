import React from 'react';
import {Grid, Box, Typography, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import logo from '../../../images/logo-web-template-gradient-drone-design_23-2148833395.png';
import {Facebook, Twitter, YouTube} from '@mui/icons-material';

const Footer = () => {
    return (
    <Grid container spacing={2} style={{ background: '#1D838F', color: 'white' }}>
        <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>
                <Box>
                    <img style={{ width:'200px', height:'200px' }} src={logo} alt="" />
                </Box>
                <Box sx={{ mt: 8 }}>
                    <Typography variant="h4">
                        Drone Beyond
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }} variant="body1">
                        Boost Your Business Using Our Drone
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis cupiditate provident minus dignissimos aperiam odit commodi veniam explicabo, illum asperiores ullam natus.
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={2}>
            <nav aria-label="secondary mailbox folders">
                <Typography variant="h6" sx={{ ml: 2, textAlign: 'left' }}>
                    Our Services
                </Typography>
                <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#Photography">
                    <ListItemText primary="Photography" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#security-surveillance">
                    <ListItemText primary="Security Surveillance" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#Building-Inspections">
                    <ListItemText primary="Building Inspections" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#Agricultural-Surveys">
                    <ListItemText primary="Agricultural Surveys" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#Underwater-Inspections">
                    <ListItemText primary="Underwater Inspections" />
                    </ListItemButton>
                </ListItem>
                </List>
            </nav>
        </Grid>
        <Grid item xs={12} md={2}>
            <nav aria-label="secondary mailbox folders">
                <Typography variant="h6" sx={{ ml: 2, textAlign: 'left' }}>
                    Links
                </Typography>
                <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#Photography">
                    <ListItemText primary="About Us" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#security-surveillance">
                    <ListItemText primary="All Products" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#Building-Inspections">
                    <ListItemText primary="Our Services" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#Agricultural-Surveys">
                    <ListItemText primary="News" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#Underwater-Inspections">
                    <ListItemText primary="Contact Us" />
                    </ListItemButton>
                </ListItem>
                </List>
            </nav>
        </Grid>
        <Grid item xs={12} md={3}>
            <Box>
                <Typography sx={{ ml: 2, textAlign: 'left' }} variant="h6">
                    Our Address
                </Typography>
            </Box>
            <Box>
                <Typography variant="body1" sx={{ mt: 4 }}>
                    New York, 101010 House Done Yeard
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', ml: 3, mt: 2}}>
                <Facebook sx={{ mr: 2}} />
                <Twitter sx={{ mr: 2}} />
                <YouTube sx={{ mr: 2}} />
            </Box>
        </Grid>
    </Grid>
    );
};

export default Footer;