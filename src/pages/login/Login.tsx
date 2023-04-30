import React, { ChangeEvent, FormEvent, useState, useContext } from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Link} from 'react-router-dom';
import { onSignIn } from '../../db/firebase';
import {UserCredential} from 'firebase/auth';
import {AuthContext} from '@auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginErrorHandler } from './errorhandler';

interface LoadingState {
  status: 'Ingresar' | 'Loading...';
  error: null | string;
};

const Login = () => {
  const [ values, setValues ] = useState({ email: "", password: ""});
  const [ loading, setLoading ] = useState<LoadingState>({ status: "Ingresar", error: null });
  const { dispatch } = useContext(AuthContext)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues({...values, [key]: value });
  }; 
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading({ status: "Loading...", error: null });
    if(values.email.length > 0 && values.password.length > 0){
      try {
        const response: UserCredential = await onSignIn(values);
        dispatch({ type: "LOGIN", payload: { email: response.user.email as string, token: response.user.refreshToken }});
        navigate("/home");
        setLoading({ status: "Ingresar", error: null });
      } catch (error: any) {
        console.log(error);
        setLoading({ status: "Ingresar", error: loginErrorHandler(error.message as string) });
      }
    }else {
      setLoading({ status: "Ingresar", error: "Debes ingresar un email y una contraseña" });
    }
  };

  return (
    <Stack component="form" spacing={1} onSubmit={(e) => handleSubmit(e)}>
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
            border: "2px solid #000",
            fontWeight: "bolder",
            ':hover':{
              background: "#000",
              color: "#fff",
              border: "2px solid #000",
            },
          }}
          >
            {loading.status}
          </Button>
      </Box>
      {loading.error && (
        <Box component="div" sx={{ textAlign: "left"}}>
          <Typography variant="caption" component="p" color="error">{loading.error}</Typography>
        </Box>
      )}
    </Stack>
  )
}

export default Login