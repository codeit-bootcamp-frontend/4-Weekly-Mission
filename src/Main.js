import Layout from './pages/Layout';
import Shared from './pages/Shared';
import Folder from './pages/Folder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/shared" element={<Shared />} />
          <Route path="/folder" element={<Folder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
