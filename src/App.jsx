import React from 'react';
import GlobalStyle from './GlobalStyle';
import Router from './Router';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router />
    </AuthProvider>
  );
};

export default App;
