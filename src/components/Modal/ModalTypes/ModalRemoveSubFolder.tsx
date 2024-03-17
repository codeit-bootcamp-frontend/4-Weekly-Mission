import * as S from "../ModalLoader.style";

export default function ModalRemoveSubFolder({ modalData }: any) {
  console.log(modalData);
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
