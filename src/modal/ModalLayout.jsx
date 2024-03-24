import styles from "./ModalLayout.module.css";
import close from "../images/close.svg";

function ModalLayout({ children, title, isModalClicked, onClickCloseButton }) {
  const backgroundClassName = isModalClicked
    ? styles.background
    : styles.invisible;
  return (
    <div className={backgroundClassName}>
      <div className={styles.container}>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.closeButton} onClick={onClickCloseButton}>
          <img src={close} alt="Icon-close" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;
