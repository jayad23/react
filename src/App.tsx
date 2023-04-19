import { Button } from '@mui/material'
//import Button from '@mui/material/Button'
import { useState } from 'react'
import CustomButton from './components/CustomButton/CustomButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Bienvenidos a React con Material Ui</h1>
      <Button>Hola</Button>
      <Button variant="contained">Hello</Button>
      <Button variant="outlined">Bon jour</Button>
      <button style={{ cursor: "pointer"}}>Hola</button>
      <CustomButton
        title="UNO"
        type="contained"
        size="small"
      />
      <CustomButton
        title="DOS"
        type="contained"
        size="medium"
      />
      <CustomButton
        title="TRES"
        type="outlined"
        size="large"
      /> 
    </div>
  )
}

export default App;


