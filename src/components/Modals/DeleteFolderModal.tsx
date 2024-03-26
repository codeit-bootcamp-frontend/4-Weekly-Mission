import ModalBase from './ModalBase';
import { useState } from 'react';
import type { ModalBaseProps } from './ModalBase';

function DeleteFolderModal({ onClose }: ModalBaseProps) {
  const [deleteFolder, setDeleteFolder] = useState('');

  function handleChange() {
    setDeleteFolder('');
  }

  return (
    <ModalBase modalName="폴더 삭제" onClick={handleChange} centerSpace={<span>폴더명</span>} onClose={onClose}>
      삭제하기
    </ModalBase>
  );
}

export default DeleteFolderModal;
