import { FolderOptionMenu } from "../FolderOptionMenu";
import "./FolderOption.css";

export const FolderOption = ({ folderName }) => {
  return (
    <div className="folderOption">
      <div className="folderOption-folderName">{folderName}</div>
      {folderName === "전체" ? <></> : <FolderOptionMenu />}
    </div>
  );
};
