import React from "react";
import { styled } from "styled-components";
import { BlueButton } from "./../common/BlueButton";

export const Headline = () => {
  return (
    <Container>
      <TextBox>
        <HeadlineText>
          <Strong>세상의 모든 정보</Strong>를<br />
          쉽게 저장하고 <LineBreak />
          관리해 보세요.
        </HeadlineText>
      </TextBox>
      <BlueButton
        text="링크 추가하기"
        width={350}
        marginY={40}
        paddingY={16}
        paddingX={20}
        fontSize={18}
        radius={8}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.p`
  width: 100%;
  height: 180px;
  text-align: center;
`;

const HeadlineText = styled.span`
  font-size: 64px;
  font-weight: 700;
`;

const Strong = styled(HeadlineText)`
  background: linear-gradient(90deg, #6d6afe, #ff9f9f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LineBreak = styled.br`
  display: none;
`;
