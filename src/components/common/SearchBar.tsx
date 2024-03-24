import styled from 'styled-components';
import iconSearch from '../../assets/search.svg';
import TextInput from '../pages/folderPage/TextInput';
import { ChangeEvent } from 'react';

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  padding: 1.5rem 1.6rem;
  width: 100%;
  border-radius: 1rem;
  background-color: var(--color-gray-100);

  &::before {
    content: '';
    display: block;
    margin-right: 1rem;
    min-width: 1.6rem;
    min-height: 1.6rem;
    background: url(${iconSearch}) no-repeat center/contain;
  }

  @media (max-width: 767px) {
    margin-bottom: 3.2rem;
    padding: 1.3rem 1.6rem;

    &::before {
      margin-right: 0.6rem;
    }
  }
`;

const CloseButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
`;

interface SearchBarProps {
  searchString: string;
  onChangeSearchString: (e: ChangeEvent<HTMLInputElement>) => void;
  onResetSearchString: () => void;
}

const SearchBar = ({ searchString, onChangeSearchString, onResetSearchString }: SearchBarProps) => (
  <InputGroup>
    <TextInput type="text" value={searchString} onChange={onChangeSearchString} placeholder="링크를 검색해 보세요" />
    {searchString !== '' && (
      <CloseButton onClick={onResetSearchString}>
        <img src="./src/assets/close.png" />
      </CloseButton>
    )}
  </InputGroup>
);

export default SearchBar;
