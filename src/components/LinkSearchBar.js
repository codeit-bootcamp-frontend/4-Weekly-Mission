import searchIcon from '../assets/searchIcon.svg';
import '../styles/linkSearchBar.css';
function LinkSearchBar() {
  const placeholder = '링크를 검색해 보세요.';
  return (
    <form className="cards-container__search">
      <img className="search--icon" src={searchIcon} alt="searchIcon"></img>
      <input className="search--input" placeholder={placeholder}></input>
    </form>
  );
}
export default LinkSearchBar;
