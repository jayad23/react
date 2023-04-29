import React, {Fragment, useState} from 'react'
import { ComponentsProps } from './types'
import {Box, Button, CardMedia, Grid, Stack, TextField, Typography} from '@mui/material';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom';

const Home = () => {
  const [ data, setData ] = useState<null | Array<string>>(null);

  const handlePopulateData = () => setData(["Kike Vanegas"])

  return (
    <Login/>
  )
};

const Login = () => {
  return (
    <div>
      <h1>Hola</h1>
      <p>Espero que estén bien</p>
    </div>
  )
}

export const Register = ({ imageUrl }: any) => {
  return (
    <Grid container spacing={1}>
      /**ANCHOR
        En este ejemplo, estamos indicando que cuando
        el viewport sea extra small (xs) cada grilla item
        ocupe el 100%. Eso hará que uno se ponga debajo del otro.

        Sin embargo, también le estamos indicando que cuando sea 
        large (lg) que cada grilla ocupe el 50%. Eso hará que 
        uno quede al lado del otro.
       */
      <Grid item xs={12} lg={6}>
        <CardMedia 
          component="img" 
          alt="Esta es una imagen"
          image={imageUrl} 
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography>
          Este es un párrafo muy largo.
          Aunque podría ser cualquier elemento.
        </Typography>
      </Grid>
    </Grid>
  )
}
const containerStyles = {}
const logo = ""
const loginBox = {};

export const AuthLayout = () => {
  const [values, setValues] = React.useState({ name: "", password: "" });
  return (
    <Box component="div" sx={containerStyles}>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        size="small"
        value={values.name}
        type="text"
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <TextField
        id="filled-basic"
        label="Password"
        variant="outlined"
        size="small"
        value={values.password}
        type="password"
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
    </Box>
  )
}


