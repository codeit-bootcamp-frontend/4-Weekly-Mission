import search from './images/search.svg';
import './SearchBar.css';

function SearchBar() {
  return (
    <main id="mainShared">
      <div className="searchBar">
        <img src={search} alt="돋보기 아이콘" />
        <p>링크를 검색해 보세요</p>
      </div>
    </main>
  );
}

export default SearchBar;
