import {Box, Button, Stack, TextField} from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <Stack component="form" spacing={2}>
      <TextField size="small" label="email" />
      <TextField size="small" label="password" />
      <Box component="section" textAlign="right">
        <Button size="small" type="submit" variant="contained">Ingresar</Button>
      </Box>
    </Stack>
  )
}

export default Login