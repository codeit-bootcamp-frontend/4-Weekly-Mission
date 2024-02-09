import loupe from "../images/logo_icon/loupe.png";
import "../css/shared/searchingBar.css";

function SearchingBar(){
  return (
    <form className="search-section">
      <img className="loupe-icon" src={loupe} alt="돋보기" />
      <input claaName="searching-input" type="text" placeholder="제목을 검색해 보세요" />
    </form>
  );
}

export default SearchingBar;