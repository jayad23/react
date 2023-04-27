import React from 'react'
import { Generic } from './Generic';
import { secondaryInfo } from '@assets/info';

export const One = () => {
  return (
    <Generic 
      subHeader='Tipos de contenedores en Material Ui'
      information={secondaryInfo.one}
    />
  )
}
