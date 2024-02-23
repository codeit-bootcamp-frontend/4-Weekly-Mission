import styled from 'styled-components';

const Button = styled.button`
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border: none;
  border-radius: ${({ fontSize }) => fontSize / 2 || 8}px;
  color: var(--color-gray-light);
  cursor: pointer;
  font-family: Pretendard;
  font-size: ${({ fontSize }) => fontSize || 16}px;
  font-style: normal;
  font-weight: 600;
  padding-top: ${({ fontSize }) => fontSize * 0.75 || 12}px;
  padding-right: ${({ fontSize }) => fontSize || 16}px;
  padding-bottom: ${({ fontSize }) => fontSize * 0.75 || 12}px;
  padding-left: ${({ fontSize }) => fontSize || 16}px;
  white-space: nowrap;
`;

export default Button;
