import { useEffect } from 'react';
import styled from 'styled-components';
import closeIcon from '../image/close.svg';
import kakaoIcon from '../image/Kakao.svg';
import facebookIcon from '../image/Facebook.svg';
import linkIcon from '../image/link.svg';

const IconColor = {
  kakao: '#fee500',
  facebook: '#1877f2',
  link: 'rgba(157, 157, 157, 0.04)',
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Container = styled.div`
  display: inline-flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Stroke-light, #dee2e6);
  background: var(---Gray-White, #fff);
  .close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  .title {
    color: var(--Linkbrary-gray100, #373740);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .main {
    color: var(--Linkbrary-gray60, #9fa6b2);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;
const ShareContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  .shareImgSection {
    display: flex;
    padding: 12px;
    width: 42px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 37.333px;
    background: ${(props) => IconColor[props.color]};
    .link {
      width: 18px;
      height: 18px;
    }
  }
  .shareInfoSection {
    color: var(--Linkbrary-gray100, #373740);
    width: 100%;
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
  }
`;
const { Kakao } = window;
function Share({ title, main, onClose, currentFolderId }) {
  const shareUrl = `${window.location.origin}/shared/${currentFolderId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).catch((err) => {
      console.error('클립보드 복사에 실패했습니다.', err);
    });
  };
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('08985770502e02f6ac12635e2f81df30');
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'text',
      text: '세상에 모든 정보를 쉽게 저장하고 관리해보세요',
      link: {
        mobileWebUrl: 'shareUrl',
        webUrl: 'shareUrl',
      },
    });
  };

  const shareFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookShareUrl, '_blank');
  };

  return (
    <Background>
      <Container>
        <img className="close" src={closeIcon} alt="closeButton" onClick={onClose}></img>
        <TitleContainer>
          <span className="title">{title}</span>
          <span className="main">{main}</span>
        </TitleContainer>
        <ShareContainer>
          <LinkContainer color={'kakao'} onClick={shareKakao}>
            <div className="shareImgSection">
              <img src={kakaoIcon} alt="kakaoIcon"></img>
            </div>
            <span className="shareInfoSection">카카오톡</span>
          </LinkContainer>
          <LinkContainer color={'facebook'} onClick={shareFacebook}>
            <div className="shareImgSection">
              <img src={facebookIcon} alt="facebookIcon"></img>
            </div>
            <span className="shareInfoSection">페이스북</span>
          </LinkContainer>
          <LinkContainer color={'link'} onClick={copyToClipboard}>
            <div className="shareImgSection">
              <img className="link" src={linkIcon} alt="linkIcon"></img>
            </div>
            <span className="shareInfoSection">링크 복사</span>
          </LinkContainer>
        </ShareContainer>
      </Container>
    </Background>
  );
}

export default Share;
