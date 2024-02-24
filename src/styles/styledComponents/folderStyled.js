import styled from 'styled-components';
import { Button } from './common';
import { COLOR } from '../color';
import Add from '../../assets/Images/add.png';
import Add2 from '../../assets/Images/add2.png';

export const Wrapper = styled.div`
  position: relative;
`;
export const FolderDataWrapper = styled.div`
  padding: ${(props) => (props.fold ? '20px 0px 60px' : '60px 0px 90px')};
  background-color: #f0f6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 767px) {
    padding: ${(props) => (props.fold ? '10px 0px 40px' : '24px 32px 40px')};
  }
`;

export const LinkForm = styled.form`
  position: relative;
`;

export const LinkAddInput = styled.input`
  width: 800px;
  height: 69px;
  border-radius: 15px;
  border: 1px solid ${COLOR.Primary};
  padding: 16px 20px 16px 52px;
  font-size: 16px;

  @media (max-width: 1199px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 325px;
    height: 53px;
    padding: 8px 36px;
    font-size: 14px;
  }
`;

export const Icon = styled.img`
  position: absolute;
  left: 20px;
  top: 25px;
  width: 20px;
  height: 20px;

  @media (max-width: 767px) {
    top: 20px;
    left: 12px;
    width: 16px;
    height: 16px;
  }
`;

export const LinkAddButton = styled(Button)`
  position: absolute;
  width: 80px;
  height: 37px;
  border-radius: 8px;
  right: 20px;
  top: 16px;
  padding: 10px 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.71px;
  border: 0;

  @media (max-width: 767px) {
    right: 12px;
    top: 8px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin: 40px auto 0;

  @media (max-width: 1199px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 325px;
    flex-direction: column;
    gap: 12px;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  gap: 8px;
`;

export const CategoryButton = styled.button`
  border-radius: 5px;
  height: 39px;
  border: 1px solid #6d6afe;
  background-color: ${({ checked }) => (checked ? COLOR.Primary : COLOR.White)};
  color: ${({ checked }) => (checked ? COLOR.White : COLOR.Black)};
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 400;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${({ checked }) => (checked ? COLOR.Primary : '#e7effb')};
  }
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95px;
  height: 39px;
  gap: 4px;
  cursor: pointer;
  z-index: 2;
  @media (max-width: 767px) {
    position: fixed;
    width: 130px;
    bottom: 101px;
    left: calc(50vw - 63px);
    background-color: ${COLOR.Primary};
    border-radius: 20px;
    padding: 8px 24px;
  }
`;

export const AddButtonText = styled.p`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.3px;
  color: ${COLOR.Primary};

  @media (max-width: 767px) {
    color: ${COLOR.White};
  }
`;

export const AddButtonImage = styled.div`
  width: 19px;
  height: 19px;
  background-image: url(${Add});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 767px) {
    background: url(${Add2});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const CategoryName = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 28.8px;
  letter-spacing: -0.3px;
  text-align: left;
`;

export const FolderOptionWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const OptionButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
  cursor: pointer;
`;

export const OptionIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${({ $url }) => $url});
  background-size: cover;
`;

export const OptionText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 16.71px;
  color: ${COLOR.Gray2};

  @media (max-width: 1199px) {
    display: none;
  }
`;

export const NonLink = styled.div`
  width: 1060px;
  margin-top: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  @media (max-width: 1199px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 325px;
  }
`;

export const ModalBackground = styled.div`
  display: ${({ $modalStatus }) => ($modalStatus ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  top: 0;
  left: 0;
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 360px;
  height: auto;
  padding: 32px 40px;
  gap: 24px;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccd5e3;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const AddModalWrapper = styled.div`
  display: flex;
  height: ${({ $overscroll }) => ($overscroll === 'true' ? `172px` : 'auto')};
  width: 280px;
  flex-direction: column;
  gap: 4px;
  overflow: auto;
`;

export const AddModalFolderButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 400;
  border-radius: 8px;
  padding: 8px;
  height: 40px;
  background-color: ${({ checked }) => (checked ? `#f0f6ff` : '#ffffff')};

  &:hover {
    background-color: #f0f6ff;
  }
`;

export const AddModalButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
export const AddModalFolderName = styled.p`
  font-size: 16px;
  color: #373740;
  line-height: 24px;
`;

export const AddModalLinkNumber = styled.p`
  font-size: 14px;
  line-height: 16.71px;
  color: #9fa6b2;
`;

export const AddModalCheckImg = styled.img`
  width: 14px;
  height: 14px;
`;

export const ModalInput = styled.input`
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  background-color: #ffffff;
  font-size: 16px;
  line-height: 24px;
  color: #9fa6b2;
  padding: 18px 15px;
  width: 281px;

  &:focus {
    outline: none;
    border: 1.5px solid #6d6afe;
  }
`;

export const BlueButton = styled.button`
  width: 280px;
  padding: 16px 20px;
  border-radius: 8px;
  border: 0;
  background-image: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  font-size: 16px;
  font-weight: 600;
  color: #f5f5f5;
`;

export const ModalSideHeader = styled.div`
  color: #9fa6b2;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  width: 100%;
`;

export const RedButton = styled.a`
  width: 280px;
  padding: 16px 20px;
  border-radius: 8px;
  background: #ff5b56;
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const ModalSharingicons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;
export const ModalSharingicon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
export const ModalSharingName = styled.div`
  color: #373740;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px; /* 115.385% */
`;

export const ModalTitie = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 23.87px;
  color: #373740;
  text-align: center;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
