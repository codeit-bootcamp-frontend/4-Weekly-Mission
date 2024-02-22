import React from 'react';
import Portal from './Potal';
import styled from 'styled-components';
import ModalContent from './ModalContent';
import modalCloseButton from 'assets/images/modalCloseButton.png';

const Modal = ({ setShowModal, children }) => {
  return (
    <Portal>
      <ModalWrapper>
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

const ModalWrapper = styled.div``;
export default Modal;
