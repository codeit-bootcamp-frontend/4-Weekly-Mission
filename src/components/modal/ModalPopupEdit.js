import { useState } from 'react';
import close from '../../images/close.svg';
import './styles/modalContainer.css';

function ModalPopupEdit(props) {
  const [modalPopupData, setModalPopupData] = useState(props.inputData);
  const handleClickButton = (e) => {
    // props.setInputData(modalPopupData);
    // props.setPopup(false);
    props.setInputData(modalPopupData);
    props.setPopup({
      ...props,
      [e.target.name]: false,
    });
  };
  const blockEvent = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="modal_container">
      <section className="modal_layout" onClick={blockEvent}>
        <img
          className="closeButtonImg"
          src={close}
          alt="closeButton"
          name={props.popupEdit}
          onClick={handleClickButton}
        ></img>
        <p className="modal_title">폴더 이름 변경</p>
        <input
          className="input"
          type="text"
          value={modalPopupData}
          onChange={(e) => setModalPopupData(e.target.value)}
        ></input>
        <button name={props.popupEdit} className="button editButton" onClick={handleClickButton}>
          변경하기
        </button>
      </section>
    </div>
  );
}

export default ModalPopupEdit;
