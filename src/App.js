import { Routes, Route } from 'react-router-dom';

import FolderPage from './pages/FolderPage';
import Main from './pages/MainPage';
import SharedPage from './pages/SharedPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='folder' element={<FolderPage />} />
      <Route path='shared' element={<SharedPage />} />
    </Routes>
  );
};

export default App;
