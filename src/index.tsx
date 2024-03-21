import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import { AuthContextProvider } from './context/AuthContext';
import './styles/_reset.scss';
import './styles/_common.scss';
import { LinkContextProvider } from './context/LinkContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LinkContextProvider>
        <AppRouter />
      </LinkContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
