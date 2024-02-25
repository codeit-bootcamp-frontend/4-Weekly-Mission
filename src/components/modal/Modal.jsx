import { useRef, useState } from "react";
import ModalBasic from "./ModalBasic";
import styles from "./Modal.module.scss";
import useOnClickOutside from "../Hooks/useOnClickOutside";

function Modal({ modalName, modalContent, modalInput, modalBtn, modalSnsBtn }) {
  // 모달창 노출 여부 false
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpen(false));
  // ref를 prop으로 내리는 과정이 잘못된건지 useOnClickOutside hook에서 에러가 나는듯 합니다.

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className={styles.button}>
        {modalName}
      </button>
      {isOpen && (
        <ModalBasic
          isOpen={isOpen}
          modalName={modalName}
          modalContent={modalContent}
          modalInput={modalInput}
          modalBtn={modalBtn}
          modalSnsBtn={modalSnsBtn}
          ref={ref}
        />
      )}
    </div>
  );
}

export default Modal;
