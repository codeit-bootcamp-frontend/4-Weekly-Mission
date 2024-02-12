import './SearchBox.css';
import glassesIconURL from '../../../assets/icons/SearchIcon.png';

function SearchBox() {
  return (
    <div className="search-box">
      <div>
        <img
          src={glassesIconURL}
          alt="searchbox icon"
          className="search-box-img"
        />
      </div>
      <p className="text">링크를 검색해 보세요.</p>
    </div>
  );
}

export default SearchBox;
