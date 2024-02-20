import styled from 'styled-components';

export const Button = styled.button`
  padding: ${({ $padding }) => $padding || '16px 20px'};
  width: ${({ width }) => width};
  background-image: linear-gradient(90deg, var(--primary) 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: ${({ fontSize }) => fontSize || '1.8rem'};
  font-weight: 600;
  white-space: nowrap;
`;
