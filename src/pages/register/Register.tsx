import React, { FormEvent, useState } from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import {useHandleForm } from '@hooks/useHandleForm'
import {onSignUp } from '../../db/firebase';
import {updateProfile} from 'firebase/auth';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useNavigate} from 'react-router-dom';

const initialValues = { name: "", email: "", password: "", repeatPassword: ""};
interface LoadingState {
  status: 'Enviar' | 'Loading...';
  error: null | string;
};

const Register = () => {
  const { values, handleChange} = useHandleForm(initialValues);
  const [ loading, setLoading ] = useState<LoadingState>({ status: "Enviar", error: null });
  const navigate = useNavigate();
  
  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading({ status: "Loading...", error: null });
    if(values.password.trim() === values.repeatPassword?.trim()){
      try {
        const response = await onSignUp({ email: values.email, password: values.password });
        const user = response.user;
        updateProfile(user, {
          displayName: values.name
        });
        setLoading({ status: "Enviar", error: null });
        navigate("/login");
      } catch (error: any) {
        console.log(error);
        setLoading({ status: "Enviar", error: "Ha habido un error"});
      }
    }else{
      setLoading({ status: "Enviar", error: "Las contraseñas no coinciden"});
    }
  }

  return (
    <Stack component="form" spacing={2} onSubmit={handleSubmit}>
      <TextField 
        placeholder='Name'
        size="small"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <TextField 
        placeholder='Email'
        size="small"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <TextField 
        placeholder='Password'
        size="small"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <TextField 
        placeholder='Repeat password'
        size="small"
        name="repeatPassword"
        value={values.repeatPassword}
        onChange={handleChange}
      />
       <Box component="section" textAlign="right">
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

export default Register