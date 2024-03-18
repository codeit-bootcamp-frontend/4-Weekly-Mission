import styled from "styled-components";
import { PrimaryButton } from "../PrimaryButton";

export const FolderLinkAddBarWrapper = styled.div`
  background-color: var(--LBrary-Background);
`;

export const Form = styled.form`
  display: flex;
  position: relative;
  align-items: center;

  width: 800px;
  margin: auto;
  padding: 60px 0 90px;
  background-color: var(--LBrary-Background);

  @media (max-width: 1124px) {
    max-width: 704px;
  }

  @media (max-width: 767px) {
    max-width: 325px;
  }
`;

export const Label = styled.label`
  position: absolute;
  background-image: url("link.svg");
  height: 20px;
  width: 20px;
  margin-left: 20px;
  background-size: cover;

  @media (max-width: 767px) {
    height: 16px;
    width: 16px;
    margin-left: 10px;
  }
`;

export const Input = styled.input`
  color: var(--LBrary-Gray60);
  border: 1px solid var(--LBrary-Primary-color);
  width: 100%;
  border-radius: 15px;
  padding: 16px 20px;
  padding-left: 52px;
  padding-right: 108px;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;

  &:focus {
    outline-color: var(--LBrary-Primary-color);
  }

  @media (max-width: 767px) {
    height: 53px;
    padding: 8px 10px;
    padding-left: 34px;
    padding-right: 108px;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Button = styled(PrimaryButton)`
  font-family: pretendard;
  position: absolute;
  margin-left: calc(100% - 101px);
  margin-right: 20px;
  width: 81px;
  color: var(--LBrary-GrayLight);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 10px 16px;

  @media (max-width: 767px) {
    margin-left: calc(100% - 91px);
    margin-right: 20px;
    width: 81px;
    color: var(--LBrary-GrayLight);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 10px 16px;
  }
`;
