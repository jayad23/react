import React, { ReactNode, createContext, useReducer } from 'react'

type State = {
  isAuth: boolean;
  user: string | null;
};

type Actions = {
  type: 'LOGIN' | 'LOGOUT';
  payload: { token: string, email: string };
}

interface AuthContextProps {
  state: State,
  dispatch: React.Dispatch<Actions>;
}

export const AuthContext = createContext({} as AuthContextProps);

const handleActionReducer = (state: State, { type, payload }: Actions) => {
  switch (type) {
    case "LOGIN":
      sessionStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuth: true,
        user: payload.email
      }
    case "LOGOUT": 
      sessionStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        user: null
      }
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const initialState = {
    isAuth: false,
    user: null
  };

  const [ state, dispatch ] = useReducer(handleActionReducer, initialState);

  const data = {
    state,
    dispatch
  };

  return (
    <AuthContext.Provider value={data}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;