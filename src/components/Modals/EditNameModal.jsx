import ModalBase from './ModalBase';
import ModalInput from './ModalInput';
import { useState } from 'react';

function ChangeNameModal({ setAddFolderModalOpen }) {
  const [name, setName] = useState('');

  function closeModal() {
    setAddFolderModalOpen(false);
  }

  function handleChange() {
    setName();
  }

  return (
    <div onClick={closeModal}>
      <ModalBase modalName="폴더 이름 변경" onClick={handleChange} centerSpace={<ModalInput />}>
        변경하기
      </ModalBase>
    </div>
  );
}

export default ChangeNameModal;
