import styled from 'styled-components';

const StyledText = styled.span`
  color: transparent;
  background: linear-gradient(to right, ${props => props.$startColor}, ${props => props.$endColor});
  background-clip: text;
`;

export default StyledText;
