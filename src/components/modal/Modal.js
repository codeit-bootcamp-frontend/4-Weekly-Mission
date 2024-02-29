import Modal from "react-modal";
import { useState } from "react";
Modal.setAppElement("#root");


function CustomModal({ isOpen, onClose, children }) {
  const [issue, setIssue] = useState();

  //  const hSubmit=(e)={
  //   e.preventDefault();
  //   onClose();
  // }
  const customModalStyles = {
    content: {
      background: 'rgba(0, 0, 0, 0.4)',
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      maxWidth: "360px",
      maxHeight: "240px",
      margin: "auto",
      padding: 0
      
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
    },
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customModalStyles}>
      {children}
    </Modal>
  );
}

export default CustomModal
