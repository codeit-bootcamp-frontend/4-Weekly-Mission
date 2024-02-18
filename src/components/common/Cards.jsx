import SearchBar from "./SearchBar.jsx";
import "./Cards.css";
import CardList from "./CardList.jsx";
import FolderList from "./FolderList.jsx";

function Cards({ folder, folderList, currentFolder, setCurrentFolder }) {
  return (
    <div className="Cards">
      <SearchBar className="Cards-SearchBar" />
      {folderList && (
        <FolderList folderList={folderList} setFolder={setCurrentFolder} />
      )}
      <CardList folder={folder} />
    </div>
  );
}

export default Cards;
