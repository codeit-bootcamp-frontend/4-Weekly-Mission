import React from 'react';
import '../../style/AddFolderModal.css';

const AddFolderModal = () => {
  return (
    <div className='ModalContainer'>
      <div className='ContentContainer'>
        <div className='ModalContent'>
          <h2>폴더 추가</h2>
          <div className='InputContent'>
            <input placeholder='내용 입력' />
            <button>추가하기</button>
          </div>
        </div>
        <button className='ModalCloseBtn' />
      </div>
    </div>
  );
};

export default AddFolderModal;
