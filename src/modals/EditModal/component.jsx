import ModalWrapper from "../ModalWrapper";
import ModalCTA from "../../components/styled/ModalCTA";
import "./style.css";
import { useState } from "react";

export default function EditModal({ onClose, folder }) {
  const [newFolderName, setNewFolderName] = useState(folder?.name || "");
  return (
    <>
      <ModalWrapper onClose={onClose} title="폴더 이름 변경">
        <div className="edit-modal">
          <input
            type="text"
            className="modal-input"
            value={newFolderName}
            placeholder="내용 입력"
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <ModalCTA>변경하기</ModalCTA>
        </div>
      </ModalWrapper>
    </>
  );
}
