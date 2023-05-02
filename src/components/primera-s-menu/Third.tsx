import React from 'react'
import { Generic } from './Generic';
import { secondaryInfo } from '@assets/info';

const subHeader = `
  Como parte del ecosistema de React, los componentes de MUi también asimilan 
  el objeto styles={{}}. No hay una razón que justifique por qué usar esta versión en lugar de la prop sx={{}}
`;


export const Third = () => <Generic information={secondaryInfo.three} subHeader={subHeader}/>
