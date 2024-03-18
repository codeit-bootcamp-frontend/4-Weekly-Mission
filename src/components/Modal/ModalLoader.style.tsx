import styled from "styled-components";

export const ModalBackground = styled.div`
  display: flex;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalTitle = styled.h1`
  color: var(--LBrary-Gray100);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
`;

export const ModalCaption = styled.span`
  color: var(--Linkbrary-gray60, #9fa6b2);
  margin-top: 8px;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

export const ModalWrapper = styled.section`
  max-width: 360px;
  text-align: center;
  background-color: white;
  border-radius: 15px;
  padding: 32px 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalInput = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background-color: var(--Linkbrary-white, #fff);

  & :focus {
    outline-color: var(--Linkbrary-primary-color, #6d6afe);
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const ModalButton = styled.button<{ $errored?: boolean }>`
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  border: none;
  margin-top: 15px;
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${({ $errored }) =>
    $errored === true
      ? "var(--Linkbrary-red, #ff5b56)"
      : "linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)"};
`;

export const ShareButtonLayout = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  margin-bottom: 24px;
`;
