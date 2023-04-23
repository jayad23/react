import React, { useState } from 'react'
import {Box, Button, Divider, Grid, Typography } from '@mui/material';
import { One } from './components/primera-s-menu/One';
import { Two } from './components/primera-s-menu/Two';
import { Third } from './components/primera-s-menu/Third';
import { Fourth } from './components/primera-s-menu/Fourth';
import { Fifth } from './components/primera-s-menu/Fifth';

function App() {
  const [selected, setSelected] = useState("");
  const handleSelected = (label: string) => setSelected(label);

  return (
    <Box component="div" p={2} width="100%" >
      <Typography variant="h4" component="div" mb={2}>
        Branch: primera_sesion
      </Typography>
      <Grid container mb={2} spacing={1} sx={{ justifyContent: { lg: "center" }}}>
        {
          [{ title: "¿Qué es Material Ui?", label: "first"}, { title: "Instalación", label: "second"}, { title: "Simple & Complex components", label: "third"}, { title: "Atributos y props", label: "fourth"}, { title: "Tips básicos de TS", label: "fifth"}].map((menu: { title: string; label: string}) => (
            <Grid key={menu.label} xs={12} sm={6} md={4} lg={2.3} item>
              <Button 
                fullWidth 
                variant="contained" 
                size="small"
                color={selected === menu.label ? "secondary" : "primary" } 
                sx={{ height: "50px"}}
                onClick={() => handleSelected(menu.label)}
                >
                  {menu.title}
              </Button>
            </Grid>
          ))
        }
      </Grid>
      <Divider/>
      <Grid container sx={{ overflow: "hidden"}}>
        <Grid xs={12} item>
          {componentObject[selected as keyof typeof componentObject]}
        </Grid>
      </Grid>
    </Box>
  )
}

export default App;


const componentObject = {
  first: <One/>,
  second: <Two />,
  third: <Third/>,
  fourth: <Fourth />,
  fifth: <Fifth/>
}