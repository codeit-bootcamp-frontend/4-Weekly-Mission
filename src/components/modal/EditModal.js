import React from 'react';
import '../../style/EditModal.css';

const EditModal = () => {
  return (
    <div className='ModalContainer'>
      <div className='ContentContainer'>
        <div className='ModalContent'>
          <h2>폴더 이름 변경</h2>
          <div className='InputContent'>
            <input />
            <button>변경하기</button>
          </div>
        </div>
        <button className='ModalCloseBtn' />
      </div>
    </div>
  );
};

export default EditModal;
