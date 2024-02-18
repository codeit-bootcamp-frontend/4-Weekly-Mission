import "./FolderList.css";

const FolderList = ({ folderList, onSelectFolderList }) => {
  const handleClickFolderList = (e) => {
    onSelectFolderList({ id: e.target.id });
  };
  return (
    <div className="folderList">
      <span
        className="folderList-button"
        onClick={handleClickFolderList}
        id={null}
      >
        전체
      </span>
      {folderList?.map((item) => (
        <span
          className="folderList-button"
          key={item.id}
          id={item.id}
          onClick={handleClickFolderList}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default FolderList;
