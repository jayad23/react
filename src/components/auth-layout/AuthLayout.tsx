import React from 'react'
import {Box, CardMedia} from '@mui/material'
import { Outlet } from 'react-router-dom';
import layoutBg from "@assets/zen_wallpaper.jpeg";

const AuthLayout = () => {
  return (
    <Box 
      component="div"
      sx={{
        width: "100%",
        minHeight: "100%",
        position: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${layoutBg})`
      }}
    >
      <Box 
        component="div"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: 'translate(-50%, -50%)',
          border: "1px solid white",
          width: "300px",
          padding: "20px",
          textAlign: "center",
          borderRadius: "8px",
          background: "#fff"
        }}
      >
        <Box component="div" sx={{ display: "flex", justifyContent:"center", mb: 2}}>
          <CardMedia
          component="img"
          image="https://bcasapp.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fprod-bcas.appspot.com%2Fo%2Fhackabossiso.webp%3Falt%3Dmedia%26token%3D8184b988-5b62-455f-adbd-a3157f5827fb&w=3840&q=75"
          sx={{
            width: "100px"
          }} 
        />
        </Box>
        <Outlet />
      </Box>
    </Box>
  )
}

export default AuthLayout