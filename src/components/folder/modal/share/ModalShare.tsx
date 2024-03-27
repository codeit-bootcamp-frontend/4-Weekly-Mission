import Title from "../Title";
import ShareContainer from "./ShareContainer";

import facebookShareImg from "../../../../assets/img/png/facebook-share.png";
import linkShareImg from "../../../../assets/img/png/share-link.png";
import kakaoShareImg from "../../../../assets/img/png/kakao-share.png";
import TitleContainer from "./TitleContainer";
import FolderText from "./FolderText";

import KaKaoShareButton from "./kakao/KakaoShareButton";
import FacebookShareBtn from "./facebook/FacebookShareButton";
import CopyLinkButton from "./copyLink/CopyLinkButton";
import { ModalShareProps } from "../../../../@types/Modal";

function ModalShare({ userId, folderId, folderName }: ModalShareProps) {
  const currentUrl = window.location.href;
  const shareUrl =
    currentUrl.replace("/folder", "") +
    `/shared?user=${userId}&folder=${folderId}`;

  return (
    <>
      <TitleContainer>
        <Title>폴더 공유</Title>
        <FolderText>{folderName}</FolderText>
      </TitleContainer>
      <ShareContainer>
        <KaKaoShareButton
          src={kakaoShareImg}
          alt="kakao-share"
          text="카카오톡"
          shareUrl={shareUrl}
        />
        <FacebookShareBtn
          src={facebookShareImg}
          alt="facebook-share"
          text="페이스북"
          shareUrl={shareUrl}
        />
        <CopyLinkButton
          src={linkShareImg}
          alt="link-share"
          text="링크 복사"
          shareUrl={shareUrl}
        />
      </ShareContainer>
    </>
  );
}

export default ModalShare;
