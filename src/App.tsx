import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FolderPage from './pages/FolderPage/FolderPage';
import SharedPage from './pages/SharedPage/SharedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="folder" element={<FolderPage />}></Route>
        <Route path="shared" element={<SharedPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
