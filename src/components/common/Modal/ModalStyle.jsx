import styled from "styled-components";

export const Background = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  padding: 32px 40px;
  gap: 8px;

  border-radius: 15px;
  border: 1px solid var(--Stroke-light, #dee2e6);
  background: var(---Gray-White, #fff);
`;

export const Title = styled.h1`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Input = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
`;

export const Text = styled.p`
  color: var(--Linkbrary-gray60, #9fa6b2);
  padding-bottom: 24px;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

export const IconBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const CloseButton = styled.img`
  width: 24px;
  height: 24px;

  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 5;
`;
