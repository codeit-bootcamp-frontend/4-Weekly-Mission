import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.colorBox}>
      <FaSearch className={styles.searchIcon} />
      <input className={styles.input} placeholder='링크를 검색해 보세요' />
    </div>
  );
};

export default SearchBar;
