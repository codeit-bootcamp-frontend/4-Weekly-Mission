import { createPortal } from "react-dom";
import styles from "./DefaultModal.module.scss";
import Backdrop from "./Backdrop";

const portalElement = document.getElementById("modal") as HTMLElement;

type setModalOpen = (value: boolean) => boolean;

const DefaultModal = ({ setModalOpen }: { setModalOpen: setModalOpen }) => {
  const handleClickCloseBtn = () => {
    setModalOpen(false);
  };
  return (
    <>
      {createPortal(
        <>
          <Backdrop />
          <div className={styles.container}>
            <h2>Title</h2>
            <div className={styles.content}>
              <span>content</span>
              <button>button</button>
            </div>
            <button className={styles.deleteBtn} onClick={handleClickCloseBtn}>
              close
            </button>
          </div>
        </>,
        portalElement
      )}
    </>
  );
};

export default DefaultModal;
