import { Fragment } from "react";
import SearchIcon from "../../assets/images/Search.svg";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <Fragment>
      <div className="searchBar">
        <img
          src={SearchIcon}
          alt="검색창 돋보기 아이콘"
          className="searchBar-icon"
        />
        <input
          className="searchBar-input"
          type="search"
          placeholder="링크를 검색해 보세요."
        />
      </div>
    </Fragment>
  );
};

export default SearchBar;
