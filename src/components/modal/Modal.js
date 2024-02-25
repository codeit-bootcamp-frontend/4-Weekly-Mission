import { useEffect, useState } from 'react';
import '../../assets/styles/Modal.css';
import closeIcon from '../../assets/icons/close.svg';
import kakaoIcon from '../../assets/icons/kakao.svg';
import facebookIcon from '../../assets/images/facebook.svg';
import linkIcon from '../../assets/images/link.svg';

const Modal = ({ action, closeModal, data = '' }) => {
  const [inputValue, setInputValue] = useState('');
  const [content, setContent] = useState({
    title: '',
    buttonText: '',
    inputClass: 'modal-input',
    buttonClass: 'modal-button',
    subTextClass: 'modal-sub-text',
    snsClass: 'hidden',
  });

  const handleAction = () => {
    switch (action) {
      case 'add':
        console.log('폴더 추가:', inputValue);
        break;
      case 'rename':
        console.log('이름 변경:', inputValue);
        break;
      case 'delete':
        break;
      default:
        break;
    }

    closeModal();
  };

  const setModal = () => {
    switch (action) {
      case 'add':
        return setContent((prev) => ({
          ...prev,
          title: '폴더 추가',
          buttonText: '추가하기',
          subTextClass: 'hidden',
        }));

      case 'add-folder':
        return setContent((prev) => ({
          ...prev,
          title: '폴더 추가',
          buttonText: '추가하기',
          subTextClass: 'hidden',
        }));

      case 'rename':
        return setContent((prev) => ({
          ...prev,
          title: '폴더 이름 변경',
          buttonText: '변경하기',
          subTextClass: 'hidden',
        }));

      case 'delete-folder':
        return setContent((prev) => ({
          ...prev,
          title: '폴더 삭제',
          buttonText: '삭제하기',
          inputClass: 'hidden',
          buttonClass: 'modal-button red',
        }));

      case 'delete-link':
        return setContent((prev) => ({
          ...prev,
          title: '링크 삭제',
          buttonText: '삭제하기',
          inputClass: 'hidden',
          buttonClass: 'modal-button red',
        }));

      case 'share':
        return setContent((prev) => ({
          ...prev,
          title: '폴더 공유',
          inputClass: 'hidden',
          buttonClass: 'hidden',
          snsClass: 'sns-box',
        }));

      default:
        return;
    }
  };
  useEffect(() => {
    setModal();
  }, []);

  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-box-text">
          <h2 className="modal-title">{content.title}</h2>
          <h3 className={content.subTextClass}>{data}</h3>
        </div>
        <input
          className={content.inputClass}
          type="text"
          value={inputValue}
          placeholder="내용 입력"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={content.buttonClass} onClick={handleAction}>
          {content.buttonText}
        </button>
        <div className={content.snsClass}>
          <div className="icon-box">
            <div id="kakao-icon">
              <img src={kakaoIcon} alt="kakao" />
            </div>
            카카오톡
          </div>
          <div className="icon-box">
            <div id="facebook-icon">
              <img src={facebookIcon} alt="facebook" />
            </div>
            페이스북
          </div>
          <div className="icon-box">
            <div id="link-icon">
              <img src={linkIcon} alt="link" />
            </div>
            링크복사
          </div>
        </div>
        <button className="modal-close" onClick={closeModal}>
          <img src={closeIcon} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
