import * as S from "../ModalLoader.style";

/**
 * @description 현재 선택된 모달의 이름을 바꿀 때 사용할 모달입니다.
 * @returns
 */
export default function ModalChangeSubFolderName() {
  return (
    <>
      <S.ModalTitle>폴더 이름 변경</S.ModalTitle>
      <form action="submit">
        <S.ModalInput placeholder="내용 입력" type="text" />
        <S.ModalButton>변경하기</S.ModalButton>
      </form>
    </>
  );
}
