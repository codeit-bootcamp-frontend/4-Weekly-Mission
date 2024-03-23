import ModalBase from './ModalBase';
import './Modal.css';
import { useState } from 'react';

function AddToFolderModal({ onClose }) {
  const [addToFolder, setAddToFolder] = useState('');
  function handleChange() {
    setAddToFolder();
  }

  function AddToFolderModalText() {
    return (
      <>
        <span>링크 주소</span>
        <div>
          <div>
            코딩팁 <span>7개 링크</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <ModalBase modalName="폴더에 추가" centerSpace={<AddToFolderModalText />} onClick={handleChange} onClose={onClose}>
      추가하기
    </ModalBase>
  );
}

export default AddToFolderModal;
