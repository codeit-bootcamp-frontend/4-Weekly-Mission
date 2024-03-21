import * as S from "../ModalLoader.style";

// Type
import { ModalDataRemoveSubFolder } from "src/@types/ModalFunctionDataTypes";

export default function ModalRemoveSubFolder({
  modalData,
}: ModalDataRemoveSubFolder) {
  return (
    <>
      <S.ModalTitle>
        폴더 삭제 <br />
        <S.ModalCaption>{modalData}</S.ModalCaption>
      </S.ModalTitle>
      <S.ModalButton $errored={true}>삭제하기</S.ModalButton>
    </>
  );
}
