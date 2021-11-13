import React from 'react';
import {Box, Typography, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#0E8492' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              Drone App
            </Typography>
            <NavLink to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                <Button sx={{ textTransform: 'none' }} color="inherit">Home</Button>
            </NavLink>
            <NavLink to="/aboutus" style={{ textDecoration: 'none', color: 'white' }}>
                <Button sx={{ textTransform: 'none' }} color="inherit">About US</Button>
            </NavLink>
            <NavLink to="/allproduct" style={{ textDecoration: 'none', color: 'white' }}>
                <Button sx={{ textTransform: 'none' }} color="inherit">All Product</Button>
            </NavLink>
            <NavLink to="/services" style={{ textDecoration: 'none', color: 'white' }}>
                <Button sx={{ textTransform: 'none' }} color="inherit">Our Services</Button>
            </NavLink>
            <NavLink to="/contactus" style={{ textDecoration: 'none', color: 'white' }}>
                <Button sx={{ textTransform: 'none' }} color="inherit">Contact Us</Button>
            </NavLink>
            {
              user?.email ?
              <>
                <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button sx={{ textTransform: 'none' }} color="inherit">Dashboard</Button>
                </NavLink>
                <Button sx={{ textTransform: 'none' }} onClick={logOut} color="inherit">Logout</Button>
              </>
              :
              <>
                <NavLink to="/signin" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button sx={{ textTransform: 'none' }} color="inherit">Sign In</Button>
                </NavLink>
                <NavLink to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button sx={{ textTransform: 'none' }} color="inherit">Sign Up</Button>
                </NavLink>
              </>
            }
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Header;