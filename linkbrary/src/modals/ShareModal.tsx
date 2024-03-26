import React from "react";
import styled from "styled-components";

interface ShareModalProps {
  menusId?: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ menusId }) => {
  const shareKakao = () => {
    // window 객체에 Kakao 타입 정의 필요
    if ((window as any).Kakao) {
      const kakao = (window as any).Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("ac53ae0f1cac43ca6e9eb556442de62d");
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "Linkbrary",
          description: "",
          imageUrl: "/assets/linkbrary.svg",
          link: {
            mobileWebUrl: `http://localhost:3000/shared/${menusId}`,
            webUrl: `http://localhost:3000/shared/${menusId}`,
          },
        },
        buttons: [
          {
            title: "자세히 보러 가기",
            link: {
              mobileWebUrl: `http://localhost:3000/shared/${menusId}`,
              webUrl: `http://localhost:3000/shared/${menusId}`,
            },
          },
        ],
      });
    }
  };

  const shareFacebook = () => {
    const sharedLink = encodeURIComponent(
      `http://localhost:3000/shared/${menusId}`
    );
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(`http://localhost:3000/shared`);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ShareContent className="modal-share-content">
      <ShareArea>폴더명</ShareArea>
      <ShareSns>
        <div>
          <KakaoIcon onClick={shareKakao}>
            <img src="/assets/kakao.svg" alt="카카오톡 공유" />
          </KakaoIcon>
          <ShareApp>카카오톡</ShareApp>
        </div>

        <div>
          <FacebookIcon onClick={shareFacebook}>
            <img src="/assets/facebook.svg" alt="페이스북 공유" />
          </FacebookIcon>
          <ShareApp>페이스북</ShareApp>
        </div>
        <div>
          <ShareIcon onClick={handleCopyClipBoard}>
            <img src="/assets/link.svg" alt="링크 복사" />
          </ShareIcon>
          <ShareApp>링크 복사</ShareApp>
        </div>
      </ShareSns>
    </ShareContent>
  );
};

const ShareContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 8px;
  gap: 1.5rem;
`;

const ShareArea = styled.div`
  color: #9fa6b2;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`;

const ShareSns = styled.div`
  display: flex;
  gap: 2rem;
`;

const ShareApp = styled.div`
  margin-top: 10px;
  text-align: center;
`;
const Icons = styled.button`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 90px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const KakaoIcon = styled(Icons)`
  background: #fee500;
`;

const FacebookIcon = styled(Icons)`
  background: #1877f2;
`;

const ShareIcon = styled(Icons)`
  background: rgba(157, 157, 157, 0.04);
`;
export default ShareModal;
