import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/shared';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
