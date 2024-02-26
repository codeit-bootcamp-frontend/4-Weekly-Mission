import Layout from './pages/Layout';
import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/shared" element={<SharedPage />} />
          <Route path="/folder" element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
