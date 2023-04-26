import React, {useState} from 'react'
import { ComponentsProps } from './types'

const Example = () => {
  const [ data, setData ] = useState<null | Array<string>>(null);

  const handlePopulateData = () => setData(["Kike Vanegas"])

  return (
    <Component 
      nombre="Kike"
      apellido="Vanegas"
      edad={35}
    />
  )
}

export default Example

const Component = ({ apellido, nombre, edad}: ComponentsProps) => {
  return (
    <div>
      <h1>Hola {apellido}</h1>
      <p>Espero que estén bien</p>
    </div>
  )
}