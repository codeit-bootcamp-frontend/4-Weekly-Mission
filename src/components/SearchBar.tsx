import styles from '../css/SearchBar.module.css'
import closeIcon from '../images/Icon_close.svg';

function SearchBar({ inputValue, onChange, onClick }: any) {
  return(
    <div className={styles.searchBar}>
      <div className={styles.container}>
        <div className={styles.searchIcon}></div>
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
            <img className={styles.closeImg} src={closeIcon} alt='closeBtn'/>
          </button>
          )
        }
      </div>
    </div>
  );
}

export default SearchBar;
