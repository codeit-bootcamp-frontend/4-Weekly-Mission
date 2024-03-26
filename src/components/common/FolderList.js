import FolderItem from "./FolderItem";

function FolderList({ items, $isModalVisible, setIsModalVisible }) {
  return (
    <article>
      <div className="folders-gridBox">
        {items.map((item) => {
          return (
            <FolderItem
              item={item}
              key={item.id}
              $isModalVisible={$isModalVisible}
              setIsModalVisible={setIsModalVisible}
            ></FolderItem>
          );
        })}
      </div>
    </article>
  );
}

export default FolderList;
