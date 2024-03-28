import { useEffect, useRef } from 'react';
import Button from '../common/Button';
import iconClose from '../../assets/icon-close.svg';
import './Modal.css';

const Modal = ({ prop }) => {
  const {
    onClick,
    modalTitle,
    children,
    buttonClass = 'back_gra_purpleblue',
    buttonText,
    modalButtonFunc,
    selectFolderName,
  } = prop;

  const outSection = useRef();
  //TODO
  const modalOuterClose = (e) => {
    outSection.current === e.target && onClick();
  };

  useEffect(() => {
    // document.querySelector('.modal_section').classList.add('display_none');
  }, []);

  //ref로 현재 위치의 Dom을 넣어줌. 트래킹 하기 위함
  return (
    <div className="modal_section" ref={outSection} onClick={modalOuterClose}>
      <div className="modal_box">
        <img
          className="close_button"
          src={iconClose}
          alt="delete"
          onClick={onClick}
        />
        <p className="title">{modalTitle}</p>
        <div className="select_folder_name">{selectFolderName}</div>
        <div className="modal_content">{children}</div>
        {buttonText && (
          <Button
            className={buttonClass}
            text={buttonText}
            onClick={modalButtonFunc}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
