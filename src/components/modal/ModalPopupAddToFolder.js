import { useState } from 'react';
import close from '../../images/close.svg';
import check from '../../images/check.svg';
import './styles/modalContainer.css';
import styles from './styles/modalPopupAddToFolder.module.css';

function ModalPopupAddToFolder(props) {
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
        <div>
          <p className="modal_title">폴더에 추가</p>
          <p className="modal_sub_title">링크 주소</p>
        </div>
        <div className={styles.folder_container}>
          <h3 className={styles.folder_name}>코딩팁</h3>
          <p className={styles.folder_link}>7개의 링크</p>
          <img src={check} alt="추가할 폴더 선택" className={styles.check_img}></img>
        </div>
        <button name={props.popupEdit} className="button" onClick={handleClickButton}>
          추가하기
        </button>
      </section>
    </div>
  );
}

export default ModalPopupAddToFolder;
