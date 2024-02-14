import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: var(--color-white);
  font-size: 1rem;
  text-decoration: none;
  background: linear-gradient(to right, ${props => props.$startColor}, ${props => props.$endColor});
  border-radius: 8px;
  cursor: pointer;
`;
export default StyledButton;
