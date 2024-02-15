import { styled } from 'styled-components';

const Styled = {
  Button: styled.button`
    width: 12.8rem;
    padding: 1.6rem 2rem;
    border-radius: 0.8rem;
    background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.white};
  `,
};

// 현재: 로그인 버튼 -> 추후 : 공통 로그인버튼으로 변경
function Button() {
  return <Styled.Button type="button">로그인</Styled.Button>;
}

export default Button;
