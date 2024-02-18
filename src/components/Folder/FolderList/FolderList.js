const FolderList = ({ folderList }) => {
  console.log(folderList);
  return (
    <div className="folderList">
      {folderList?.map((item) => (
        <button className="folderList-button" key={item.id}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default FolderList;
