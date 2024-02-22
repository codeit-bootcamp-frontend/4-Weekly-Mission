import './styles/App.css';
// import NavBar from './NavBar/NavBar';
import { useState } from 'react';
// import FolderDeleteModal from './FolderDeleteModal';
import LinkDeleteModal from './LinkDeleteModal copy';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='App'>
      {/* <NavBar /> */}
      <button
        style={{
          width: '70px',
          height: '40px',
          background: '#gray600',
          zIndex: '100',
          position: 'absolute',
        }}
        onClick={openModal}
      >
        Open Modal
      </button>
      {/* <FolderDeleteModal isOpen={isModalOpen} closeModal={closeModal} /> */}
      <LinkDeleteModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
