import { ModalButtonBlue } from "StyledComponents/ModalButton/ModalButtonBlue";
import "./RenameModal.css";

export function RenameModal() {
  return (
    <>
      <div className="modal-dim"></div>
      <div className="modal-container">
        <button type="button" className="modal-exit-button">
          X
        </button>
        <div className="modal-title">폴더 이름 변경</div>
        <input type="text" className="modal-input"></input>
        <ModalButtonBlue type="button" className="rename-button">
          변경하기
        </ModalButtonBlue>
      </div>
    </>
  );
}
