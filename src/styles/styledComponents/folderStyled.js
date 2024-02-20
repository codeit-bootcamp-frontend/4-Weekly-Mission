import styled from 'styled-components';
import { Button } from './common';
import { COLOR } from '../color';
import Add from '../../assets/Images/add.png';
import Add2 from '../../assets/Images/add2.png';

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
