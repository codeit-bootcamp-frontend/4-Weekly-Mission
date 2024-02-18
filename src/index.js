import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Page from './pages/SharedPage';
import FoldPage from './pages/FolderPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <FoldPage />
    {/* <Page /> */}
  </StrictMode>
);
