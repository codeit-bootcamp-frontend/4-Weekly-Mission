import "./folderSearchBar.css";
import SearcIcon from "../../assets/image/search.svg";
import { Dispatch, SetStateAction } from "react";

interface ISearchBar {
  handleSearchInput: Dispatch<SetStateAction<string>>;
}

export const FolderSearchBar = ({ handleSearchInput }: ISearchBar) => {
  return (
    <div className="searchBarContainer">
      <div className="inputContainer">
        <div>
          <img src={SearcIcon} alt={"SearcIcon"} />
        </div>
        <input
          className="searchBar-input"
          placeholder="링크를 검색해 보세요."
          onChange={(e) => handleSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
};
