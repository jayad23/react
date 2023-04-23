import React from 'react'
import firstPicture from "../../assets/images/1.png";
import secondPicture from "../../assets/images/2.png";
import thirdPicture from "../../assets/images/3.png"
import { Generic } from './Generic';

interface elementProps {
  id: number;
  label: string;
  text: string;
  imageUrl: string;
};

const information = [
  { id: 1, label: "Primero", text: "Al ingresar a la página oficial de Mui, esta será la primera vista. Dale click donde te indica la flecha roja de la imagen", imageUrl: [firstPicture] },
  { id: 2, label: "Segundo", text: "Al lado Izquierdo encontrarás un Menú dentro del que se encuentra el botón que nos llevará a instalación. Al ir a instalación, te ofrecerá las opciones de instalación con NPM y con YARN. La selección depende de cuál package manager seleccionaste para crear el proyecto; de lo contrario, terminarás con un conflicto enorme en las dependencias del proyecto.", imageUrl: [secondPicture] },
  { id: 3, label: "Tercero", text: "Los módulos que se deben instalar corresponden a MOTOR DE ESTILOS - COMPONENTES - ÍCONOS Materia Ui tiene dos motores de estilos (emotion - styled Components) se instala el que se prefiera. (Con experiencia se aprende a decidir el mejor de acuerdo al proyecto). Los módulos de instalación son: ['npm install @mui/material @emotion/react @emotion/styled', 'npm install @mui/material @mui/styled-engine-sc styled-components', 'npm install @mui/icons-material']. Una vez se temrine la instalación, ¡YA TENEMOS MUI EN NUESTRO PROYECTO!", imageUrl: [thirdPicture] }
];

export const Two = () => (
  <Generic information={information} subHeader='Sigue estos pasos:'/>
);