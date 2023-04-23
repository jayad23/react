import React from 'react'
import { Generic } from './Generic';
import fifthPicture from "../../assets/images/5.png";
import eigthPicture from "../../assets/images/8.png";
import ninePicture from "../../assets/images/9.png";


const information = [
  { id: 1,
    label: "Atributos comunes",
    text: `
      En el siguiente video se puede apreciar un ejemplo un poco más claro del visto en clase para entender mejor el rol de los atributos.
      Los atributos que se usan en el video (y que son más comunes) son: variant="" size="" direction="" spacing="". Por supuesto que hay muchos más que iremos descubriendo a lo largo del curso.
    `,
    isVideo: true,
    imageUrl: ["https://www.youtube.com/embed/54Bb2chsdqs"]
  },
  { id: 2,
    label: "API",
    text: `
      Seguramente recordamos esta imagen del menú anterior. Se encuentra al final de todas las variantes del componente que estemos buscando.
      Nos da una lista de esas variables y con un click nos conduce a la API de dicho componente.
      La API inicia indicando las formas de importar un componente. Es bastante útil tenerlo en cuenta para no terminar con muchas líneas de importación de Componentes, y en su lugar mejor, tener una sola línea.
      Lo más importante es la colección que se despliega bajo el nombre de PROPS. Corresponde a todos los atributos nativos del componente para modificar sus estilos y su disposición en pantalla.
      Su tipo para tenerlo en cuenta con TS, y una breve explicación de qué hace / la naturaleza del atributo. 
    `,
    imageUrl: [fifthPicture, eigthPicture, ninePicture]
  }
]

const subHeader = "En Material Ui hay dos tipos de compoentes. Los conoceremos como Componentes Simples, y componentes compuestos. Se llaman SIMPLES cuando el componente se puede utilizar directamente cómo ha sido importado. Se llaman COMPUESTOS cuando el componente requiere de otros elementos (no funciones) para poder ser utilizado. Independiente del tipo de componente, estos vienen estilos por default que pueden ser modificados por medio de atributos. En el siguiente punto de menú veremos algunos ejemplos.";


export const Fourth = () => <Generic information={information} subHeader={subHeader}/>
