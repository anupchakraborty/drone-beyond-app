import React, { useState } from 'react';
import { Grid, Card, Typography, Container, Button, TextField, CircularProgress, Alert } from '@mui/material';
import loginbg from '../../../images/follow-me-drone-concept-illustration_114360-1166.jpg';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    //google button handle
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }
    return (
        <Container sx={{ my: 3 }}>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>  
                    <img src={loginbg} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>  
                <Card sx={{ py: 3, mt: 12 }}>
                        <Typography sx={{ color: 'info.main', fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                            Drone Beyond Login
                        </Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <div>
                                <TextField
                                    sx={{ width:'75%', pb:3 }}
                                    label="Your Email"
                                    id="standard-basic"
                                    name="email"
                                    onChange={handleOnChange}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width:'75%', pb:3 }}
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    id="standard-basic"
                                    variant="standard"
                                />
                            </div>
                            <Button type="submit" sx={{ mt: 3 }} variant="contained">Login</Button><br/>
                            <Button onClick={handleGoogleSignIn} sx={{ mt: 3 }} variant="contained">Login with Google</Button><br/>
                            <NavLink style={{ textDecoration: 'none' }}
                                to="/signup"><Button type="submit" sx={{ m: 1 }} variant="text">New User? Please Create an account</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;