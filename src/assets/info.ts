import { one, two, three, four, five, six, seven, eight, nine, ten, eleven } from "./image/index";

export interface maininfoitem { title: string; label: string};
export const mainInfo: Array<maininfoitem> = [
  { title: "Estilos directos", label: "first" },
  { title: "La prop sx", label: "second" },
  { title: "Estilos en línea", label: "third" },
  { title: "Styled components", label: "fourth" },
];

export const secondaryInfo = {
  one: [
    { id: 1, label: "Stack", text: `
      Como habíamos mencionado en otras sesiones, Stack es un componente que ya trae consigo
      flexbox por default. Así que este componente será un excelente ejemplo:
    `, imageUrl: [one] },
    { id: 2, label: "Box", text: `
      Sin embargo, hay algunas propiedades de estilos que son universales, como el padding, o el margin.
      En MUi, representaremos estos valores con las iniciales p = padding m = margin pt = padding-top y en esa misma línea:
    `, imageUrl: [two] },
  ],
  two: [
    { id: 1, label: "Primero", text: `
      La prop sx constituye una construcción muy similar a la de styles en React.
      Sin embargo, con sx podemos acceder a varios elementos: 1) BREAKPOINTS: Si recordamos un poco lo que aprendimo de Grid
      en la sesión anterior, traeremos a mente los breakpoints. Al declarar una propiedad en css, por medio de un objeto, podemos definir los breakpoints, y con ello
      el comportamiento que queremos que tenga en cada breakpoint. E.g. Dígamos que queremos que el width del elemento se adapte de acuerdo al viewport, 
      con un width mínimo de 100% en dispositivos móbiles, y un máximo de 400px en desktop.
      Al declarar la propiedad width le asigamos un objeto como este: width: { xs: "", sm: "", md: "", lg: ""} ahora, démosle los valores que queremos.
      width: { xs: "100%", lg: "400px"} por medio de este objeto, le estoy especificando al componente las dimesiones que debe asumir de acuerdo al dispositivo del usuario.
      Esta y otros features más que se muestran en la imagen, están disponible con sx.
    `, imageUrl: [four] },{ id: 2, label: "Segundo", text: `
      2)PSEUDO-CLASES: Por medio del operador & (ampersand), colon, y luego un objeto, podemos declarar estilos a pseudo-clases como hover, y focus:
    `, imageUrl: [five] },{ id: 3, label: "Tercero", text: `
      3) TRANSICIONES: que es una función que nos retona el theme default/ o custom del proyecto. Este método ".create()" recibe dos parámetros,
      un arreglo de strings en el que se le especifican todos los elementos en dónde se quiere aplicar esa transición, y ub objeto con varias propiedades, 
      dentro de la que resaltaremos la duración del dicha transición. 
    `, imageUrl: [six] },{ id: 4, label: "Resultado", text: `
      En general, construiríamos algo así: 
    `, imageUrl: [three] }

  ],
  three: [
    { id: 1, label: "Primero", text: `
      No mucho se puede decir al respecto. Es un objeto plano de JS nativo para estilos en línea con React.
      Si ya conocemos los estilos con sx y vemos el poder que nos ofrece, es mejor utilizar esa prop. Recordemos que
      sx solo es compatibe con MUi, es decir que aunque estemos usando la librería de componentes en el proyecto,
      aplicar sx a un <div sx={estilos}>NO VA A FUNCIONAR</div>, y ya que conocemos los poderes de sx, mejor usamos esa prop en lugar
      de styles.
    `, imageUrl: [seven] },
  ],
  four: [
    { id: 1, label: "Importación del motor", text: `
      MUi ofrece dos motores de estilos. En la imagen se muestran las dos. Emotion y Material Styles. Y aunque contengan API's similares,
      la mejor opción es Material Styles ya que nos pone a disposición props y theme que nos permite customizar los estilos por defecto de 
      los componentes. Styled es un motor que instancia cualquier tipo de componente, y permite la redefinición de sus valores. Tenemos dos formas de crear dichos componentes.
    `, imageUrl: [eight, nine] },
    { id: 2, label: "Creación de componentes", text: `
      IMAGEN A: Representa una forma estática de extender el componente con nuevos estilos.
      IMAGEN B: Es mucho más a tono con lo que propone MUi, ya que permite la manipulación del theme. Recordemos que el theme es un valor 
      interno de MUi para definir los estilos básicos/propios de cada componente.
    `, imageUrl: [ten, eleven] },
    { id: 3, label: "IMAGEN B", text: `
      En este tipo de componentes debemos tener en cuenta algunas cosas. 1) PROPS: Se pueden pasar props con el fin de dinamizar un valor y que
      una propiedad de css dependa de un valor que se esté recibiendo, sin embargo, las nuevas configuraciones de MUi en sync con el browsewr dados
      los métodos de compilación, arrojarán warnings y errores si alguna de las propiedades no califica dentro de las esperadas por css. Es decir, un terario dentro de theme,+
      no sería posible porque el primer valor que llegaría al DOM sería el booleano. 
      Sin embargo, desde dónde se utilice el componente, sí podemos hacer esa evaluación y conforme a ello, entregar un valor u otro.

      2.) BREAKPOINTS: Para acceder a los breakpoints desde este tipo de estilos, debemos hacerlo con los Square-Backets Notation. 
      Por medio del Theme que recibimos, el cual es un objeto, accedemos a la propiedad breakpoints, y ahí tendremos dos métodos: .DOWN() y .UP()
      con lo que definimos si esos estilos serán aplicados antes del breakpoint, o después.
    `, imageUrl: [eleven] }
  ]
};