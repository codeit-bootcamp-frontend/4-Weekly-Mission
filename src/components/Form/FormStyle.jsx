import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const Title = styled.div`
  color: var(--black, #000);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Logo = styled.img`
  width: 210.583px;
  height: 38px;
`;

export const TitleBox = styled.div`
  display: flex;
`;

export const TitleText = styled.div`
  color: var(--black, #000);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const TitleLink = styled.div`
  color: var(--Linkbrary-primary-color, #6d6afe);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Error = styled.div`
  color: var(--Linkbrary-red, #ff5b56);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const BoxIcon = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const Icon = styled.img`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
`;
