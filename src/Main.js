import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Shared from './components/Shared';
import Folder from './components/Folder';
import Modal from './modals/Share';
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shared" element={<Shared />} />
        <Route path="folder" element={<Folder />} />
        <Route path="modal" element={<Modal title="폴더 공유" main="폴더명"></Modal>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
