export interface maininfoitem { title: string; label: string};
export const mainInfo: Array<maininfoitem> = [
  { title: "Tipos de Contenedores", label: "first" },
  { title: "Auth Layout", label: "second" },
  { title: "TextField", label: "third" },
  //{ title: "La Prop sx={{}}", label: "fourth" },
];

import { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen,
  forteen
} from "./segunda_img/index";

export const secondaryInfo = {
  one: [
    { id: 1, label: "Primero", text: `
      <Box></Box>: Este es un contenedor genérico. 
      Recibe una prop a modo de atributo: component="" de tipo string en el que se le especifica el contenedor que debe asumir.
      En las imágenes a continuación, se muestran algunos de los contenedores más comunes:
    `, imageUrl: [one] },
    { id: 2, label: "Segundo", text: `
      El segundo contenedor es <Stack></Stack>, un contenedor más especializado que Box.
      La única similud con Box es que también entiende el atributo component=""
      <Stack></Stack> se utiliza cuando se quieren agrupar elementos que comparten la misma distribución en pantalla.
      Este contedor, por defecto, ya contiene unos estilos de disposición con flexbox, con una dirección de columna.
      Sin embargo, estos pueden ser modificados por medio de propiedades como se muestra en la imagen dos.

    `, imageUrl: [two, three] },
    { id: 3, label: "Tercero", text: `
      El tercer contenedor es más complejo / completo: <Grid></Grid>
      Este contenedor nos ayuda a disponer de los emementos de forma inteligente, con pocas props, 
      en la pantalla de forma responsive. 
      El principio es que independiente del tamaño del Viewport del dispositivo desde el que el usuario está
      ingresando a nuestra site, ésta se comprende en un rago de 12 espacios.
      El Contenedor tomará siempre el 100% de esos 12 espacios. Dentro de sí, alojará otros Grid de tipo ítem
      y en ellos repartirá esos 12 espacios determinando cuánto espacio de esos 12 cada elemento ocupa.
      La disposición de los ítems se hará por medio de 4 props xs / sm / md / lg.
      IMAGEN A: Container - Item / IMAGEN B: Breakpoints / IMAGEN C: Ejemplo de uso.
    `, imageUrl: [four, five, six] }
  ],
  two: [
    { id: 1, label: "Primero", text: `
      Los elementos que vayamos a disponer dentro de un layout son muy propios de cada proyecto y devs. Así que vamos a enfocarnos
      en los pasos de configuración.
      La siguiente imagen muestra cómo se define el cómponente en el archivo de enrutamiento: 
    `, imageUrl: [seven] },
    { id: 2, label: "Segundo", text: `
      En el layout, como mencioné anteriomente, disponemos de los elementos que el grupo de desarrollo considere que son compartidos.
      Este es solo un ejemplo. Sin embargo, no olvidemos importar el componente <Outlet /> de "react-router-dom" sin él, nada se pintará en el DOM.
    `, imageUrl: [eight, nine, ten] },
  ],
  three: [
    { id: 1, label: "Primero", text: `
      La primer variante es la más común. Se llama TextField, y es un componente simple.
      Recibe todos los atributos nativos de un input, pero adicionalmente, recibe la prop label=""
      de tipo string, que habilita un efecto de focus.
    `, imageUrl: [eleven, twelve, thirteen] },
    { id: 2, label: "Segundo", text: `
      Este segundo elemento es un componente compuesto que se usa para Inputs de tipo password
      y que habiliten al usuario la oportunidad de comprobar la información antes de submit.
    `, imageUrl: [forteen] },
    { id: 3, label: "Tercero", text: `
      El tercero es un elemento muchísimo más complejo que los anteriores. 
      Su nombre técnico es COMBO BOX, pero en la doc de MUi se conoce como Autocomplete.
      Es un Componente que recibe un arreglo de valores y el resultado del input será o no undefined
      de acuerdo al resultado de la búsqueda de ese valor en el arreglo de valores.
      Por otro lado, los cambios no se percibe con el típico "e.target.value" sino por medio de una prop
      que nos devuelve que se llama value
    `, imageUrl: ["https://www.youtube.com/embed/spLVuEgtHYg"], isVideo: true }
  ],
  // four: [
  //   { id: 1, label: "Primero", text: "En construcción", imageUrl: [] },
  //   { id: 2, label: "Segundo", text: "En construcción", imageUrl: [] },
  //   { id: 3, label: "Tercero", text: "En construcción", imageUrl: [] }
  // ]
};