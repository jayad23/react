import {AuthContext} from '@auth/AuthContext'
import React, { useContext } from 'react'
import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoutes = () => {
  const { state } = useContext(AuthContext);
  if(state.isAuth){
    return <Outlet /> 
  }
  return (
    <Navigate to="/auth/login"/>
  )
}

export default ProtectedRoutes