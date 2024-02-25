import SharedPage from './pages/SharedPage/SharedPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FolderPage from './pages/FolderPage/FolderPage';
import React from 'react';
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
