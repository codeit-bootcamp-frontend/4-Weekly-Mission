import styled from 'styled-components';

export const SearchLayout = styled.div`
  background: var(--color-white);
  border: 1px solid var(--color-primary);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  gap: 16px;
`;

export const SearchInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 100%;

  &::placeholder {
    color: var(--color-gray-60);
  }
`;
