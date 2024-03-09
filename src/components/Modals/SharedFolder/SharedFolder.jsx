import * as S from "./SharedFolderStyled";
import "./SharedFolder";
import { Modal } from "../Modal/Modal";

export function SharedFolder({ isOpenModal, handleModalClose }) {
  return (
    <Modal
      title="폴더 공유"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <p className="FolderSharedModal-subTitle">폴더명</p>
      <S.ButtonContainer>
        <S.SharedButton>
          <div className="FolderSharedModal-kakaoTalkIcon" />
          <S.IconText>카카오톡</S.IconText>
        </S.SharedButton>
        <S.SharedButton>
          <div className="FolderSharedModal-faceBookIcon" />
          <S.IconText>페이스북</S.IconText>
        </S.SharedButton>
        <S.SharedButton>
          <div className="FolderSharedModal-copyLinkIcon" />
          <S.IconText>링크 복사</S.IconText>
        </S.SharedButton>
      </S.ButtonContainer>
    </Modal>
  );
}
