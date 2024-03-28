import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { PropsWithChildren } from 'react';
import './Modal.css';

export interface ModalBaseProps {
  modalName?: string;
  onClick?: () => void;
  centerSpace?: React.ReactNode;
  onClose?: () => void;
}

function ModalBase({ modalName, children, onClick, centerSpace, onClose }: PropsWithChildren<ModalBaseProps>) {
  return (
    <div className="modalBase" onClick={onClose}>
      <div
        className="modal"
        onClick={e => {
          e.stopPropagation();
        }}>
        <FontAwesomeIcon icon={faXmark} className="modalX" onClick={onClose} />
        <p className="modalText">{modalName}</p>
        <div className="centerSpace">{centerSpace}</div>
        <button className="modalButton" onClick={onClick}>
          {children}
        </button>
      </div>
    </div>
  );
}

export default ModalBase;
