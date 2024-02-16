import useFolderList from "../hooks/useFolderList.js";

const FolderList = () => {
  const folderList = useFolderList();

  return (
    <div>
      <h2>Folder List</h2>
      <ul>
        {folderList.map((folder) => (
          <li key={folder.id}>
            <strong>{folder.name}</strong>
            {/* <p>Created at: {folder.created_at}</p>
            <p>User ID: {folder.user_id}</p>
            <p>Favorite: {folder.favorite ? "Yes" : "No"}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderList;
