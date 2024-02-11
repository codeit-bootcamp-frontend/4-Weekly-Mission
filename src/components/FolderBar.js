import "./FolderBar.css";

export default function FolderBar({ folder }) {
  //console.log(folder.owner);
  return (
    <div className="FolderBar">
      <div className="user">
        <img
          id="folderImg"
          src={folder.owner.profileImageSource}
          alt="폴더 이미지"
        ></img>
        <span id="userName">@{folder.owner.name}</span>
        <span id="folderName">{folder.name}</span>
      </div>
    </div>
  );
}
