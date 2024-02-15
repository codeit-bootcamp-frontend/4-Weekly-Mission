import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedPage from './pages/SharedPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}>
            <Route path="/shared" element={<SharedPage></SharedPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
