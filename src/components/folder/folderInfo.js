import { useFolder } from "../../hooks/useFolder";
import "./folderInfo.css";

export const FolderInfo = () => {
  const { folder } = useFolder();
  if (!folder) {
    return <div className="infoContainer" />;
  }
  return (
    <div className="infoContainer">
      <div className="infoFlexBox">
        <img
          className="infoImage"
          src={folder?.owner?.profileImageSource}
          alt={folder.owner.name}
        />
        <div className="infoName">{folder.owner.name}</div>
        <div className="infoTitle">{folder.name}</div>
      </div>
    </div>
  );
};
