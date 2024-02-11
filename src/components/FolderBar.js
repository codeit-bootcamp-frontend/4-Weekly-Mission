import "./FolderBar.css";

export default function FolderBar({ folder }) {
  console.log(folder.folder.name);
  return (
    <div className="FolderBar">
      <div className="user">
        <img
          id="folderImg"
          src={folder.folder.owner.profileImageSource}
          alt="폴더 이미지"
        ></img>
        <span id="userName">@{folder.folder.owner.name}</span>
        <span id="folderName">{folder.folder.name}</span>
      </div>
    </div>
  );
}
