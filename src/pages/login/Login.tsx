import React, { ChangeEvent, FormEvent, useState } from 'react'
import {Box, Button, Stack, TextField} from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Link} from 'react-router-dom';
import { onSignIn } from '../../db/firebase';

const Login = () => {
  const [ values, setValues ] = useState({ email: "", password: ""});

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues({...values, [key]: value });
  }; 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response: any = await onSignIn(values);
      console.log(response?.user.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack component="form" spacing={2} onSubmit={(e) => handleSubmit(e)}>
      <TextField 
        size="small" 
        label="email"
        name="email"
        value={values.email}
        onChange={(e) => handleChange(e)} 
      />
      <TextField 
        size="small" 
        label="password"
        name="password"
        value={values.password}
        onChange={(e) => handleChange(e)} 
      />
      <Box component="section" display="flex" justifyContent="space-between" alignItems="center">
        <Link style={{ fontSize: "12px"}} to="/auth/register">¿Aun no tienes cuenta?</Link>
        <Button 
          size="small" 
          type="submit" 
          variant="contained"
          endIcon={<KeyboardArrowUpIcon/>}
          sx={{
            background: "rgba( 231, 24, 226, 0.5 )",
            ':hover':{
              background: "rgba( 231, 24, 226, 0.8 )"
            }
          }}
          >
            Ingresar
          </Button>
      </Box>
    </Stack>
  )
}

export default Login