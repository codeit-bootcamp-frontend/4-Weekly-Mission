import styles from "./styles.module.css";
import { ImCross } from "react-icons/im";

interface Props {
  modalRef: React.RefObject<HTMLDivElement>;
  openModal: boolean;
  handleModalClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({
  modalRef,
  openModal,
  handleModalClose,
  children,
}: Props) => {
  if (!openModal) {
    return <></>;
  }

  return (
    <>
      <div id={styles.backdrop}>.</div>
      <div className={styles.container}>
        <div className={styles.modal} ref={modalRef}>
          <button className={styles.closeBtn} onClick={handleModalClose}>
            <ImCross />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};
