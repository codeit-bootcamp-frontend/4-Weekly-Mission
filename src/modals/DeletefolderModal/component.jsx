import ModalWrapper from "../ModalWrapper";
import ModalCTAred from "../../components/styled/ModalCTAred";

export default function DeletefolderModal({ onClose, folder }) {
  return (
    <>
      <ModalWrapper onClose={onClose} title="폴더 삭제" info={folder?.name}>
        <ModalCTAred>삭제하기</ModalCTAred>
      </ModalWrapper>
    </>
  );
}
