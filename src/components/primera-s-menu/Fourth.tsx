import React from 'react'
import { Generic } from './Generic';
import { secondaryInfo } from '@assets/info';

const subHeader = `
  Styled components es una forma más nativa de utilizar todos los Wizard styles de MUi,
  y es bastante útil cuando tenemos que construir grandes objetos de estilos, cuando queremos reutilizar 
  componentes, y cuando queremos/necesitamos complejizar el comportamiento del componente a partir del Viewport
  disponible.
`;


export const Fourth = () => <Generic information={secondaryInfo.four} subHeader={subHeader}/>
