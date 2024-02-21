import FolderList from "./FolderList";

const FolderToolBar = ({ onFolderClick }) => {
  return (
    <div>
      <FolderList onFolderClick={onFolderClick} />
    </div>
  );
};

export default FolderToolBar;
