import styles from "./base.module.css";
import closeIcon from "assets/images/ic_close.png";

function BaseModeal({ title, children, variant, setModals }) {
  const closeModal = (modal) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modal]: false,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          {children}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal(`${variant}`);
            }}
          >
            <img src={closeIcon} className={styles.close} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BaseModeal;
