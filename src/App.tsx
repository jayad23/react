import React from 'react'
import AuthContextProvider from './auth/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from './router/AppRouter'
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  </QueryClientProvider>
)

export default App