import React, {Suspense, lazy } from 'react'

export const Login = lazy(() => import ('@pages/login/Login')); 
export const Register = lazy(() => import('@pages/register/Register'));

const Home = lazy(() => import("@pages/home/Home"));

export const menuPages: Array<menuPagesElement> = [
  {
    id: 1,
    path: "/home",
    Component: Home
  }
];

export interface menuPagesElement {
  id: number;
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
}