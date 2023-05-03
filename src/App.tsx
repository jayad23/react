import React from 'react'
import AuthContextProvider from './auth/AuthContext';
import ColorContextProvider from '@theme/ColorContextProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from './router/AppRouter'
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ColorContextProvider>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </ColorContextProvider>
  </QueryClientProvider>
)

export default App;