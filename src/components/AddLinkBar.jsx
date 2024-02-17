import { styled } from 'styled-components';

import linkBarIcon from 'assets/icon/linkBar.svg';
import Button from './common/button/Button';

const Styled = {
  Container: styled.div`
    max-width: 80rem;
    padding: 1.6rem 2rem;
    border: 1px solid ${({ theme }) => theme.color.primary};
    border-radius: 1.5rem;
    background-color: ${({ theme }) => theme.color.white};

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
  `,

  Input: styled.input`
    width: calc(100% - 1.6rem - 1.6rem);
    height: 100%;
    border: none;
    background: transparent;

    font-size: 1.6rem;
    line-height: 2.4rem;

    ::placeholder {
      color: ${({ theme }) => theme.color.addition};
    }
  `,
};

function AddLinkBar({ style, value, placeholder, onChange }) {
  return (
    <Styled.Container style={style}>
      <img src={linkBarIcon} alt="링크 추가 바 아이콘" />
      <Styled.Input type="text" value={value} placeholder={placeholder} onChange={onChange}></Styled.Input>
      <Button style={{ padding: '1rem 1.6rem' }}>추가하기</Button>
    </Styled.Container>
  );
}

export default AddLinkBar;
