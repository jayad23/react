import React from 'react'
import { Generic } from './Generic';
import { secondaryInfo } from '@assets/info';

const subHeader = `
  La prop sx es una versión interna del objeto 'styles' nativo de React.
  Conserva el tipo de datos (objeto), pero habilita algunas funciones y características 
  propias de MUi.
`;

export const Two = () => (
  <Generic information={secondaryInfo.two} subHeader={subHeader}/>
);