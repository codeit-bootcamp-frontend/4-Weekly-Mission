import React from 'react';
import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
