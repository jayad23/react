import {Box, Typography} from '@mui/material';
import React, { useState } from 'react'
interface inforationProps {
  id: number;
  label: string;
  topics: Array<string>;
};
function App() {
  const information: Array<inforationProps> = [
    { id: 1, label: "¿Cómo se instala Material Ui?", topics: ["Instalación de MUi", "Componentes Básicos", "Paso de props a componentes", "Atributos bñasicos"]}
  ]

  return (
    <Box component="div" p={2}>
      <Typography variant="h4" component="div" mb={2}>
        Branch: primera_sesion
      </Typography>
      <Typography variant="body1" component="p" mb={1}>
        Explicación:
      </Typography>
      <Box component="ul" sx={{ paddingLeft: "20px"}}>
        <li>¿Qué es Material Ui?</li>
          <Box component="ul" sx={{ paddingLeft: "20px"}}>
            <li> Para toda la información teórica, accede al PPTX que se usó en clase accediendo al link: <a href="https://1drv.ms/p/s!AmkmA2B9HL9O6QgoVIwq5ay90orF?e=RSZLJL" target='_blank'>Aquí</a></li>
          </Box>
        {
          information.map((info: inforationProps) => (
            <li key={info.id}>
              {info.label}
              <Box component="ul" sx={{ paddingLeft: "20px"}}>
                {
                  info.topics.map((topic: string) => (
                    <li key={topic}>{topic}</li>
                  ))
                }
              </Box>
            </li>
          ))
        }
      </Box>
    </Box>
  )
}

export default App;


