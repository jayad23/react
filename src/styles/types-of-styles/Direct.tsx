import React, {Fragment} from 'react'
import {Box, Button, Stack} from '@mui/material'

const Direct = () => {
  return (
    <Fragment>
      <Box 
        component="section"
        width={200}
        height={200}
        bgcolor="orange"
        p={2}
        pt={13}
      >
        Estilos directos
      </Box>
      <Stack direction="row" spacing={2} p={2}>
        <Button>One Element</Button>
        <Button>Another Element</Button>
      </Stack>
    </Fragment>
  )
}

export default Direct