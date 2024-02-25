import { useState } from "react";
import ModalBasic from "./ModalBasic";

function Modal({ modalName, modalContent }) {
  // 모달창 노출 여부 false
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>{modalName}</button>
      {isOpen && (
        <ModalBasic
          isOpen={isOpen}
          modalName={modalName}
          modalContent={modalContent}
        />
      )}
    </div>
  );
}

export default Modal;
