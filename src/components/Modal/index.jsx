import styles from "./styles.module.css";

const Modal = ({ modalRef, openModal, children }) => {
  if (!openModal) {
    return <></>;
  }

  return (
    <>
      <div id={styles.backdrop}>.</div>
      <div className={styles.modal} ref={modalRef}>
        {children}
      </div>
    </>
  );
};

export default Modal;
