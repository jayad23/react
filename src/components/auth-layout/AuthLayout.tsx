import React from 'react'
import {Box, CardMedia} from '@mui/material'
import { Outlet } from 'react-router-dom';
import {LoginWrapper, Container, logo, logoContainer} from './styled';

const AuthLayout = () => {
  return (
    <Container>
      <LoginWrapper>
        <Box component="div" sx={logoContainer}>
          <CardMedia
          component="img"
          image={logo}
          sx={{ width: "100px" }} 
        />
        </Box>
        <Outlet />
      </LoginWrapper>
    </Container>
  )
}

export default AuthLayout