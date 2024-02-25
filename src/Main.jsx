import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedPage from './components/pages/SharedPage';
import Layout from './components/layout/Layout';
import FolderPage from './components/pages/FolderPage';
import LandingPage from './components/pages/LandingPage';

const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="shared" element={<SharedPage />} />
        <Route path="folder" element={<FolderPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Main;
