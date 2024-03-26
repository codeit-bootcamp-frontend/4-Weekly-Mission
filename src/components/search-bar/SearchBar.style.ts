import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 1.5rem 1.6rem;
  & input {
    width: 100%;
    background-color: #f5f5f5;
    border: none;
  }
  & input::placeholder {
    color: #666;
  }
`;
