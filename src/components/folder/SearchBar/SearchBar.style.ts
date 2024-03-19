import styled from 'styled-components';
import FONT from '@/styles/font';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 15px 16px 15px 50px;
  ${FONT.REGULAR_16};
  color: #666666;
  background-color: #f5f5f5;
  border: 0;
  outline: none;
`;

export const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 19px;
  left: 20px;
`;
