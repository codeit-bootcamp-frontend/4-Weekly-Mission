import Modal from "./BaseModal";
import {
  MODAL_SOCIAL_KAKAO,
  MODAL_SOCIAL_FACEBOOK,
  MODAL_SOCIAL_LINK,
  CLOSE_BUTTON,
} from "constnats/image";
import { FACEBOOK_SHARE_URL } from "constnats/url";
import { BaseModal } from "constnats/types";
import * as S from "./ModalStyle";

interface Share extends Omit<BaseModal, "children"> {
  folderName: string;
  folderId: number | null;
}

const ShareModal = ({ title, folderName, folderId, onClose }: Share) => {
  const shareOnKakao = () => {
    const { Kakao }: any = window;
    Kakao.cleanup();
    Kakao.init("a4b9b34bc246605e2a09cfbbabd8f163");
    Kakao.Share.createDefaultButton({
      container: "#kakaotalk-sharing-btn",
      objectType: "feed",
      content: {
        title: "LINKBRARY",
        description: "링크 공유하기",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          webUrl: "https://developers.kakao.com",
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            webUrl: "https://developers.kakao.com",
          },
        },
      ],
    });
  };

  const shareOnFacebook = () => {
    window.open(
      `${FACEBOOK_SHARE_URL}${window.location.origin}/shared/${folderId}`
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(`링크가 복사되었습니다 : ${window.location.href}`);
  };

  return (
    <Modal title={title}>
      <>
        <S.Text>{folderName}</S.Text>
        <S.IconContainer>
          <S.IconBox onClick={shareOnKakao} id="kakaotalk-sharing-btn">
            <S.Icon src={MODAL_SOCIAL_KAKAO} alt="kakao" />
            <S.IconText>카카오톡</S.IconText>
          </S.IconBox>
          <S.IconBox onClick={shareOnFacebook}>
            <S.Icon src={MODAL_SOCIAL_FACEBOOK} alt="facebook" />
            <S.IconText>페이스북</S.IconText>
          </S.IconBox>
          <S.IconBox onClick={copyLink}>
            <S.Icon src={MODAL_SOCIAL_LINK} alt="link" />
            <S.IconText>링크 추가</S.IconText>
          </S.IconBox>
        </S.IconContainer>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
      </>
    </Modal>
  );
};

export default ShareModal;
