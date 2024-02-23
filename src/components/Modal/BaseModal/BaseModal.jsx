import { useEffect, useRef } from "react";
import styles from "./base.module.css";
import closeIcon from "assets/images/ic_close.png";

function BaseModeal({ title, children, variant, closeModal }) {
  const modalRef = useRef(null);

  const handleOutSideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal(`${variant}`);
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
