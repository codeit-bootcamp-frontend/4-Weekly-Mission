import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 120px 0;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 157px;
`;

export const Box = styled.div`
  display: flex;
  width: 291px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const Title = styled.h2`
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const Gradient = styled.span`
  background: linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Text = styled.p`
  color: #6b6b6b;

  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

export const Image = styled.img`
  width: 550px;
  height: 450px;
  border-radius: 15px;
`;
