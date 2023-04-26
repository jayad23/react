import React, {Suspense} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '@pages/home/Home'
import Login from '@pages/login/Login'
import Register from '@pages/register/Register'
import AuthLayout from '@components/auth-layout/AuthLayout'

const AppRouter = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<Login />}/>
            <Route path="/auth/register" element={<Register />}/>
          </Route>
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Navigate to="/auth/login" />}/>
        </Routes>
    </BrowserRouter>
    </Suspense>
  )
}

export default AppRouter