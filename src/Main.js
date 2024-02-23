import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Shared from './components/Shared';
import Folder from './components/Folder';
import Modal from './modals/Add';
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shared" element={<Shared />} />
        <Route path="folder" element={<Folder />} />
        <Route path="modal" element={<Modal></Modal>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
