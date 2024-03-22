import ModalBase from './ModalBase';
import ModalInput from './ModalInput';
import { useState } from 'react';

function AddFolderModal({ onClose }) {
  const [addFolder, setAddFolder] = useState('');

  function handleChange() {
    setAddFolder();
  }

  return (
    <ModalBase modalName="폴더 추가" onClick={handleChange} centerSpace={<ModalInput />} onClose={onClose}>
      추가하기
    </ModalBase>
  );
}

export default AddFolderModal;
