import { useState } from "react";
import close from "./image/close.svg";
import "./styles/modalContainer.css";

function ModalPopupAdd(props) {
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
        <p className="modal_title">폴더 추가</p>
        <input
          className="input"
          type="text"
          value={modalPopupData}
          placeholder="내용 입력"
          onChange={(e) => setModalPopupData(e.target.value)}
        ></input>
        <button
          name={props.popupEdit}
          className={"button addButton"}
          onClick={handleClickButton}
        >
          추가하기
        </button>
      </section>
    </div>
  );
}

export default ModalPopupAdd;
