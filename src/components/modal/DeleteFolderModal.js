import React from 'react';
import '../../style/DeleteFolderModal.css';

const DeleteFolderModal = () => {
  return (
    <div className='ModalContainer'>
      <div className='ContentContainer'>
        <div className='ModalContent'>
          <div className='TitleContent'>
            <h2>폴더 삭제</h2>
            <span>폴더명</span>
          </div>
          <button>삭제하기</button>
        </div>
        <button className='ModalCloseBtn' />
      </div>
    </div>
  );
};

export default DeleteFolderModal;
