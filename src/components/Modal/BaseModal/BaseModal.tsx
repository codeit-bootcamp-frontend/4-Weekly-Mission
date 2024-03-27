import { useEffect, useRef, ReactNode } from "react";
import styles from "./base.module.css";
import closeIcon from "assets/images/ic_close.png";
import { CloseModal } from "../../../utils/hooks/useModal";

export interface ModalProps {
  variant: string;
  closeModal: CloseModal;
}

interface Props extends ModalProps{
  title: string;
  children: ReactNode;
}

function BaseModeal({ title, children, variant, closeModal }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutSideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal(variant);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.backdrop}></div>
      <div ref={modalRef} className={styles.modal}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          {children}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal(variant);
            }}
          >
            <img src={closeIcon} className={styles.close} alt="닫기 아이콘" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BaseModeal;
