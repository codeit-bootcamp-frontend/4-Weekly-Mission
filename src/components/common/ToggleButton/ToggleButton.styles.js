import styled from 'styled-components';

export const ToggleButtonLayout = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ToggleButtonButton = styled.button`
  cursor: pointer;
  background: none;
`;

export const ToggleButtonItemBox = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 5px rgb(0 0 0 / 30%);
`;

export const ToggleButtonItem = styled.li`
  z-index: 1;
  width: 5.4rem;
  padding: 0.4rem;
  white-space: nowrap;
  background: var(--color-white);

  &:hover {
    z-index: 1;
    color: var(--color-primary);
    background: var(--color-gray-200);
  }
`;
