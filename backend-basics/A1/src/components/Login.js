import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

function Login() {

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

  return (
    <Box style={pageStyle}>
      <Grid container sx={{ minHeight: "100vh", textAlign: "center" }} justifyContent="center"
        alignItems="center">
        <Card variant="outlined" sx={{ width: '400px', mb: 30 }}><h1>Login</h1>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            
          >
            <FormControl sx={{ my: 2, width: '90%' }}>
              <TextField id="outlined-basic" label="email" variant="outlined" />
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
            <Button variant="outlined" size="large" sx={{ mb: 2, width: '90%' }}>Login</Button>
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