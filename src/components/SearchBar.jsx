import Search from '../assets/Search.svg';
import Styles from '../styles/Folder.module.css';

const SearchBar = () => {
  return (
    <div>
      <div className={Styles.SearchBar}>
        <img className={Styles.SearchIcon} src={Search} alt='서치 아이콘' />
        <input
          className={Styles.SearchText}
          placeholder='링크를 검색해 보세요'
        />
      </div>
    </div>
  );
};

export default SearchBar;
