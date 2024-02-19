import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  color: #9fa6b2;
  font-size: 0.875rem;
  font-weight: 600;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;
