import SearchBar from "./SearchBar";
import FolderBtnList from "./FolderBtnList";
import "./FolderSection.css";

export default function FolderSection() {
  return (
    <div className="FolderSection">
      <div className="FolderSection-Frame">
        <SearchBar />
        <FolderBtnList />
      </div>
    </div>
  );
}
