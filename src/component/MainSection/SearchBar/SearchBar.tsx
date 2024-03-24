import { searchBarProps } from "../../../interfaces/folder.interface";
import "./SearchBar.css";
import searchImg from "../../../images/search.svg";

const SearchBar = ({ onSearch }: searchBarProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };
  return (
    <div className="search-bar">
      <input
        className="input"
        type="search"
        placeholder="링크를 검색해 보세요."
        onChange={handleSearch}
      />
      <img className="icon" src={searchImg} alt="돋보기 아이콘" />
    </div>
  );
};

export default SearchBar;
