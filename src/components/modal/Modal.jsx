import { useState } from "react";
import ModalBasic from "./ModalBasic";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>모달입니다</button>
      {isOpen && <ModalBasic isOpen={isOpen} />}
    </div>
  );
}

export default Modal;
