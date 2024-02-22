import { Route, Routes } from 'react-router-dom';

import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import Modal from './components/modals/Modal'

const App = () => {
  return (
    <Routes>
      <Route path="/shared" element={<SharedPage />} />
      <Route path="/folder" element={<FolderPage />} />
      <Route path="/" element={<Modal />} />
    </Routes>
  )
}

export default App;
