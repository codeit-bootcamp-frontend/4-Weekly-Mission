import styled from "styled-components";

const ButtonContainer = styled.button`
  padding: 13px 32px;

  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border-radius: 8px;
  border: none;
  color: var(--color-white);
`;
const Button = ({ children, className = null }) => {
  return <ButtonContainer className={className}>{children}</ButtonContainer>;
};

export default Button;
