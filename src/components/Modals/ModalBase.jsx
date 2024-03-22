import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ModalBase({ modalName, children, onClick, centerSpace, onClose }) {
  return (
    <Div onClick={onClose}>
      <div
        id="EditModal"
        onClick={e => {
          e.stopPropagation();
        }}>
        <FontAwesomeIcon icon={faXmark} className="EditModalX" onClick={onClose} />
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
