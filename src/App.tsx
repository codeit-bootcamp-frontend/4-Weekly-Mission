import './styles/global.css';

import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import FolderPage from './pages/FolderPage';
import SharedPage from './pages/SharedPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="folder" element={<FolderPage />} />
      <Route path="shared" element={<SharedPage />} />
    </Routes>
  );
}

export default App;
