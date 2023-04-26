import React from 'react'
import { Generic } from './Generic';
import fourthPicture from "@assets/images/4.png";
import tenthPicture from "@assets/images/10.png";
import eleventhPicture from "@assets/images/11.png";
import thirteenthPicture from "@assets/images/13.png";
import forteenthPicture from "@assets/images/14.png"
import picA from "@assets/images/15_a.png";
import picB from "@assets/images/15_b.png";
import picC from "@assets/images/15_c.png";
import picD from "@assets/images/15_d.png";
import picE from "@assets/images/15_e.png";


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
    label: "Tipando Eventos y funciones",
    text: `
      Para este tema, voy a dejarles un Chatsheet en el que se explica a detalle los eventos más comunes en React,
      onClick, onSubmit, onChange... Elementos que se relacionan con dichos eventos, y cómo trabajar sus tipos cuando dicho eventos
      se asignan a otros elementos HTML, por ejemplo un evento onClick a un <div></div>. 
      Para ver la información completa visite el siguiente URL: https://blog.bitsrc.io/react-with-typescript-cheatsheet-9dd891dc5bfe#45d2 
    `,
    imageUrl: [thirteenthPicture]
  },
  { id: 4,
    label: "Interfaces",
    text: `
      Durante este taller, las declaraciónes de TS las haremos por medio de interfaces. Una interfaz en TS es una colección.
      Recordemos que Ts tiene como propósito ayudarnos a tener más control sobre el flujo de datos, y no proveer esos datos.
      Utilizamos la palabra reservada interface, asignamos el nombre de esa colección, y guardamos sus valores en un objeto sin el signo =
      En la imagen se comparte un ejemplo:
    `,
    imageUrl: [forteenthPicture]
  },
  { id: 5,
    label: "Tipando useState",
    text: `
      IMAGEN A: TypeScript es muy inteligente en inferir los tipos cuando una variable se le da un valor desde su declaracíon, tal como lo vemos en la imagen A.
      Inlcuso sin haberle dado un valor específico, el hecho de que se usen las comillas le da a entender a TS que el valor de dicho estado es un string.
      IMAGEN B: Si quisiéramos ser específicos en cuanto al tipo de nuestro estado, entonces lo declaramos dentro de estas llaves (< >) justo después de la palabra reservada useState.
      Podemos utilizar un tipado directo, o un interface como lo muestra la imagen B.
      IMAGEN C: Sin embargo, un estado es actualizable, guarda datos de eventos de usuarios, y de base de datos... y en algunas ocasiones, no sabremos exactamente cuál es el valor inicial de ese estado.
      Así que si iniciamos un estado en "null" (como es bastante común en React), TS va a arrojarnos un error cuando intentemos actualizar ese estado porque su tipo inferido es null, como lo muestra la imagen C.
      Eso pasa porque TS no sabe cómo asegurar que un tipo pueda luego mutar a otro, en este caso... type null a type boolean.
      IMAGEN D: Entonces, podemos especificárselo a useState<> con la barra "or" para indicarle que será uno u el otro como lo muestra la imagen D.
      IMAGEN E: Finalmente, cuando pasamos state, y setState como props. Los tipos del state los declaramos nosotros como programadores. El tipo de setSate nos lo ofrece React.
      En la imagen E les compartiré un ejemplo de la manera más óptima de declarar dichos tipos.
    `,
    imageUrl: [picA, picB, picC, picD, picE]
  }
]

const subHeader = "Hagamos un breve repaso de elementos que veremos constantemente a lo largo del taller ya que estamos usando MUi con TS.";


export const Fifth = () => <Generic information={information} subHeader={subHeader}/>
