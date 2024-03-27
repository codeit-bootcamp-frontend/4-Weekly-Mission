import Modal from "react-modal";
import closeIcon from "../../images/close.svg";
import "../../styles/Modal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const ModalContainer = ({ isOpen, onClose, children }: Props) => {
  const defaultStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 15,
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={defaultStyles}>
      <div className="modalBox">
        <img
          src={closeIcon}
          alt="닫기버튼"
          className="closeIcon"
          onClick={onClose}
        />
        {children}
      </div>
    </Modal>
  );
};

export default ModalContainer;
