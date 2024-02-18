import "./folderSearchBar.css";
import SearcIcon from "../../assets/image/search.svg";
export const FolderSearchBar = () => {
  return (
    <div className="searchBarContainer">
      <div className="inputContainer">
        <div>
          <img src={SearcIcon} alt={"SearcIcon"} />
        </div>
        <input
          className="searchBar-input"
          placeholder="링크를 검색해 보세요."
        />
      </div>
    </div>
  );
};
