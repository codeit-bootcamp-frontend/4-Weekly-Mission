import styled from 'styled-components';
import { Button } from './common';
import { COLOR } from '../color';

export const FolderDataWrapper = styled.div`
  margin: ${(props) => (props.fold ? '20px 0px 60px' : '60px 0px 90px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 767px) {
    margin: ${(props) => (props.fold ? '10px 0px 40px' : '24px 32px 40px')};
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
