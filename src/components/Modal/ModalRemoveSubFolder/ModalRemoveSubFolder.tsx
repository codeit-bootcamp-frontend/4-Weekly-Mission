import * as S from "../ModalLoader.style";

// Type
import { ModalDataRemoveSubFolder } from "src/@types/ModalFunctionDataTypes";

/**
 *
 * @param {string } modalData 현재 선택된 폴더를 string으로 받아 표시해 줌과 동시에 삭제 기능을 수행하는 모달입니다.
 * @returns
 */
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
