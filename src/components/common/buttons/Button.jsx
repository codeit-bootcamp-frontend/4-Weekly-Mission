import styled from 'styled-components';

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param { React.MouseEventHandler<HTMLButtonElement> } props.onClick 버튼 클릭 이벤트
 * @param { boolean } props.disabled 버튼 활성화 여부
 * @param { string } props.className
 * @param { string } props.type
 */
const Button = ({
  children,
  onClick,
  disabled,
  className,
  type = 'button',
}) => {
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.7rem;
  background-image: linear-gradient(
    135deg,
    ${props => props.theme.primary} 0%,
    #6ae3fe 100%
  );
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.4rem;
  font-weight: 600;

  &.login {
    width: 8rem;

    @media (min-width: 768px) {
      width: 12.8rem;
    }
  }

  &.folderLink {
    padding: 1rem 1.6rem;
  }

  &.modal {
    height: 5.1rem;
    padding: 1.6rem 2rem;
  }
`;
export default Button;
