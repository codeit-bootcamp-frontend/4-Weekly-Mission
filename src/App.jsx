import { Route, Routes } from'react-router-dom';

import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import './App.css';

const App = () => {

  return (
    <Routes>
      <Route path="/shared" element={<SharedPage />} />
      <Route path="/folder" element={<FolderPage />} />
    </Routes>
  )
}

export default App;