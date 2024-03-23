import "./SearchBar.css";
import SEARCH_IMAGE from "./constant";

interface Prop {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
}

const SearchBar: React.FC<Prop> = ({ handleInputChange, searchTerm }: Prop) => {
  return (
    <div className="SearchBar">
      <input
        className="SearchBar-input"
        type="search"
        placeholder="링크를 검색해 보세요."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <img
        src={SEARCH_IMAGE}
        alt="검색창인 것을 알려주는 돋보기 아이콘"
        className="SearchBar-icon"
      />
    </div>
  );
};

export default SearchBar;
