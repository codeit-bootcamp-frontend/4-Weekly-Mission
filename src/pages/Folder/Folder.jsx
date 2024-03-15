import { AddLinkBar } from "pages/Shared/components/AddLinkBar/AddLinkBar";
import "./Folder.css";
import { SearchBar } from "pages/components/SearchBar";
import { FolderContent } from "pages/Folder/components/FolderContent/FolderContent";

export const Folder = () => {
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
