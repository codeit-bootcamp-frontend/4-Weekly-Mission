import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shared from './pages/Shared.js';
import Landing from './pages/Landing.js';
import Folder from './pages/Folder.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
