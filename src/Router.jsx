import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import FolderPage from './pages/FolderPage/FolderPage';
import SharedPage from './pages/SharedPage/SharedPage';
import AppLayout from './AppLayout';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="folder" element={<FolderPage />} />
        <Route path="shared" element={<SharedPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
