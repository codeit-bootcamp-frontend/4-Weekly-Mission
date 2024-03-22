import React, {
  FormEvent,
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
} from 'react';
import styles from './LinkSearchInput.module.css';

interface LinkSearchProps {
  setViewSearchData: Dispatch<SetStateAction<boolean | null>>;
  searchData: string | null;
  setSearchData: Dispatch<SetStateAction<string | null>>;
}
function LinkSearchInput({
  setViewSearchData,
  searchData,
  setSearchData,
}: LinkSearchProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setViewSearchData(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };
  return (
    <div className={styles.link_search_input_wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.link_search_input}
          placeholder='링크를 검색해 보세요.'
          value={searchData || ''}
          onChange={handleInputChange}
        ></input>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/search_icon.svg`}
          className={styles.search_icon}
          alt='search_icon'
        />
        <img
          className={styles['input_close_icon']}
          src={`${process.env.PUBLIC_URL}/assets/images/search_input_close_icon.svg`}
          alt='검색 취소 아이콘'
        />
      </form>
    </div>
  );
}

export default LinkSearchInput;
