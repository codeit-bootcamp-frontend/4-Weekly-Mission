import ModalHeader from "./ModalHeader";
import ModalMain from "./ModalMain";
import modalCloseBtn from "../../img/modalCloseBtn.svg";
import styles from "./Modal.module.scss";

function ModalBasic({
  modalName,
  modalContent,
  modalInput,
  modalBtn,
  modalSnsBtn,
  isOpen,
  ref,
}) {
  return (
    <div ref={ref} className={styles.modalBasic}>
      <div className={styles.modalContainer}>
        <button className={styles.closeBtn}>
          <img src={modalCloseBtn} alt="closeButton" />
        </button>
        <ModalHeader
          modalHeaderName={`폴더 ${modalName}`}
          modalHeaderContent={modalContent}
        />
        <ModalMain
          modalInput={modalInput}
          modalBtn={modalBtn}
          modalSnsBtn={modalSnsBtn}
        />
      </div>
    </div>
  );
}

export default ModalBasic;
