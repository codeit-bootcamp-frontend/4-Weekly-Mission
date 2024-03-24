import { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import styles from '../css/SearchBar.module.css';
import {ReactComponent as CloseIcon} from '../images/Icon_close.svg';
import {ReactComponent as SearchIcon} from '../images/Icon_search.svg';

interface Props {
  inputValue: string;
  searchWord: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onSubmit: (searchQuery: string) => void;
}

function SearchBar({ inputValue, searchWord, onChange, onClick, onSubmit }: Props) {
  const color = inputValue ? 'var(--primary)' : '#666666';
  const closeBtnBackground = 'var(--gray20)';
  const closeBtnIcon = 'var(--white)';

  const handleSubmit = (e: KeyboardEvent<HTMLFormElement>) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      onSubmit(inputValue);
    }
  }

  return(
    <>
      <form className={styles.container} onKeyDown={handleSubmit}>
        <div className={styles.searchBar}>
          <SearchIcon className={styles.searchIcon} stroke={color}/>
          <input
            type="text"
            name="search"
            value={inputValue}
            onChange={onChange}
            placeholder='링크를 검색해 보세요.'
          />
          {inputValue && (
            <button
              className={styles.closeBtn}
              onClick={onClick}
            >
              <CloseIcon fill={closeBtnBackground} stroke={closeBtnIcon}/>
            </button>
            )
          }
        </div>
      </form>
      <div className={styles.container}>
        {inputValue && searchWord &&
          <div className={styles.searchResult}>
            <span className={styles.searchKeyword}>{inputValue}</span> 로 검색한 결과입니다.
          </div>}
      </div>
    </>
  );
}

export default SearchBar;
