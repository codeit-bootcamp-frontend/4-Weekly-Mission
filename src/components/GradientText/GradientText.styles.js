import styled from 'styled-components';

const GradientText = styled.span`
  color: transparent;
  background: linear-gradient(
    to right,
    ${props => props.$startColor || 'var(--color-primary)'},
    ${props => props.$endColor || '#ff9f9f'}
  );
  background-clip: text;
`;

export default GradientText;
