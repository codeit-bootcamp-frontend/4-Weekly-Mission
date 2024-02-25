import styled from 'styled-components';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import Button from '../../common/Button/Button';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 2rem 2.5rem;
  border-radius: 0.9375rem;
  border: 1px solid #ccd5e3;
  width: 22.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const ModalHeader = styled.h1`
  color: #373740;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CloseIcon = styled(Close)`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const ModalBody = styled.p`
  color: #9fa6b2;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const StyledRedButton = styled(Button)`
  width: 17.5rem;
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 0.5rem;
  background: #ff5b56;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
`;

export const StyledGradientButton = styled(Button)`
  width: 17.5rem;
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 0.5rem;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
`;

export const StyledList = styled.ul`
  width: 100%;
  list-style: none;
  margin: 1rem 0;
  background: #fff;
`;

export const StyledListItem = styled.li`
  padding: 10px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  &:hover {
    border-radius: 8px;
    background-color: #f0f6ff;
  }
  &.selected {
    background-color: #f0f6ff;
  }
`;

export const CheckIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: auto;
  display: none;

  ${StyledListItem}.selected & {
    display: block;
  }
`;
