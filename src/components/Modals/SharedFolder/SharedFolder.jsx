import * as S from "./SharedFolderStyled";
import "./SharedFolder";
import { Modal } from "../Modal/Modal";
import { handleCopyClipBoard } from "util/copyClipBoard";

export function SharedFolder({ isOpenModal, handleModalClose, selectFolder }) {
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
        <a
          target="_blank"
          href={
            "http://www.facebook.com/sharer/sharer.php?u=" +
            "https://codingaring-week11-linkbrary.netlify.app/folder"
          }
          rel="noreferrer"
        >
          <S.SharedButton>
            <S.FacebookIcon />
            <S.IconText>페이스북</S.IconText>
          </S.SharedButton>
        </a>
        <S.SharedButton
          onClick={() => {
            handleCopyClipBoard(
              "https://codingaring-week11-linkbrary.netlify.app/folder"
            );
          }}
        >
          <S.CopyIcon />
          <S.IconText>링크 복사</S.IconText>
        </S.SharedButton>
      </S.ButtonContainer>
    </Modal>
  );
}
