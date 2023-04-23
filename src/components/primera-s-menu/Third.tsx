import React from 'react'
import { Generic } from './Generic';
import fourthPicture from "../../assets/images/4.png";
import fifthPicture from "../../assets/images/5.png";
import sixthPicture from "../../assets/images/6..png";
import seventhPicture from "../../assets/images/7.png";

const information = [
  { id: 1,
    label: "Componentes Simples",
    text: `
      En la imagen se pueden ver varios círculos rojos con números a los que me referiré a medida que explico.
      1. Corresponde a la barra de búsqueda desde dónde podemos acceder de forma rápida al componente que estamos buscando. Igualmente, en la barra de menú a la Izquierda, hay un punto de menú COMPONENTES donde se listan algunos de los más comunes.
      2. MUi ya contiene la descripción y configuración de los tipos para un proyecto con TypeScript. Al momento de seleccionar el elemento para copiar y pegar, debemos asegurarnos que la selección sea acorde a nuestro proyecto.
      3. Las (< >) despliega una ventana modal con el código necesario de la imagen inmediatamente superior.
      4. Justo al lado tenemos el ícono que nos conducirá al playground en dónde podremos editar y jugar con el componente antes de integrarlo al proyecto.
      5. Este es un breve ejemplo de lo que los atributos son. Tal como se ve en la imagen 3 botones diferentes, el atributo es lo que nos permite editar estos valores.
      A medida que se hace "scroll down" se ven diferentes versiones del mismo componente. En la parte final, hay un punto que dice "API" con la lista de las diferentes versiones de dicho componente.
    `,
    imageUrl: [fourthPicture, fifthPicture]
  },
  { id: 2,
    label: "Componentes Compuestos",
    text: `
      En la siguiente imagen se puede apreciar un ejemplo de componente compuesto. 
      El nombre técnico del componente es COMBO BOX, pero en el buscador se encuentra como AUTOCOMPLETE.
      Si miramos con detalle el atributo renderInput notamos otro componente que se renderiza dentro <TextField />
      Y en la segunda imagen, volviendo a un componente más familiar, vemos el atributo endIcon que también renderiza un componente dentro de sí
      y por default asume unos estilos sin que tengamos que preocuparnos por ello.
    `,
    imageUrl: [sixthPicture, seventhPicture]
  }
]

const subHeader = "En Material Ui hay dos tipos de compoentes. Los conoceremos como Componentes Simples, y componentes compuestos. Se llaman SIMPLES cuando el componente se puede utilizar directamente cómo ha sido importado. Se llaman COMPUESTOS cuando el componente requiere de otros elementos (no funciones) para poder ser utilizado. Independiente del tipo de componente, estos vienen estilos por default que pueden ser modificados por medio de atributos. En el siguiente punto de menú veremos algunos ejemplos.";


export const Third = () => <Generic information={information} subHeader={subHeader}/>
