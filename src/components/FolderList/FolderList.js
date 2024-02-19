import FolderListItem from "components/FolderListItem/FolderListItem";

const FolderList = ({ folders, selectedId, onSelectedFolder }) => {
  return (
    <div>
      {folders && (
        <FolderListItem
          folders={folders}
          selectedId={selectedId}
          onSelectedFolder={onSelectedFolder}
        />
      )}
    </div>
  );
};

export default FolderList;
