import FolderListItem from "components/FolderPage/FolderListItem/FolderListItem";


interface Props {
    folders: [{
    id: string;
    name: string;
  }];
  selectedId:  string;
  onSelectedFolder:({ name, id }: {name: string | null, id: number|string }) => void
  setModal: (value: string) => void;
}

const FolderList = ({ folders, selectedId, onSelectedFolder, setModal } : Props) => {
  return (
    <div>
      {folders && (
        <FolderListItem
          folders={folders}
          selectedId={selectedId}
          onSelectedFolder={onSelectedFolder}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default FolderList;
