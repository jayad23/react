import React, { ChangeEvent, FormEvent, useState } from 'react'
import {Box, Button, Stack, TextField} from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Link} from 'react-router-dom';
import { onSignIn } from '../../db/firebase';
import {UserCredential} from 'firebase/auth';

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
      const response: UserCredential = await onSignIn(values);
      console.log(response.user.refreshToken);
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
          variant="outlined"
          endIcon={<KeyboardArrowUpIcon/>}
          sx={{
            background: "#fff",
            color:"#000",
            border: "1px solid #000",
            ':hover':{
              background: "#000",
              color: "#fff",
              border: "1px solid #000",
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