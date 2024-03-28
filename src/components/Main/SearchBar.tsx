import classNames from 'classnames';
import React, { useContext } from 'react';

import searchIcon from 'assets/images/search-icon.svg';

import styles from 'components/Main/SearchBar.module.css';

import { InputStateContext } from 'context/InputStateProvider';

function SearchBar() {
  const { inputState, setInputState } = useContext(InputStateContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  const containerClasses = classNames(styles['search-bar'], 'position-relative', 'width-full');
  const inputClasses = classNames(styles['search-bar-input'], 'background-light', 'text-color-text', 'width-full');
  const inputImgClasses = classNames(styles['search-bar-icon'], 'position-absolute');

  return (
    <div className={containerClasses}>
      <input
        className={inputClasses}
        type="text"
        value={inputState}
        onChange={handleInputChange}
        placeholder="링크를 검색해 보세요."
      />
      <img className={inputImgClasses} src={searchIcon} alt="searchIcon" />
    </div>
  );
}

export default SearchBar;
