import ModalBase from './ModalBase';
import ModalInput from './ModalInput';
import { useState } from 'react';

function AddFolderModal({ setAddFolderModalOpen }) {
  const [addFolder, setAddFolder] = useState('');

  function closeModal() {
    setAddFolderModalOpen(false);
  }

  function handleChange() {
    setAddFolder();
  }

  return (
    <div onClick={closeModal}>
      <ModalBase modalName={'폴더 추가'} children={'추가하기'} onClick={handleChange} centerSpace={<ModalInput />} />
    </div>
  );
}

export default AddFolderModal;
