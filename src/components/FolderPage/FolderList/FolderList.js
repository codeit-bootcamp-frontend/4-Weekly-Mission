import FolderListItem from "components/FolderPage/FolderListItem/FolderListItem";

const FolderList = ({ folders, selectedId, onSelectedFolder, setModal }) => {
  return (
    <div>
      {folders && (
        <FolderListItem
          folders={folders}
          y
          selectedId={selectedId}
          onSelectedFolder={onSelectedFolder}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default FolderList;
