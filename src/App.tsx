import React from 'react'
import {Box, Typography, ListSubheader, List} from '@mui/material';
import ProgramList from '@components/program-list/ProgramList';
const primera_session = "https://material-ui-workshop-git-primerasesion-jayad23.vercel.app/"

const deploymentCollection = [
  { link: primera_session, label: "primera_session"},
  { link: "", label: "segunda_session"},
  { link: "", label: "tercera_session"},
  { link: "", label: "cuarta_session"},
  { link: "", label: "project"},
];
interface inforationProps {
  id: number;
  label: string;
  topics: Array<string>;
};

function App() {
  const information: Array<inforationProps> = [
    { id: 1, label: "primera_sesion", topics: ["Instalación de MUi", "Componentes Básicos", "Paso de props a componentes", "Atributos bñasicos"]},
    { id: 2, label: "segunda_sesion", topics: ["Etiquetas contenedoras y estilos default", "Texfield", "Grid System", "Combianos eso creando un Login y una vista Home en la que también vimos:", "Firebase", "React router Layout", "API Calls", "Split coding"]},
  ]
  return (
    <Box 
      component="div"
      sx={{
        border: "1px solid grey",
        borderRadius: "10px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "700px",
        width: "content-fit",
        p: 2
      }}
    >
      <Typography variant="h4" component="div" mb={2}>
        Bienvenidos a React con MUi & TypeScript
      </Typography>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Para acceder a la información de las sesiones, debes dirigirte a las ramas/(branches): <br/>
            {
              deploymentCollection.map((br: { link: string; label: string}, idx: number) => (
                <a
                  key={idx} 
                  href={br.link} 
                  target="_blank"
                  style={{ borderRight: "1px solid grey", padding: "0px 10px"}}
                >
                  {br.label}
                </a>
              ))
            }
            <br/>
            Temario:
          </ListSubheader>
        }
      >
        {
            information.map((info: inforationProps) => (
              <ProgramList key={info.id} {...info}/>
            ))
          }
      </List>
    </Box>
  )
}

export default App;


