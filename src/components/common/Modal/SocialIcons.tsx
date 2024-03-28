import React, { useEffect } from "react";
import styled from "styled-components";
const IconsContainer = styled.div`
  display: flex;
  gap: 32px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

const IconImage = styled.img`
  width: 42px;
  height: 42px;
`;

const IconText = styled.span`
  font-size: 13px;
  font-weight: 400;
  text-align: center;
`;

declare global {
  interface Window {
    kakao: any;
  }
}

function SocialIcons({ id }: { id: number | null }) {
  const shareUrl = `${window.location.origin}/shared/${id}`;

  const { Kakao }: any = window;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    window.kakao.isInitialized();
  }, []);

  const handleKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkbrary",
        description: "세상의 모든 정보를 쉽게 관리해보세요",
        imageUrl: "",
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).catch(err => {
      console.error("클립보드 복사에 실패했습니다.", err);
    });
  };

  const shareFacebook = () => {
    window.open(
      `http://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    );
  };

  return (
    <IconsContainer onClick={handleKakao}>
      <IconContainer>
        <IconImage src="/Icons/kakao.png" />
        <IconText>카카오톡</IconText>
      </IconContainer>
      <IconContainer onClick={shareFacebook}>
        <IconImage src="/Icons/facebook.png" />
        <IconText>페이스북</IconText>
      </IconContainer>
      <IconContainer onClick={copyToClipboard}>
        <IconImage src="/Icons/link.png" />
        <IconText>링크 복사</IconText>
      </IconContainer>
    </IconsContainer>
  );
}

export default SocialIcons;
