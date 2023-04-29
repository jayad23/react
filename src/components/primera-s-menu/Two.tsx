import React from 'react'
import { Generic } from './Generic';
import { secondaryInfo } from '@assets/info';

const subHeader = `
  Comunmente, una app con un login sea privada o pública, brindará a sus usarios la opción de dar de alta a otro usuario,
  cambiar la contraseña y demás acciones que involucran diferentes componentes.
  un LAYOUT es una muy buena manera de capitalizar elementos que se repiten en estos componentes, para ser alojados en un solo lugar
  y que eviten la repetición de líneas de código.
`

export const Two = () => (
  <Generic information={secondaryInfo.two} subHeader={subHeader}/>
);