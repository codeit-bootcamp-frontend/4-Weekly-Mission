import '../styles/SearchBar.css';
import iconSearch from '../assets/logo/Search.svg';

const SearchBar = () => {
  return (
    <>
      <div className='searchbar-Section'>
        <div className='searchbar-content'>
          <img className='searchbar-icon' src={iconSearch} alt='검색 기능을 표시하기 위한 로고' />
          <input className='searchbar-input' type='text' placeholder='링크를 검색해 보세요.'></input>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
