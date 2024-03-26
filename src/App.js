import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../src/components/pages/homePage/HomePage';
import SharedPage from '../src/components/pages/sharedPage/SharedPage';
import FolderPage from './components/pages/folderPage/FolderPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
