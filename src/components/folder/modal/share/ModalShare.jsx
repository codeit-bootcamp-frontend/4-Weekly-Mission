import StyledBackground from "../StyledBackground";
import StyledContainer from "../StyledContainer";
import StyledDiv from "../StyledDiv";
import CloseButton from "../CloseButton";
import Title from "../Title";
import ShareContainer from "./ShareContainer";
import ShareImgButton from "./ShareImgButton";
import ShareImg from "./ShareImg";
import facebookShareImg from "../../../../assets/img/png/facebook-share.png";
import linkShareImg from "../../../../assets/img/png/share-link.png";
import kakaoShareImg from "../../../../assets/img/png/kakao-share.png";
import TitleContainer from "./TitleContainer";
import FolderText from "./FolderText";
import ShareText from "./ShareText";
import KaKaoShareButton from "./kakao/KakaoShareButton";
import FacebookShareBtn from "./facebook/FacebookShareButton";

function ModalShare({ isShare, setIsShare, folderId }) {
  const handleClose = () => setIsShare(!isShare);
  return (
    <>
      {isShare && (
        <StyledBackground onClick={() => handleClose()}>
          <StyledContainer onClick={(e) => e.stopPropagation()}>
            <StyledDiv>
              <CloseButton onClick={() => handleClose()} />
              <TitleContainer>
                <Title>폴더 공유</Title>
                <FolderText>폴더명</FolderText>
              </TitleContainer>
              <ShareContainer>
                <KaKaoShareButton
                  src={kakaoShareImg}
                  alt="kakao-share"
                  text="카카오톡"
                  folderId={folderId}
                />
                <FacebookShareBtn
                  src={facebookShareImg}
                  alt="facebook-share"
                  text="페이스북"
                  folderId={folderId}
                />
                <ShareImgButton>
                  <ShareImg src={linkShareImg} alt="link-share" />
                  <ShareText>링크 복사</ShareText>
                </ShareImgButton>
              </ShareContainer>
            </StyledDiv>
          </StyledContainer>
        </StyledBackground>
      )}
    </>
  );
}

export default ModalShare;
