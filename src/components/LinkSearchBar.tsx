import $ from 'jquery';
import searchIcon from '../assets/searchIcon.svg';
import searchClearIcon from '../assets/searchClearIcon.svg';
import '../styles/linkSearchBar.css';

function LinkSearchBar({ inputValue, setInputValue }: any) {
  const placeholder = '링크를 검색해 보세요.';

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const handleClickInputValueClear = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setInputValue('');
    $('#search--input').val('');
  };

  return (
    <>
      <div className="cards-container__search">
        <img className="search--icon" src={searchIcon} alt="searchIcon" />
        <input
          id="search--input"
          className="search--input"
          placeholder={placeholder}
          onChange={handleInputValueChange}
        />
        {inputValue && (
          <button
            className="search-clear--button"
            onClick={handleClickInputValueClear}
          >
            <img
              src={searchClearIcon}
              alt="search-clear"
              className="search-clear--icon"
            />
          </button>
        )}
      </div>
      {inputValue && (
        <p className="search--value">
          <span>{inputValue}</span>으로 검색한 결과입니다.
        </p>
      )}
    </>
  );
}
export default LinkSearchBar;
