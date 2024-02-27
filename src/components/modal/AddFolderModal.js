import { useState } from 'react';
import closeIcon from '../../assets/icons/close.svg';

const AddFolderModal = ({ closeModal }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className="modal-box-text">
        <h2 className="modal-title">폴더 추가</h2>
      </div>
      <input
        className="modal-input"
        type="text"
        value={inputValue}
        placeholder="내용 입력"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="modal-button">추가하기</button>
      <button className="modal-close" onClick={closeModal}>
        <img src={closeIcon} />
      </button>
    </>
  );
};
export default AddFolderModal;
