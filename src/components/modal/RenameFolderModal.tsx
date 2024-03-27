import { useState } from 'react';
import closeIcon from '../../assets/icons/close.svg';

interface RenameFolderModalProps {
  closeModal: () => void;
}

const RenameFolderModal = ({ closeModal }: RenameFolderModalProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className="modal-box-text">
        <h2 className="modal-title">폴더 이름 변경</h2>
      </div>
      <input
        className="modal-input"
        type="text"
        value={inputValue}
        placeholder="내용 입력"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="modal-button">변경하기</button>
      <button className="modal-close" onClick={closeModal}>
        <img src={closeIcon} alt="close-icon" />
      </button>
    </>
  );
};
export default RenameFolderModal;
