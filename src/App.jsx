import './styles/App.css';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import DeleteFolder from './components/modals/DeleteFolder';
import DeleteLink from './components/modals/DeleteLink';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='App'>
      <NavBar />
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
      <DeleteFolder isOpen={isModalOpen} closeModal={closeModal} />
      <DeleteLink isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
