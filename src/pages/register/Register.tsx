import React from 'react'
import {Stack, TextField} from '@mui/material'

const Register = () => {
  return (
    <Stack component="form" spacing={2}>
      <TextField 
        placeholder='Name'
      />
      <TextField 
        placeholder='Email'
      />
      <TextField 
        placeholder='Password'
      />
      <TextField 
        placeholder='Repeat password'
      />
    </Stack>
  )
}

export default Register