const FolderList = ({ onFolderClick, folders }) => {
  return (
    <div>
      <ul>
        <button onClick={() => onFolderClick("ALL")}>전체</button>
        {folders?.map(({ id, name }) => (
          <button key={id} onClick={() => onFolderClick(id)}>
            {name}
          </button>
        ))}
      </ul>
      <button>폴더 추가</button>
    </div>
  );
};

export default FolderList;
