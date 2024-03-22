import './SearchBar.css';
import searchIcon from '../assets/searchIcon.svg';
import closeIcon from '../assets/close.svg';

interface SearchBarProps {
  setSearchQuery: (value: string) => void;
  searchQuery: string;
}

function SearchBar({ setSearchQuery, searchQuery }: SearchBarProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClear = () => {
    setSearchQuery('');
  };

  return (
    <div className='search-container'>
      <form className='search-form'>
        <label htmlFor='searchInput' className='hiddenLabel'>
          링크를 검색해 보세요.
        </label>
        <img src={searchIcon} alt={searchIcon} className='search' />
        <input
          type='text'
          id='searchInput'
          placeholder='링크를 검색해 보세요.'
          className='search-input'
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchQuery.length > 0 && (
          <img
            src={closeIcon}
            alt={closeIcon}
            className='close'
            onClick={handleSearchClear}
          />
        )}
      </form>
    </div>
  );
}

export default SearchBar;
