import React from "react";
import styled from "styled-components";
const IconsContainer = styled.div`
  display: flex;
  gap: 32px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

function SocialIcons() {
  return (
    <IconsContainer>
      <IconContainer>
        <IconImage src="/Icons/kakao.png" />
        <IconText>카카오톡</IconText>
      </IconContainer>
      <IconContainer>
        <IconImage src="/Icons/facebook.png" />
        <IconText>페이스북</IconText>
      </IconContainer>
      <IconContainer>
        <IconImage src="/Icons/link.png" />
        <IconText>링크 복사</IconText>
      </IconContainer>
    </IconsContainer>
  );
}

export default SocialIcons;
