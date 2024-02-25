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
    buttonText = '확인',
    modalButtonFunc,
    selectFolderName,
  } = prop;

  const outSection = useRef();

  const modalOuterClose = (e) => {
    //트래킹 기준 요소, 현재 선택한 영역 요소와 비교해서 동일한 경우 닫음
    outSection.current === e.target && onClick();
  };

  useEffect(() => {
    document.querySelector('.modal_section').classList.add('display_none');
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
        <h3>{modalTitle}</h3>
        <div className="select_folder_name">{selectFolderName}</div>
        <div className="modal_content">{children}</div>
        <Button
          className={buttonClass}
          text={buttonText}
          onClick={modalButtonFunc}
        />
      </div>
    </div>
  );
};

export default Modal;
