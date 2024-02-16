import styled from 'styled-components';

const GradientButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: var(--color-white);
  font-size: 1rem;
  text-decoration: none;
  background: linear-gradient(
    to right,
    ${props => props.$startColor || 'var(--color-primary)'},
    ${props => props.$endColor || '#6ae3fe'}
  );
  border-radius: 8px;
  cursor: pointer;
`;
export default GradientButton;
