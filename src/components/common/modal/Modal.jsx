import React from 'react';
import Portal from './Portal';
import styled from 'styled-components';
import modalCloseButton from 'assets/images/modalCloseButton.png';

const Modal = ({ setShowModal, showModal, children }) => {
  return (
    <Portal>
      <ModalWrapper showModal={showModal}>
        <ModalContent>
          <button onClick={() => setShowModal(false)}>
            <img src={modalCloseButton} alt="modal close icon" />
          </button>
          {children}
        </ModalContent>
      </ModalWrapper>
    </Portal>
  );
};

const ModalWrapper = styled.div`
  display: ${props => (props.showModal ? 'flex' : 'none')};
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
const ModalContent = styled.div`
  width: 36rem;
  height: 19.3rem;
`;
export default Modal;
