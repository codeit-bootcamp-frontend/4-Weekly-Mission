import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchBarDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  border-radius: 8px;
  background: #f5f5f5;
  padding: 1rem;
  margin: 3rem 0rem;
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
