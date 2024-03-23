import ModalBase from './ModalBase';
import { useState } from 'react';

function DeleteModal({ setEditModalOpen }) {
  const [deleteFolder, setDeleteFolder] = useState('');

  function closeModal() {
    setEditModalOpen(false);
  }

  function handleChange() {
    setDeleteFolder();
  }

  return (
    <div onClick={closeModal}>
      <ModalBase modalName="폴더 삭제" onClick={handleChange} centerSpace={<span>폴더명</span>}>
        삭제하기
      </ModalBase>
    </div>
  );
}

export default DeleteModal;
