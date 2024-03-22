import './SearchBar.css';
import searchIcon from '../assets/searchIcon.svg';

interface SearchBarProps {
  setSearchQuery: (value: string) => void;
}

function SearchBar({ setSearchQuery }: SearchBarProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className='search-container'>
      <form className='search-form'>
        <label htmlFor='searchInput' className='hiddenLabel'>
          링크를 검색해 보세요.
        </label>
        <img src={searchIcon} alt={searchIcon} />
        <input
          type='text'
          id='searchInput'
          placeholder='링크를 검색해 보세요.'
          className='search-input'
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}

export default SearchBar;
