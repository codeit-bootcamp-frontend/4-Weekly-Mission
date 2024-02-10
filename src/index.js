import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Shared from './pages/Shared';
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Shared></Shared>
  </StrictMode>
);
