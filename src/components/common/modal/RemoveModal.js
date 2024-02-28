import ModalBackgroundDim from './ModalBackgroundDim';
import './RemoveModal.css';

export default function RemoveModal({ modalTitle, titleContent, onClose }) {
  return (
    <>
      <ModalBackgroundDim />
      <div className="removeModalContainer">
        <div className="removeModalTitle">
          <div className="removeModalContent">
            <p className="modalTitle">{modalTitle}</p>
            <p>{titleContent}</p>
          </div>
          <button>삭제하기</button>
        </div>
        <button className="modalCloseButton" onClick={onClose}>
          <img src="https://weekly-mission-week9.vercel.app/images/close.svg" alt="close" />
        </button>
      </div>
    </>
  );
}
