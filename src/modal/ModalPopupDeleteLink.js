import { useState } from "react";
import close from "./image/close.svg";
import "./styles/modalPopupDelete.css";

function ModalPopupDeleteLink(props) {
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
        <div className="modal_title_container">
          <p className="modal_title">링크 삭제</p>
          <p className="modal_sub_title">https~</p>
        </div>
        <button
          name={props.popupEdit}
          className="delete_button"
          onClick={handleClickButton}
        >
          삭제하기
        </button>
      </section>
    </div>
  );
}

export default ModalPopupDeleteLink;
