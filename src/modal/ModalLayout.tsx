import styles from "./ModalLayout.module.css";
import {ReactComponent as CloseIcon} from '../images/Icon_close.svg';
import { ReactNode } from "react";

interface LayoutProps extends ModalBaseProps {
  title: string,
  children: ReactNode,
}

function ModalLayout({ title, children, isOpenModal, closeModal }: LayoutProps) {
  const closeBtnBackground = 'var(--gray10)';
  const closeBtnIcon = 'var(--gray60)';
  
  return (
    <div
      className={styles.background}
      style={{ display: isOpenModal ? "block" : "none" }}
    >
      <div className={styles.container}>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.closeButton} onClick={closeModal}>
          <CloseIcon fill={closeBtnBackground} stroke={closeBtnIcon}/>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;
