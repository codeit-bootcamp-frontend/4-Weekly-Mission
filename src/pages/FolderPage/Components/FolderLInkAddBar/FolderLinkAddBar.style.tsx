import styled from "styled-components";
import { PrimaryButton } from "../../../../Components/PrimaryButton";

export const FolderLinkAddBarWrapper = styled.div<{ $isHidden: boolean }>`
  position: ${({ $isHidden }) => ($isHidden ? "fixed" : "relative")};
  padding: ${({ $isHidden }) => ($isHidden ? "24px 0" : "60px 0 90px")};
  width: 100%;
  bottom: 0;
  background-color: var(--lb-background);
  z-index: 1;

  @media (max-width: 767px) {
    padding: ${({ $isHidden }) => ($isHidden ? "16px 0" : "24px 0 40px")};
  }
`;

export const Form = styled.form`
  display: flex;
  position: relative;
  align-items: center;

  width: 80rem;
  margin: auto;

  background-color: var(--lb-background);

  @media (max-width: 1124px) {
    max-width: 70.4rem;
  }

  @media (max-width: 767px) {
    max-width: 32.5rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  background-image: url("link.svg");
  height: 2rem;
  width: 2rem;
  margin-left: 2rem;
  background-size: cover;

  @media (max-width: 767px) {
    height: 1.6rem;
    width: 1.6rem;
    margin-left: 1rem;
  }
`;

export const Input = styled.input`
  color: var(--lb-gray60);
  border: 0.1rem solid var(--lb-primary-color);
  width: 100%;
  border-radius: 1.5rem;
  padding: 1.6rem 2rem;
  padding-left: 5.2rem;
  padding-right: 10.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;

  &:focus {
    outline-color: var(--lb-primary-color);
  }

  @media (max-width: 767px) {
    height: 5.3rem;
    padding: 0.8rem 1rem;
    padding-left: 3.4rem;
    padding-right: 10.8rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Button = styled(PrimaryButton)`
  font-family: pretendard;
  position: absolute;
  margin-left: calc(100% - 10.1rem);
  margin-right: 2rem;
  width: 8.1rem;
  color: var(--lb-light-gray);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 1rem 1.6rem;

  @media (max-width: 767px) {
    margin-left: calc(100% - 9.1rem);
    margin-right: 2rem;
    width: 8.1rem;
    color: var(--lb-light-gray);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 1rem 1.6rem;
  }
`;
