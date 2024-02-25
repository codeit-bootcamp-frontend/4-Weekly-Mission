import FolderItem from "./FolderItem";

function FolderList({ items, $isVisible, setIsVisible }) {
  return (
    <article>
      <div className="folders-gridBox">
        {items.map((item) => {
          return (
            <FolderItem
              item={item}
              key={item.id}
              $isModalVisible={$isVisible}
              setIsModalVisible={setIsVisible}
            ></FolderItem>
          );
        })}
      </div>
    </article>
  );
}

export default FolderList;
