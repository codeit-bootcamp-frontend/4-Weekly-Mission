import styles from "./ModalLayout.module.css";
import close from "../images/close.svg";

function ModalLayout({ children, title, isOpen, closeModal }) {
  return (
    <div
      className={styles.background}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className={styles.container}>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.closeButton} onClick={closeModal}>
          <img src={close} alt="Icon-close" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;
