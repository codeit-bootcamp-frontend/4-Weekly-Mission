import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/shared';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
