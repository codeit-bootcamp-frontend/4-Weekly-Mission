import { useState } from 'react';
import '../../assets/styles/Modal.css';
import closeIcon from '../../assets/icons/close.svg';

const Modal = ({ action, closeModal }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAction = () => {
    // 각 동작에 따른 로직을 처리
    switch (action) {
      case 'add':
        // 추가 동작 처리 로직
        console.log('폴더 추가:', inputValue);
        break;
      case 'rename':
        // 이름 변경 동작 처리 로직
        console.log('이름 변경:', inputValue);
        break;
      // 다른 동작들에 대한 처리 추가
      default:
        break;
    }

    // 모달 닫기
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h2 className="modal-title">{action === 'add' ? '폴더 추가' : '이름 변경'}</h2>
        <input
          className="modal-input"
          type="text"
          value={inputValue}
          placeholder="내용 입력"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="modal-button" onClick={handleAction}>
          {action === 'add' ? '추가하기' : '변경하기'}
        </button>
        <button className="modal-close" onClick={closeModal}>
          <img src={closeIcon} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
