import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './Globalstyles';
import AppRouter from './AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <AppRouter />
  </>
);
