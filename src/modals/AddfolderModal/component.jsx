import ModalWrapper from "../ModalWrapper";
import ModalCTA from "../../components/styled/ModalCTA";
import "./style.css";

export default function AddfolderModal({ onClose }) {
  return (
    <>
      <ModalWrapper onClose={onClose} title="폴더 추가">
        <div className="addfolder-modal">
          <input type="text" className="modal-input" placeholder="내용 입력" />
          <ModalCTA>추가하기</ModalCTA>
        </div>
      </ModalWrapper>
    </>
  );
}
