import ModalBackgroundDim from './ModalBackgroundDim';
import './EditAndAddModal.css';

export default function EditAndAddModal({ modalTitle, buttonText, selectedFolderName, onClose }) {
  return (
    <>
      <ModalBackgroundDim />
      <div className="modalContainer">
        <p className="modalTitle">{modalTitle}</p>
        <div className="modalInputAndButton">
          <input value={selectedFolderName} placeholder="내용 입력" />
          <button>{buttonText}</button>
        </div>
        <button className="modalCloseButton" onClick={onClose}>
          <img src="https://weekly-mission-week9.vercel.app/images/close.svg" alt="close" />
        </button>
      </div>
    </>
  );
}
