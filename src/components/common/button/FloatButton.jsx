import { styled } from 'styled-components';
import addIcon from 'assets/icon/add.svg';

const Styled = {
  Button: styled.button`
    position: fixed;
    bottom: 10.1rem;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    padding: 0.8rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.color.primary};

    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.gray2};

    @media (min-width: 768px) {
      display: none;
    }
  `,

  Icon: styled.img`
    width: 1.6rem;
    height: 1.6rem;
  `,
};

// 공통 플로팅 컴포넌트로 변경 필요
function FloatButton({ children, ...htmlButtonProps }) {
  return (
    <Styled.Button {...htmlButtonProps}>
      <div>{children}</div>
      <Styled.Icon src={addIcon} alt="플로팅 버튼" />
    </Styled.Button>
  );
}

export default FloatButton;
