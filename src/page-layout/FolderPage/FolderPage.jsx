import { AddLinkBar } from "ui/AddLinkBar/AddLinkBar";
import "./FolderPage.css";
import { SearchBar } from "ui/SearchBar";
import { FolderContent } from "ui/FolderContent/FolderContent";

export const FolderPage = () => {
  return (
    <div className="FolderPage">
      <AddLinkBar />
      <div className="FolderPage-items">
        <SearchBar />
        <FolderContent />
      </div>
    </div>
  );
};
