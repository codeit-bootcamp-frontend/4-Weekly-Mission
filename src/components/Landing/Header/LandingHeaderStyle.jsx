import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  padding: 70px 360px 0px 360px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Title = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px; /* 125% */
`;

export const Gradient = styled.span`
  background: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Image = styled.img`
  width: 1118px;
  height: 659px;
  flex-shrink: 0;

  border-radius: 25px;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 67.68%,
    #f0f6ff 94.76%
  );
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;
