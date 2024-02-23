import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedPage from './pages/SharedPage';
import MainPage from './pages/MainPage';
import FolderPage from './pages/FolderPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}>
            <Route path="/shared" element={<SharedPage></SharedPage>}></Route>
            <Route path="/folder" element={<FolderPage></FolderPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
