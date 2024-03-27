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
  color: var(--lb-gray100);
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2.4rem;
`;

export const ModalCaption = styled.span`
  color: var(--lb-gray60);
  margin-top: 0.8rem;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
`;

export const ModalWrapper = styled.section`
  max-width: 36rem;
  text-align: center;
  background-color: var(--lb-white);
  border-radius: 15px;
  padding: 3.2rem 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalInput = styled.input`
  display: flex;
  width: 280px;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid var(--lb-primary-color);
  background-color: var(--lb-white);

  & :focus {
    outline-color: var(--lb-primary-color);
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const ModalButton = styled.button<{ $errored?: boolean }>`
  color: var(--lb-light-gray);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  border: none;
  margin-top: 1.5rem;
  display: flex;
  width: 28rem;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: ${({ $errored }) =>
    $errored === true
      ? "var(--lb-red)"
      : "linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)"};
`;

export const ShareButtonLayout = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;
