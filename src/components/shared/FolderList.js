import searchIcon from "../../assets/icons/icon_search.png";
import FolderItem from "./FolderItem";

function FolderList({ items }) {
  return (
    <article>
      <div id="search-bar">
        <img src={searchIcon} alt="searchIcon"></img>
        <input type="text" placeholder="링크를 검색해 보세요." />
      </div>
      <div className="folders-gridBox">
        {items.map((item) => {
          return <FolderItem item={item} key={item.id}></FolderItem>;
        })}
      </div>
    </article>
  );
}

export default FolderList;
