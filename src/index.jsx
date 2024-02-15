import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './Globalstyles';
import AppRouter from './AppRouter';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthContextProvider>
      <GlobalStyle />
      <AppRouter />
    </AuthContextProvider>
  </>
);
