import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter.jsx';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from './styles/GlobalStyle.jsx';
import { theme } from './styles/theme.js';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>,
);
