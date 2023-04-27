import React from 'react'
import {Box, Typography} from '@mui/material'
import GridSystem from './types-of-styles/grid-system/GridSystem'

const App = () => {
  return (
    <Box component="main" textAlign="center">
      <Typography 
        color="rgba(51, 48, 60, 0.87)" 
        variant="h5" 
        component="h5"
      >
        Styles in Mui
      </Typography>
      <GridSystem />
    </Box>
  )
}

export default App