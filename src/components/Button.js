import styled from 'styled-components';
import '../css/palette.css';

const Button = styled.button`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  background-color: var(--white);
  border: 1px solid var(--primary);
  border-radius: 5px;
  padding: 8px 12px;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    background: var(--primary);
    color: var(--white);
  }
`;

export default Button;