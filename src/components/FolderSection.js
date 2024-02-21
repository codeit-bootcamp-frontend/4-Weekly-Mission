import "./FolderSection.css";
import searchIcon from "../assets/Search.svg";

export default function FolderSection() {
  return (
    <div className="FolderSection">
      <div className="FolderSection-Frame">
        <div className="searchBar">
          <div className="searchBarElement">
            <img id="searchIcon" src={searchIcon} alt="검색 아이콘" />
            <input
              type="text"
              id="inputText"
              placeholder="링크를 검색해보세요."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
