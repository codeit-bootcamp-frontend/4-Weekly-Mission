import FolderItem from "./FolderItem";

function FolderList({ items }) {
  return (
    <article>
      <div className="folders-gridBox">
        {items.map((item) => {
          return <FolderItem item={item} key={item.id}></FolderItem>;
        })}
      </div>
    </article>
  );
}

export default FolderList;
