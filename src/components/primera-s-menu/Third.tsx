import React from 'react'
import { Generic } from './Generic';
import { secondaryInfo } from '@assets/info';

const subHeader = "En Material Ui hay dos tipos de compoentes. Los conoceremos como Componentes Simples, y componentes compuestos. Se llaman SIMPLES cuando el componente se puede utilizar directamente cómo ha sido importado. Se llaman COMPUESTOS cuando el componente requiere de otros elementos (no funciones) para poder ser utilizado. Independiente del tipo de componente, estos vienen estilos por default que pueden ser modificados por medio de atributos. En el siguiente punto de menú veremos algunos ejemplos.";


export const Third = () => <Generic information={secondaryInfo.three} subHeader={subHeader}/>
