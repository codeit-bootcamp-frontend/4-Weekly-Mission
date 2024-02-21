import styled from 'styled-components';

const ColorBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding: 1rem;
  margin: 0.6rem 0;
  background: #f5f5f5;
  border: 0.1rem solid ${props => props.$borderColor || 'var(--color-primary)'};
  border-radius: 8px;
`;

export default ColorBox;
