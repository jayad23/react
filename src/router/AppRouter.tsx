import React, {Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthLayout from '@components/auth-layout/AuthLayout'

const Login = lazy(() => import ('@pages/login/Login')); 
const Register = lazy(() => import('@pages/register/Register'));
const Home = lazy(() => import("@pages/home/Home"));

const menuPages = [
  {
    id: 1,
    path: "/home",
    Component: Home
  }
]

const AppRouter = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />}/>
            <Route path="/auth/register" element={<Register />}/>
          </Route>
          {
            menuPages.map(({ id, path, Component}: any) => (
              <Route key={id} path={path} element={<Component />}/>
            ))
          }
          <Route path="/" element={<Navigate to="/auth/login" />}/>
          <Route path="*" element={<Navigate to="/auth/login" />}/>
        </Routes>
    </BrowserRouter>
    </Suspense>
  )
}

export default AppRouter