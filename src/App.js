import React from 'react';
import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ width: '100%', height: '500px', fontSize: '100px' }}>
              <Link to="/shared">Shared로 이동</Link>
              <br />
              <Link to="/folder">Folder로 이동</Link>
            </div>
          }
        />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
