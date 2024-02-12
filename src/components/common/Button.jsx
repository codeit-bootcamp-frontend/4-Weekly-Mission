import styled from 'styled-components';

/**
 * @param {object} props
 * @param {node} children
 * @param { func } onClick 버튼 클릭 이벤트
 * @param { boolean } disabled 버튼 활성화 여부
 * @param { string } className
 */
const Button = ({ children, onClick, disabled, className }) => {
  return (
    <StyledButton
      className={className}
      disabled={disabled}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
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
  cursor: pointer;
  background-image: linear-gradient(
    135deg,
    ${props => props.theme.primary_color} 0%,
    #6ae3fe 100%
  );
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.4rem;
  font-weight: 600;

  @media (min-width: 768px) {
    height: 5.4rem;
    border-radius: 0.8rem;
    font-size: 1.8rem;
  }

  &.login {
    width: 8rem;

    @media (min-width: 768px) {
      width: 12.8rem;
    }
  }
`;
export default Button;
