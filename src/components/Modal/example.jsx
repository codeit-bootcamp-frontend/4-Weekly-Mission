//모달 사용 예시입니다.
import { useState } from 'react';
import Modal from './index';
import ModalPortal from './ModalPortal/index';

function ExampleModal() {
  const [isOpen, setIsOpen] = useState(false);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  const handleClick = () => {
    //추가하는 로직
    alert('hello');
  };

  return (
    <div id="modal">
      <button onClick={show}>열기</button>
      <ModalPortal>
        <Modal isOpen={isOpen} hide={hide}>
          <Modal.CloseButton>x</Modal.CloseButton>
          <Modal.Header
            Title={<Modal.Title>제목</Modal.Title>}
            Description={Modal.Description}
          />
          <Modal.Body></Modal.Body>
          <Modal.Button onClick={handleClick}>추가하기.</Modal.Button>
        </Modal>
      </ModalPortal>
    </div>
  );
}

export default ExampleModal;
