import { SearchBar } from "ui/SearchBar";
import { CardList } from "ui/CardList";
import { AddLink } from "ui/AddLink";
import "./FolderPage.css";

export const FolderPage = () => {
  return (
    <div className="FolderPage">
      <AddLink />
      <div className="FolderPage-items">
        <SearchBar />
        <CardList></CardList>
      </div>
    </div>
  );
};
