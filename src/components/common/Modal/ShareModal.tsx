import Modal from "./BaseModal";
import { useEffect } from "react";
import Icon from "../Icon/Icon";
import { BaseModal } from "constants/types";
import {
  MODAL_SOCIAL_KAKAO,
  MODAL_SOCIAL_FACEBOOK,
  MODAL_SOCIAL_LINK,
  CLOSE_BUTTON,
} from "constants/image";
import { shareOnFacebook, shareOnKakao, copyLink } from "utils/shares";
import * as S from "./ModalStyle";

interface Share extends Omit<BaseModal, "children"> {
  folderName: string;
  folderId: number | null;
}

const ShareModal = ({ title, folderName, folderId, onClose }: Share) => {
  useEffect(() => {
    shareOnKakao();
  });

  const SHARE_ICON_LIST = [
    {
      id: "kakaotalk-sharing-btn",
      image: MODAL_SOCIAL_KAKAO,
      alt: "kakao",
      children: "카카오톡",
      onClick: shareOnKakao,
    },
    {
      image: MODAL_SOCIAL_FACEBOOK,
      alt: "facebook",
      children: "페이스북",
      onClick: () => shareOnFacebook(folderId),
    },
    {
      image: MODAL_SOCIAL_LINK,
      alt: "link",
      children: "링크 추가",
      onClick: () => copyLink(window.location.href),
    },
  ];

  return (
    <Modal title={title}>
      <>
        <S.Text>{folderName}</S.Text>
        <S.IconContainer>
          {SHARE_ICON_LIST.map((icon) => (
            <Icon
              key={icon.alt}
              id={icon.id}
              alt={icon.alt}
              image={icon.image}
              size="large"
              onClick={icon.onClick}
            />
          ))}
        </S.IconContainer>
        <S.CloseButton src={CLOSE_BUTTON} alt="close" onClick={onClose} />
      </>
    </Modal>
  );
};

export default ShareModal;
