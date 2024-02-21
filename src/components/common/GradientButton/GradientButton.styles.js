import styled from 'styled-components';

const GradientButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1rem;
  color: var(--color-white);
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${props => props.$startColor || 'var(--color-primary)'},
    ${props => props.$endColor || '#6ae3fe'}
  );
  border-radius: 8px;
`;
export default GradientButton;
