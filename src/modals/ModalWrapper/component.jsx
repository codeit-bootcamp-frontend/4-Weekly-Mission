import "./style.css";

export default function ModalWrapper({
  children,
  title,
  info = null,
  onClose,
}) {
  return (
    <div
      className="modal-container"
      onClick={() => {
        onClose();
      }}
    >
      <div
        className="modal-contents"
        onClick={(e) => {
          e.stopPropagation(); // 상위 엘리먼트로 버블링 차단
        }}
      >
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
