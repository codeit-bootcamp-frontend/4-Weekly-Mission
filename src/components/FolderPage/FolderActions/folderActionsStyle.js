import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;
