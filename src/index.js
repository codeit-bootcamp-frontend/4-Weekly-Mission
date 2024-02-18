import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Page from './pages/SharedPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Page />
  </StrictMode>
);
