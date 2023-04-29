import React from 'react'
import { Generic } from './Generic';
import { secondaryInfo } from '@assets/info';

const subHeader = "Este componente tiene variantes que vamos a considerar de acuerdo a la necesidad del proyecto, veamos:";


export const Third = () => <Generic information={secondaryInfo.three} subHeader={subHeader}/>
