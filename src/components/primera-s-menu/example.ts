//EJEMPLO DE TIPOS

export type EJemploDeTipos = {
  nombre: string; //ACEPTARÁ CUALQUIER VALOR SIEMPRE Y CUANDO SEA UN STRING.
  status: 'idle' | 'loading' | 'success' | 'error'; // SOLO ACEPTARÁ UNO DE LOS 4 VALORES LISTADOS.
  doesExist: boolean; // FALSO - VERDADERO.
  data: Array<string>; // ESTAMOS DICIENDO QUE LOS DATOS QUE RECIBIREMOS SON UN ARREGLO DE STRINGS.
  selectedUser: {
    id: number;
    name: string;
    location: Array<number>;
  }; // NOS PERMITE CREAR INTERFACES / OBJETOS ANIDADOS
};