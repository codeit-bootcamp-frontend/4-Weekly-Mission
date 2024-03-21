import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import styled from 'styled-components';

function ModalBase({ setEditModalOpen, modalName, children }) {
  function closeModal() {
    setEditModalOpen(false);
  }

  const Div = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Div onClick={closeModal}>
      <div
        id="EditModal"
        onClick={e => {
          e.stopPropagation();
        }}>
        <FontAwesomeIcon icon={faXmark} className="EditModalX" onClick={closeModal} />
        <p id="EditModalText">{modalName}</p>
        <button id="EditModalButton" onClick={closeModal}>
          {children}
        </button>
      </div>
    </Div>
  );
}

export default ModalBase;
