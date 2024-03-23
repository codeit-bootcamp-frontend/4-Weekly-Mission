import { styled } from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/icon/search.svg';

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

interface SearchBarProps {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

function SearchBar({ placeholder, value, onChange, style }: SearchBarProps) {
  return (
    <Styled.Container style={style}>
      <SearchIcon />
      <Styled.Input type="text" value={value} placeholder={placeholder} onChange={onChange}></Styled.Input>
    </Styled.Container>
  );
}

export default SearchBar;
