import Modal from 'react-modal';
import closeIcon from '../../assets/close.svg';
import './ModalContainer.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalContainer = ({ isOpen, onClose, children }: ModalProps) => {
  const defaultStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={defaultStyles}>
      <div className='modalBox'>
        <img
          src={closeIcon}
          alt='close'
          className='closeIcon'
          onClick={onClose}
        />
        {children}
      </div>
    </Modal>
  );
};

export default ModalContainer;
