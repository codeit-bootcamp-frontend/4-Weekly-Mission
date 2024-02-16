import { styled } from 'styled-components';

import searchIcon from 'assets/icon/search.svg';

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 5.4rem;
    padding: 1.5rem 1.6rem;

    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    border-radius: 1rem;
    background-color: #f5f5f5;
  `,

  Input: styled.input`
    width: calc(100% - 1.6rem - 1.6rem);
    height: 100%;
    border: none;
    background: transparent;

    ::placeholder {
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.color.addition};
    }
  `,
};

function SearchBar({ placeholder, value, onChange, style }) {
  return (
    <Styled.Container style={style}>
      <img src={searchIcon} alt="검색 아이콘" />
      <Styled.Input type="text" value={value} placeholder={placeholder} onChange={onChange}></Styled.Input>
    </Styled.Container>
  );
}

export default SearchBar;
