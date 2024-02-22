import ModalWrapper from "../ModalWrapper";
import ModalCTAred from "../../components/styled/ModalCTAred";

export default function DeletelinkModal({ onClose, link }) {
  return (
    <>
      <ModalWrapper onClose={onClose} title="링크 삭제" info={link}>
        <ModalCTAred>삭제하기</ModalCTAred>
      </ModalWrapper>
    </>
  );
}
