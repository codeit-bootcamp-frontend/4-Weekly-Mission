import searchIcon from '../assets/search-icon.png';
import '../style/SearchBar.css';

function SearchBar() {
  return (
    <>
      <div className='search-bar'>
        <div className='search'>
          <img src={searchIcon} alt='search-icon' />
          <div className='search-text'>링크를 검색해 보세요</div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
