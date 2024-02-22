import Modal from "react-modal";

Modal.setAppElement("#root");
function Modal({ isOpen, onClose }) {
  const [issue, setIssue] = useState();

  //  const hSubmit=(e)={
  //   e.preventDefault();
  //   onClose();
  // }
  const customModalStyles = {
    content: {
      background: rgba(0, 0, 0, 0.4),

      color: "#fff",
      border: "none",
      borderRadius: "8px",
      maxWidth: "360px",
      maxHeight: "239px",
      margin: "auto",
      padding: "20px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
    },
  };
  return <Modal isOpen={isOpen} style={customModalStyles}></Modal>;
}
