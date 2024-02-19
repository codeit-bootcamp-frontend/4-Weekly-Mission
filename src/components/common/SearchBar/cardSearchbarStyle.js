import styled from 'styled-components';
import searchIcon from '../../../assets/icons/search.svg';

export const SearchBar = styled.form`
  position: relative;
  display: flex;
  width: 80%;
  margin: 1rem auto;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.9375rem 40px 0.9375rem 2.5rem;
  border: none;
  border-radius: 0.625rem;
  background: #f5f5f5 url(${searchIcon}) no-repeat 1rem center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #333;
  outline: none;

  &:focus {
    outline: none;
  }
`;

export const VisuallyHiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
`;
