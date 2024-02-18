import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import ColorBox from '../common/ColorBox/ColorBox.styles';

export const SearchBarDiv = styled(ColorBox)`
  border: none;
`;

export const SearchBarFaSearch = styled(FaSearch)`
  font-size: 1.2rem;
  color: #666;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  background: #f5f5f5;
  outline: none;
`;
