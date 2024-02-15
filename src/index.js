import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SharedPage from './pages/SharedPage/SharedPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FolderPage from './pages/FolderPage/FolderPage';
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FolderPage></FolderPage>}></Route>
        <Route path="shared" element={<SharedPage></SharedPage>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
