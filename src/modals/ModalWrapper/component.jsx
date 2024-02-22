import "./style.css";

export default function ModalWrapper({
  children,
  title,
  info = null,
  onClose,
}) {
  return (
    <div className="modal-container">
      <div className="modal-contents">
        <button onClick={onClose}>
          <img src="images/close.svg" className="modal-closer" alt="close" />
        </button>
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          {info && <span className="modal-info">{info}</span>}
        </div>
        {children}
      </div>
    </div>
  );
}
