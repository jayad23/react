import React from 'react'
import {Box, Theme} from '@mui/material'

const Sx = () => {
  return (
    <Box 
      component="main"
      sx={{
        width: {
          xs: "100%",
          //sm: "80%",
          //md: "60%",
          lg: 200,
        },
        height: 200,
        border: {
          xs: "10px solid green",
          sm: "10px solid yellow",
          md: "10px solid orange",
          lg: "10px solid red",
        },
        borderRadius: "10px",
        '&:hover': {
          border: "10px solid blue",
        },
        color: ["purple", "blue"],
        fontWeight: "bolder",
        fontSize: "26px",
        transition: (theme: Theme) => theme.transitions.create(['border'], { duration: 1000 }) 
      }}
    >
      Estilos con la prop SX
    </Box>
  )
}

export default Sx