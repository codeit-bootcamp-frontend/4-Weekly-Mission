import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import ColorBox from '../common/ColorBox/ColorBox.styles';

export const SearchBarDiv = styled(ColorBox)`
  border: none;
`;

export const SearchBarFaSearch = styled(FaSearch)`
  font-size: 1.2rem;
  color: #666666;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  outline: none;
  background: #f5f5f5;
  font-size: 1.2rem;
`;
