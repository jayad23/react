import React from 'react'
import {Box, Grid} from '@mui/material'
import Direct from '../Direct'
import Sx from '../Sx'
import Inline from '../Inline'
import AStyled from '../AStyled'

const GridSystem = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} md={4} lg={3} item>
        <Direct />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Sx/>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Inline />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AStyled />
      </Grid>
    </Grid>
  )
}

export default GridSystem