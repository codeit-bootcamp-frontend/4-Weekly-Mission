import * as S from "../ModalLoader.style";

// Type
import { ModalDataRemoveLink } from "src/@types/ModalFunctionDataTypes";

export default function ModalRemoveLink({ modalData }: ModalDataRemoveLink) {
  return (
    <>
      <S.ModalTitle>
        링크 삭제 <br />
        <S.ModalCaption>{modalData}</S.ModalCaption>
      </S.ModalTitle>
      <S.ModalButton $errored={true}>삭제하기</S.ModalButton>
    </>
  );
}
