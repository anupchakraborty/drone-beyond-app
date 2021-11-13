import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Card, TextField, CircularProgress, Alert } from '@mui/material';
import { NavLink,useLocation, useHistory } from 'react-router-dom';
import loginbg from '../../../images/follow-me-drone-concept-illustration_114360-1166.jpg';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [ registerData, setLoginData ] = useState({});
    const location = useLocation();
    const history = useHistory();
    const {user, registerUser, isLoading, authError, signInUsingGoogle} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = {...registerData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    //form handle
    const handleLoginSubmit = e => {
        if(registerData.password !== registerData.confirmPassword){
            alert('Your Password did not match');
        }else{
            registerUser(registerData.email, registerData.password, registerData.name, history);
        }
        e.preventDefault();
    }
    //google button handle
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ py: 3, mt: 12 }}>
                        <Typography sx={{ color: 'info.main', fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                            Register in Drone Beyond
                        </Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <div>
                                <TextField
                                    sx={{ width:'75%', pb:3 }}
                                    label="Your Name"
                                    id="standard-basic"
                                    type="text"
                                    name="name"
                                    onChange={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width:'75%', pb:3 }}
                                    label="Your Email"
                                    id="standard-basic"
                                    type="email"
                                    name="email"
                                    onChange={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width:'75%', pb:3 }}
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnBlur}
                                    id="standard-basic"
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width:'75%', pb:3 }}
                                    label="Your Confirm Password"
                                    type="password"
                                    name="confirmPassword"
                                    onChange={handleOnBlur}
                                    id="standard-basic"
                                    variant="standard"
                                />
                            </div>
                            <Button type="submit" sx={{ mt: 3 }} variant="contained">Register</Button><br/>
                            <Button onClick={handleGoogleSignIn} sx={{ mt: 3 }} variant="contained">Register with Google</Button><br/>
                            <NavLink style={{ textDecoration: 'none' }}
                                to="/signin"><Button type="submit" sx={{ m: 1 }} variant="text">Already Register? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Congress! Your Account has been created Successfuly.</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width:'100%' }} src={loginbg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;