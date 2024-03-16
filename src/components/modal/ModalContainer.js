import { useState } from 'react';

import ModalPopupEdit from './ModalPopupEdit';
import ModalPopupAdd from './ModalPopupAdd';
import ModalPopupAddToFolder from './ModalPopupAddToFolder';
import ModalPopupDelete from './ModalPopupDelete';
import ModalPopupDeleteLink from './ModalPopupDeleteLink';
import ModalPopupShare from './ModalPopupShare';

function ModalContainer() {
  const [popup, setPopup] = useState({
    popupEdit: false,
    popupAdd: false,
    popupDelete: false,
    popupShare: false,
    popupAddToFolder: false,
    popupDeleteLink: false,
  });
  const [inputData, setInputData] = useState('');

  const handleClickButton = (e) => {
    setPopup({
      ...popup,
      [e.target.name]: true,
    });
  };

  return (
    <div className="modal-container">
      <input type="text" value={inputData}></input>
      <button name="popupEdit" onClick={handleClickButton}>
        폴더 이름 변경
      </button>
      <button name="popupAdd" onClick={handleClickButton}>
        폴더 추가
      </button>
      <button name="popupDelete" onClick={handleClickButton}>
        폴더 삭제
      </button>
      <button name="popupShare" onClick={handleClickButton}>
        폴더 공유
      </button>
      <button name="popupAddToFolder" onClick={handleClickButton}>
        폴더에 추가
      </button>
      <button name="popupDeleteLink" onClick={handleClickButton}>
        링크 삭제
      </button>
      {popup.popupEdit && (
        <ModalPopupEdit setPopup={setPopup} inputData={inputData} setInputData={setInputData} />
      )}
      {popup.popupAdd && (
        <ModalPopupAdd setPopup={setPopup} inputData={inputData} setInputData={setInputData} />
      )}
      {popup.popupDelete && (
        <ModalPopupDelete setPopup={setPopup} inputData={inputData} setInputData={setInputData} />
      )}
      {popup.popupShare && (
        <ModalPopupShare setPopup={setPopup} inputData={inputData} setInputData={setInputData} />
      )}
      {popup.popupAddToFolder && (
        <ModalPopupAddToFolder
          setPopup={setPopup}
          inputData={inputData}
          setInputData={setInputData}
        />
      )}
      {popup.popupDeleteLink && (
        <ModalPopupDeleteLink
          setPopup={setPopup}
          inputData={inputData}
          setInputData={setInputData}
        />
      )}
    </div>
  );
}

export default ModalContainer;
