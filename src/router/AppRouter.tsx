import React, { Suspense} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { menuPages, Login, Register, menuPagesElement } from './menuPages'
import AuthLayout from '@components/auth-layout/AuthLayout'


const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />}/>
            <Route path="/auth/register" element={<Register />}/>
          </Route>
          {
            menuPages.map(({ id, path, Component}: menuPagesElement) => (
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