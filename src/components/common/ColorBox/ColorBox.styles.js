import styled from 'styled-components';

const ColorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: #f5f5f5;
  border: 0.1rem solid ${props => props.$borderColor || 'var(--color-primary)'};
  border-radius: 8px;
  padding: 1rem;
  margin: 2rem 0rem;
`;

export default ColorBox;
