import styles from '../styles/SearchBar.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import iconSearch from '../assets/icons/search.svg';

const SearchBar = () => {

  return (
    <div className={cn('searchbar')}>
      <img className={cn('searchbar-icon')} src={iconSearch} alt="링크를 검색하기." />
      <input className={cn('searchbar-input')} type="text" placeholder="링크를 검색해 보세요."></input>
    </div>
  );
};

export default SearchBar;