import { useState, useContext, useEffect } from 'react';

import { Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

import UserContext from './UserContext';

function Login() {
  const { user, } = useContext(UserContext);

  const [loginStatus, setLoginStatus] = useState("signed_out");

  useEffect(() => {
    if (user) {
      setLoginStatus("login_successful");
    } else {
      setLoginStatus("signed_out");
    }
  }, [user]);

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const attemptLogin = () => {
    console.log(JSON.stringify(values));
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        console.log("Sign in Successful!");
        setLoginStatus("login_successful");
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Sign in failed!: ${errorCode} - ${errorMessage}`);
        setLoginStatus("login_failed");
      });
  }
  return (
    <Box style={pageStyle}>
      <Grid container sx={{ minHeight: "100vh", textAlign: "center" }} justifyContent="center"
        alignItems="center">
        <Card variant="outlined" sx={{ width: '400px', mb: 30 }}>
          <h1>Login</h1>

          {loginStatus === "login_failed" ? <Alert severity="error" sx={{ width: '90%' }}>Login Failed</Alert> : null}

          <Grid container direction="column" justifyContent="center" alignItems="center">

            {loginStatus === "login_successful" ? <>
              <Alert severity="success" sx={{ my: 2, width: '90%' }}>Login Successful</Alert>
              <Button component={Link} to="/" variant="outlined"
                size="large" sx={{ mb: 2, width: '90%' }}>
                Return to Game Lobby
              </Button>
            </> : null}

            {loginStatus === "signed_out" ? <>
              <FormControl sx={{ my: 2, width: '90%' }}>
                <TextField id="outlined-basic" label="email" variant="outlined" onChange={handleChange('email')} />
              </FormControl>

              <FormControl sx={{ mb: 2, width: '90%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button onClick={attemptLogin} variant="outlined" size="large" sx={{ mb: 2, width: '90%' }}>Login</Button>
            </> : null}
          </Grid>
        </Card>

      </Grid>
    </Box>

  );
}

const pageStyle = {
  backgroundColor: '#565051',
  minHeight: '100vh'
}

export default Login;