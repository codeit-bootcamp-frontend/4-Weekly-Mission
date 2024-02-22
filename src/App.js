import { useState } from 'react';
import Modal from './components/Modal';
// import SharedPage from './pages/SharedPage';
// import FolderPage from './pages/FolderPage';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        style={{
          background: '#654321',
          position: 'absolute',
          width: '20px',
          height: '20px',
          zIndex: 3,
        }}
        onClick={openModal}></button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />

      {/* <SharedPage />
      <FolderPage /> */}
    </>
  );
};

export default App;
