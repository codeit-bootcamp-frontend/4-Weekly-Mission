import styled from 'styled-components';
import FONT from '@/styles/font';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 15px 50px 15px 50px;
  ${FONT.REGULAR_16};
  color: #666666;
  background-color: #f5f5f5;
  border: 0;
  outline: none;

  @media (max-width: 767px) {
    padding-right: 40px;
  }
`;

export const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 19px;
  left: 20px;
`;

export const DeleteButton = styled.img`
  position: absolute;
  top: 15px;
  right: 12px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:hover {
    filter: brightness(105%);
  }

  @media (max-width: 767px) {
    width: 16px;
    height: 16px;
    top: 20px;
  }
`;
