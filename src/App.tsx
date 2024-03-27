import { Routes, Route } from 'react-router-dom';

import Add from './components/Modal/Add';
import FolderPage from './pages/FolderPage';
import Main from './pages/MainPage';
import SharedPage from './pages/SharedPage';
import React from 'react';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='folder' element={<FolderPage />} />
      <Route path='shared' element={<SharedPage />} />
      <Route path='Add' element={<Add isOpen={false} closeModal={() => {}} />} />
    </Routes>
  );
};

export default App;
