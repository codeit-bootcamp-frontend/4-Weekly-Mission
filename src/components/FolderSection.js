import "./FolderSection.css";
import SearchBar from "./SearchBar";

export default function FolderSection() {
  return (
    <div className="FolderSection">
      <div className="FolderSection-Frame">
        <SearchBar />
        <div className="FolderBtnList"></div>
      </div>
    </div>
  );
}
