import React from 'react'
import { Generic } from './Generic';
import fourthPicture from "../../assets/images/4.png";
import tenthPicture from "../../assets/images/10.png";
import eleventhPicture from "../../assets/images/11.png";


const information = [
  { id: 1,
    label: "Typescript en MUi",
    text: `
      Como se mencionó en uno de los puntos anteriores en los que se usó esta imagen, el círculo rojo Nº 2 
      nos permite seleccionar el componente con las características de TS cargados y listos para copiar y pegar.
      Algunos componentes cuentan con funciones propias para su funcionamiento que no son modificables. En todo caso,
      cuando se trata de Material Ui la librería nos provee todo para que solo sea copy & paste.
      En la segunda imagen vemos un ejemplo de cómo la función handleMenuSelected recibe un argumento y este se tipa. 
      Escenarios similares los provee Material Ui cuando sea necesario. En otros caso, seremos nosotros como developers quienes lo hagan.
    `,
    imageUrl: [fourthPicture, tenthPicture]
  },
  { id: 2,
    label: "Tipos comunes",
    text: `
      Aclaremos un par de tipos que son comunes ya que debemos tipar todo el flujo de datos a lo largo de componente.
      Sin embargo no voy a hablar de cosas un poco más complicada como tipar un error o un request a una API, o crear tipos genéricos.
      Esto es lo más sencillo: 
    `,
    imageUrl: [eleventhPicture]
  },
  { id: 3,
    label: "Tipando useState",
    text: `
      Contenido en construcción.
    `,
    imageUrl: []
  },
  { id: 4,
    label: "Interfaces",
    text: `
      Contenido en construcción
    `,
    imageUrl: []
  }
]

const subHeader = "Hagamos un breve repaso de elementos que veremos constantemente a lo largo del taller ya que estamos usando MUi con TS.";


export const Fifth = () => <Generic information={information} subHeader={subHeader}/>
