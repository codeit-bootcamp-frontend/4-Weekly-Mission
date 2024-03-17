import * as S from "../ModalLoader.style";

export default function ModalSubFolderNameChange() {
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
