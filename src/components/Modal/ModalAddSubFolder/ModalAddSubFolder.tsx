import * as S from "../ModalLoader.style";

/**
 *
 * @returns 새로운 폴더를 추가하고자 할 때 input과 동시에 띄워줄 모달입니다.
 */
export default function ModalAddSubFolder() {
  return (
    <>
      <S.ModalTitle>폴더 추가</S.ModalTitle>
      <form action="submit">
        <S.ModalInput placeholder="내용 입력" type="text" />
        <S.ModalButton>변경하기</S.ModalButton>
      </form>
    </>
  );
}
