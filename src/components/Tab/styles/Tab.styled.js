import styled from 'styled-components';

export const StyledTab = styled.button`
  background-color: var(--color-white);
  border-radius: 5px;
  border: 1px solid var(--color-primary);
  color: #000000;
  padding: 8px 12px;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;
