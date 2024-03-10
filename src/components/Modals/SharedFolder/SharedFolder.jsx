import * as S from "./SharedFolderStyled";
import "./SharedFolder";
import { Modal } from "../Modal/Modal";
import { handleCopyClipBoard } from "util/copyClipBoard";

export function SharedFolder({
  isOpenModal,
  handleModalClose,
  selectFolder,
  onClick,
  copyLink,
}) {
  return (
    <Modal
      title="폴더 공유"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <S.FolderName>{selectFolder}</S.FolderName>
      <S.ButtonContainer>
        <S.SharedButton>
          <S.KakaoTalkIcon />
          <S.IconText>카카오톡</S.IconText>
        </S.SharedButton>
        <S.SharedButton onClick={onClick}>
          <S.FacebookIcon />
          <S.IconText>페이스북</S.IconText>
        </S.SharedButton>
        <S.SharedButton>
          <S.CopyIcon onClick={handleCopyClipBoard()} />
          <S.IconText>링크 복사</S.IconText>
        </S.SharedButton>
      </S.ButtonContainer>
    </Modal>
  );
}
