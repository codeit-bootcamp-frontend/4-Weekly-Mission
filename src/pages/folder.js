import "../styles/folder.css";
import SearchBar from "./SearchBar";
import CardList from "./CardList";

const Folder = () => {
  return (
    <div className="folder">
      <SearchBar />
      <CardList />
    </div>
  );
};

export default Folder;
