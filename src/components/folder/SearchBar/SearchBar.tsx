import { useState } from 'react';
import {
  Wrapper,
  SearchInput,
  SearchIcon,
  DeleteButton,
} from './SearchBar.style';

interface Props {
  topic?: string;
  changeTopic?: (value: string) => void;
}

const SearchBar = ({ topic, changeTopic }: Props) => {
  const [link, setLink] = useState(topic);
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (changeTopic) {
      changeTopic(e.target.value);
    }
    setLink(e.target.value);
  };

  const clickDeleteButton = () => {
    if (changeTopic) {
      changeTopic('');
    }
    setLink('');
  };
  return (
    <Wrapper>
      <SearchInput
        placeholder="링크를 검색해 보세요"
        onChange={changeInput}
        value={link}
      />
      <SearchIcon src="/images/Search.svg" alt="검색" width={16} height={16} />
      {link && (
        <DeleteButton
          src="/images/searchDelete.svg"
          alt="delete"
          width={24}
          height={24}
          onClick={clickDeleteButton}
        />
      )}
    </Wrapper>
  );
};

SearchBar.defaultProps = {
  topic: '',
  changeTopic: () => {},
};

export default SearchBar;
