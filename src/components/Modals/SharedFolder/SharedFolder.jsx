import * as S from "./SharedFolderStyled";
import "./SharedFolder";
import { Modal } from "../Modal/Modal";
import KakaoTalk from "../../../assets/kakaoTalk.svg";
import Facebook from "../../../assets/facebookShared.svg";
import Shared from "../../../assets/addLink.svg";

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
          <img src={KakaoTalk} />
          <S.IconText>카카오톡</S.IconText>
        </S.SharedButton>
        <S.SharedButton>
          <img src={Facebook} />
          <S.IconText>페이스북</S.IconText>
        </S.SharedButton>
        <S.CopyLink>
          <img src={Shared} />
          <S.IconText>링크 복사</S.IconText>
        </S.CopyLink>
      </S.ButtonContainer>
    </Modal>
  );
}
