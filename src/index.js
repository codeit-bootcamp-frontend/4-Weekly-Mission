import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SharedPage from './pages/SharedPage';
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <SharedPage></SharedPage>
  </StrictMode>
);
