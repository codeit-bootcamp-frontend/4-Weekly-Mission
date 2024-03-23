import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import styled from 'styled-components';
import { useState } from 'react';

function ModalBase({ modalName, children, onClick, centerSpace }) {
  const [editModalOpen, setEditModalOpen] = useState(true);

  const Div = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Div onClick={() => setEditModalOpen(true)}>
      <div
        id="EditModal"
        onClick={e => {
          e.stopPropagation();
        }}>
        <FontAwesomeIcon icon={faXmark} className="EditModalX" onClick={() => setEditModalOpen(false)} />
        <p id="EditModalText">{modalName}</p>
        <div className="centerSpace">{centerSpace}</div>
        <button id="EditModalButton" onClick={onClick}>
          {children}
        </button>
      </div>
    </Div>
  );
}

export default ModalBase;
