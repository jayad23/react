import React, { Suspense} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthLayout from '@components/auth-layout/AuthLayout'
import ProtectedRoutes from '@components/protected-routes/ProtectedRoutes'
import { menuPages, Login, Register, menuPagesElement } from './menuPages'


const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />}/>
            <Route path="/auth/register" element={<Register />}/>
          </Route>
          <Route element={<ProtectedRoutes />}>
            {
              menuPages.map(({ id, path, Component}: menuPagesElement) => (
                <Route key={id} path={path} element={<Component />}/>
              ))
            }
          </Route>
          <Route path="/" element={<Navigate to="/auth/login" />}/>
          <Route path="*" element={<Navigate to="/auth/login" />}/>
        </Routes>
    </BrowserRouter>
    </Suspense>
  )
}

export default AppRouter