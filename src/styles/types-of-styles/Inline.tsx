import {Box} from '@mui/material'
import React from 'react'

const Inline = () => {
  return (
    <Box 
      component="div"
      style={{
        width: '200px',
        height: '200px',
        border: "10px solid green"
      }}
    >
      Estilos en Línea
    </Box>
  )
}

export default Inline