import React from 'react'
import { Generic } from './Generic';
import { secondaryInfo } from '@assets/info';
const subHeader = `
  Los estilos en línea son props que se pasan al componentes a modo de atributos en html convencional.
  No aplican para todos los componentes de MUi y no necesariamente está explícito en la documentación 
  cuáles aceptan estas props. Aquí, algunos ejemplos:
`
export const One = () => {
  return (
    <Generic 
      subHeader={subHeader}
      information={secondaryInfo.one}
    />
  )
}
