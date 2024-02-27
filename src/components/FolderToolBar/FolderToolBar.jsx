import FolderButton from "../FolderButton/FolderButton";
import AddFolderButton from "../AddFolderButton/AddFolderButton";
import ShareEditDeleteButton from "../ShareEditDeleteButton/ShareEditDeleteButton";
import "./FolderToolBar.css";

const BUTTONS = [
  {
    icon: "images/share.svg",
    text: "공유",
  },
  {
    icon: "images/pen.svg",
    text: "이름 변경",
  },
  {
    icon: "images/trash.svg",
    text: "삭제",
  },
];

const FolderToolBar = ({ folderLists, chosenFolderId, onClickFolder }) => {
  const folderListName =
    "all" === chosenFolderId ? "전체" : folderLists?.find(({ id }) => id === chosenFolderId).name;

  return (
    <div className="folder-container">
      <div className="folder-lists">
        <FolderButton
          key="all"
          text="전체"
          onClick={() => onClickFolder("all")}
          isChosen={"all" === chosenFolderId}
        />
        {folderLists?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => onClickFolder(id)}
            isChosen={id === chosenFolderId}
          />
        ))}
      </div>
      <div className="add-button">
        <AddFolderButton />
      </div>
      <h2 className="folder-name">{folderListName}</h2>
      {chosenFolderId !== "all" && (
        <div className="buttons">
          {BUTTONS.map((buttonData) => (
            <ShareEditDeleteButton key={buttonData.text} {...buttonData} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderToolBar;
