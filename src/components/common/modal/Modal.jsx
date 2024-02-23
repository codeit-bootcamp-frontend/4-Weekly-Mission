import React, { useRef } from 'react';
import Portal from './Portal';
import styled from 'styled-components';
import modalCloseButton from 'assets/images/modalCloseButton.png';
import useCloseModal from 'hook/useCloseModal';

const Modal = ({ setShowModal, children, showModal }) => {
  const modalRef = useRef();
  useCloseModal(showModal, setShowModal, modalRef);
  return (
    <Portal>
      <ModalWrapper>
        <ModalInner ref={modalRef}>
          <StyledButton onClick={() => setShowModal(false)}>
            <img src={modalCloseButton} alt="modal close icon" />
          </StyledButton>
          {children}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
};

const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  overflow: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;
const ModalInner = styled.div`
  width: 36rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 1.5rem;
  position: relative;
  padding: 1.5rem;
`;
const StyledButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1.5rem;
`;
export default Modal;
